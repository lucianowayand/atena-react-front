import { parseCookies } from "nookies";
import { useEffect } from "react";
import { Paper } from "@mui/material";

export default function Application(){
    const { user, setUser } = useEffect()

    return(
        <Paper elevation={3} className="login-form">

        </Paper>
    )
}