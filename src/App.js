import { useState } from "react";
import FirstPage from "./components/FirstPage";
import SecondPage from "./components/SecondPage";
import ThirdPage from "./components/ThirdPage";

export default function App() {
  const [ currentComponent, setComponent ] = useState('FirstPage')
  return (
    <div>
      <h1>Atena.io - Initial commit</h1>
      
      { currentComponent=='FirstPage' ?
        <FirstPage/>
      : null}
      { currentComponent=='SecondPage' ?
        <SecondPage/>
      : null}
      { currentComponent=='ThirdPage' ?
        <ThirdPage/>
      : null}

      <button onClick={()=>{
        if(currentComponent=='FirstPage'){
          setComponent('SecondPage')

        }else if(currentComponent=='SecondPage'){
          setComponent('ThirdPage')
        }
        else if(currentComponent=='ThirdPage'){
          setComponent('FirstPage')
        }
      }}>Next</button>

    </div>
  );
}
