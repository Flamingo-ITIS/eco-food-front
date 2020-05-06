import React from "react";
import {useHistory} from "react-router-dom";
import API_URL from "../API";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {useCookies} from "react-cookie";

const ConfirmPurchase = ({id}) => {
    const [cookies] = useCookies();

    function handleConfirm() {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Authorization': 'Bearer ' + cookies.auth_token
            },
        };
        const url = API_URL + '/buys/confirm/' + id;
        fetch(url, requestOptions);
    }

    return (
        <Button variant="outlined" onClick={handleConfirm}>
            <Typography variant="body1">
                Подтвердить
            </Typography>
        </Button>
    )
};

export default ConfirmPurchase;