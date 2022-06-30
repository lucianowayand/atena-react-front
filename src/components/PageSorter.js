import { useState } from "react";
import { api } from "../services/api.js";


import FormSubmit from "./views/FormSubmit.js";
import FormPageController from "./FormPageController.js";

export default function PageSorter() {
    const componentList = ['FormUserData', 'FormPersonalData', 'FormAddress']

    const [currentComponent, setComponent] = useState('FormUserData')
    const [registerFinished, setRegisterFinished] = useState(false)
    const [activeStep, setActiveStep] = useState(0)
    const [userData, setUserData] = useState({
        email: '',
        password: '',
        name: '',
        surname: '',
        cpf: '',
        followingNews: false,
        followingSales: false,
        city: '',
        state: '',
        cep: '',
        fullAddress: '',
        addressNumber: '',
        addressInfo: null
    })

    function nextStep() {
        if (activeStep < 2) {
            setActiveStep((activeStep) => activeStep + 1)
            setComponent(componentList[activeStep + 1])
        }
    }
    function previousStep() {
        if (activeStep !== 0) {
            setActiveStep((activeStep) => activeStep - 1)
            setComponent(componentList[activeStep - 1])
        }
    }

    function register() {
        api.post('/user', userData).then((res) => {
            console.log(res)
            setRegisterFinished(true)
        }).catch((error) => {
            console.log(error)
        })

    }

    const handleChange = input => event => {
        if (event.target.value !== '') {
            setUserData(prevUserData => ({ ...prevUserData, [input]: event.target.value }))
        } else {
            setUserData(prevUserData => ({ ...prevUserData, [input]: null }))
        }
    }
    const handleSwitch = input => event => {
        setUserData(prevUserData => ({ ...prevUserData, [input]: event.target.checked }))

    }

    return (
        <>
            {registerFinished ?
                <FormSubmit userData={userData} />
                :
                <FormPageController
                    activeStep={activeStep}
                    currentComponent={currentComponent}
                    userData={userData}
                    handleChange={handleChange}
                    handleSwitch={handleSwitch}
                    previousStep={previousStep}
                    nextStep={nextStep}
                    register={register}
                />
            }
        </>
    )
}