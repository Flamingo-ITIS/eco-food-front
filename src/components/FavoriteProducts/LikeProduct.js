import LoyaltyIcon from '@material-ui/icons/Loyalty';
import IconButton from "@material-ui/core/IconButton";
import React from "react";
import {makeStyles} from "@material-ui/styles";
import API_URL from "../API";
import {useCookies} from "react-cookie";
import {useAlert} from "react-alert";
import {useHistory} from "react-router-dom";

export const useStyles = makeStyles(theme => ({
    iconButton: {
        backgroundColor: theme.palette.primary.light,
        "&:hover": {
            backgroundColor: theme.palette.primary.main,
        },
        color: "black",
        // border: "1px solid black",
        margin: "10px",
        padding: "10px"
    },
}));


const LikeProduct = ({product_id}) => {
    const classes = useStyles();
    const [cookies] = useCookies();
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
                if (response.status === 401){
                    alert.success("Пожалуйста, авторизуйтесь.");
                    history.push("/login")
                }
                if (response.ok) {
                    alert.success("Товар добавлен в избранное");
                } else {
                    alert.error("Что-то пошло не так...");
                    const error = (data && data.message) || response.status;
                    return Promise.reject(error);
                }
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    };

    return (
        <IconButton className={classes.iconButton}
                    onClick={(e) => {
                        e.preventDefault();
                        triggerLike();
                    }}>
            <LoyaltyIcon fontSize="large"/>
        </IconButton>
    )
};

export default LikeProduct;