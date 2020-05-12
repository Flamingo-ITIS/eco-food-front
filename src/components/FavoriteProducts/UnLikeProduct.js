import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';
import IconButton from "@material-ui/core/IconButton";
import React, {useState} from "react";
import {makeStyles} from "@material-ui/styles";
import API_URL from "../API";
import {useCookies} from "react-cookie";
import {useAlert} from "react-alert";
import {useHistory} from "react-router-dom";
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import LikeProduct from "./LikeProduct";


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

const UnLikeProduct = ({product_id}) => {
    const classes = useStyles();
    const [cookies] = useCookies();
    const [isLiked, setIsLiked] = useState(true);
    const alert = useAlert();
    const history = useHistory();

    async function triggerDelete() {
        if (window.confirm("Вы уверены?")) {
            const requestOptions = {
                method: 'DELETE',
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
                    if (response.status === 401) {
                        alert.success("Пожалуйста, авторизуйтесь.");
                        history.push("/login")
                    }
                    if (response.ok) {
                        setIsLiked(false);
                        alert.success("Товар удален из избранных");
                    } else {
                        alert.error("Что-то пошло не так...");
                        const error = (data && data.message) || response.status;
                        return Promise.reject(error);
                    }
                })
                .catch(error => {
                    console.error('There was an error!', error);
                });
        }
    };

    if (isLiked) return (
        <IconButton
            className={classes.iconButton}
            onClick={(e) => {
                e.preventDefault();
                triggerDelete();
            }}
        >
            <LoyaltyIcon
                fontSize="large"
                color="secondary"
            />
        </IconButton>
    );
    else return (
        <LikeProduct product_id={product_id}/>
    )
};

export default UnLikeProduct;