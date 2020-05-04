import React, {useEffect, useState} from "react";
import {makeStyles} from "@material-ui/styles";
import {Paper} from "@material-ui/core";
import {
    Link,
    useParams
} from "react-router-dom";
import API_URL from "../API";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const ConfirmPurchase = () => {
    let {id} = useParams();
    const [boughtProduct, setBoughtProduct] = useState({});

    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Authorization': 'Bearer ' + localStorage.getItem("token")
            },
        };
        const url = API_URL + '/buys';
        fetch(url, requestOptions)
            .then(response => response.json())
            .then(
                data => {
                    setBoughtProduct(data[0]);
                });

    }, []);

    console.log(boughtProduct);

    function handleConfirm() {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Authorization': 'Bearer ' + localStorage.getItem("token")
            },
        };
        const url = API_URL + '/buys/confirm/' + id;
        fetch(url, requestOptions);
    }

    return (
        <Paper>
            <Button onClick={handleConfirm}>
                <Typography variant="h6">
                    Подтвердить
                </Typography>
            </Button>
        </Paper>
    )
};

export default ConfirmPurchase;