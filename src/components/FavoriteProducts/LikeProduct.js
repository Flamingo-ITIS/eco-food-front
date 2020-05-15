import LoyaltyIcon from '@material-ui/icons/Loyalty';
import IconButton from "@material-ui/core/IconButton";
import React, {useEffect, useState} from "react";
import {makeStyles} from "@material-ui/styles";
import API_URL from "../API";
import {useCookies} from "react-cookie";
import {useAlert} from "react-alert";
import {useHistory} from "react-router-dom";
import UnLikeProduct from "./UnLikeProduct";

export const useStyles = makeStyles(theme => ({
    iconButton: {
        backgroundColor: theme.palette.primary.light,
        "&:hover": {
            backgroundColor: theme.palette.primary.main,
        },
        color: "black",
        margin: "10px",
        padding: "10px"
    },
}));


const LikeProduct = ({product_id}) => {
    const classes = useStyles();
    const [cookies] = useCookies();
    const [isLiked, setIsLiked] = useState(false);
    const alert = useAlert();
    const history = useHistory();

    function triggerLike() {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Authorization': 'Bearer ' + cookies.auth_token
            },
        };
        const url = API_URL + '/' + product_id + '/favorites';
        fetch(url, requestOptions)
            .then(async response => {
                const data = await response;
                // if (response.status === 401){
                //     alert.success("Пожалуйста, авторизуйтесь.");
                //     history.push("/login")
                // }
                if (response.ok) {
                    setIsLiked(true)
                    alert.success("Товар добавлен в избранное");
                } else {
                    alert.show("Для начала нужно авторизоваться.");
                    history.push("/login")
                    const error = (data && data.message) || response.status;
                    return Promise.reject(error);
                }
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    };

    if (!isLiked) return (
        <IconButton className={classes.iconButton}
                    onClick={(e) => {
                        e.preventDefault();
                        triggerLike();
                    }}
        >
            <LoyaltyIcon
                fontSize="large"
            />
        </IconButton>
    )
    else return (
        <UnLikeProduct product_id={product_id}/>
    )
};

export default LikeProduct;