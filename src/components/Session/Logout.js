import React from "react";
import {Link, Redirect, useHistory} from "react-router-dom";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Button from "@material-ui/core/Button";
import API_URL from "../API";
import {useCookies} from "react-cookie";

const Logout = () => {
    // const history = useHistory();
    const [cookies,removeCookie] = useCookies();

    async function handleExit() {
        const url = API_URL + "/logout";

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Authorization': 'Bearer ' + cookies.auth_token
            }
        };
        await fetch(url, requestOptions);
        removeCookie('auth_token');
        // history.push('/main');
    }
    return (
        <Button onClick={handleExit}>
            <ExitToAppIcon/>
            Выход
        </Button>
    )
};
export default Logout;
