import { useState } from "react";
import { Button, Box } from "@mui/material";

import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";

export default function PageSorter(){
    const [currentComponent, setComponent] = useState('FirstPage')
  
    function dynamicRendering() {
        if (currentComponent === 'FirstPage') {
        setComponent('SecondPage')

        } else if (currentComponent === 'SecondPage') {
        setComponent('ThirdPage')
        }
        else if (currentComponent === 'ThirdPage') {
        setComponent('FirstPage')
        }
    }

    return(
        <>
        {currentComponent === 'FirstPage' ?
            <FirstPage/>
            : null}
        {currentComponent === 'SecondPage' ?
            <SecondPage/>
            : null}
        {currentComponent === 'ThirdPage' ?
            <ThirdPage/>
            : null}
        <Box sx={{display:'flex', justifyContent:'flex-end'}}>
            <Button onClick={dynamicRendering} variant='contained'>Next</Button>
        </Box>
        
        </>
    )
}