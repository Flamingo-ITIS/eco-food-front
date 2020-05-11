import React, {useEffect, useState} from 'react';
import TextField from "@material-ui/core/TextField";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import {useStyles} from "./Login";
import Grid from "@material-ui/core/Grid";
import ContactsOutlinedIcon from '@material-ui/icons/ContactsOutlined';
import Paper from "@material-ui/core/Paper";
import API_URL from "../API";
import {useCookies} from "react-cookie";
import {useHistory} from "react-router-dom";
import {useAlert} from "react-alert";

const SignUp = () => {
    const classes = useStyles();
    const history = useHistory();
    const [setCookie] = useCookies();
    const alert = useAlert();

    async function handleSubmit(event) {
        event.preventDefault();

        const userData = new FormData(event.target);
        const username = userData.get("username");

        const object = {};
        userData.forEach((value, key) => {
            object[key] = value
        });
        const json = JSON.stringify(object);
        console.log(json);

        const url = API_URL + "/sign-up";

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: json
        };

        await fetch(url, requestOptions)
            .then(async response => {
                const data = await response.json();
                if (response.ok) {
                    localStorage.setItem("username", username);
                    alert.success('Регистрация прошла успешно! Пожалуйста войдите.');
                    history.push('/login');
                } else {
                    alert.error('Введенные данные невалидны');
                    const error = (data && data.message) || response.status;
                    return Promise.reject(error);
                }
            })
            .catch(error => {
                console.log(error)
            });
    }

    // useEffect(
    //     () => {
    //         return flash;
    //     }
    // );


    return (
        <div>
            {/*<FlashMassage duration={5000} persistOnHover={true}>*/}
            {/*    <p>{flash}</p>*/}
            {/*</FlashMassage>*/}
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Paper className={classes.paper} elevation={3}>
                    <Avatar className={classes.avatar}>
                        <ContactsOutlinedIcon/>
                    </Avatar>
                    <h1>
                        Регистрация
                    </h1>
                    <form className={classes.form}
                          onSubmit={handleSubmit}
                    >
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="contactPhone"
                            label="Номер телефона"
                            name="contactPhone"
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="geoPosition"
                            label="Адрес"
                            name="geoPosition"
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="name"
                            label="Имя"
                            name="name"
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            type="password"
                            id="password"
                            label="Пароль"
                            name="password"
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="Имя пользователя"
                            name="username"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Зарегистрироваться
                        </Button>
                    </form>
                </Paper>
            </Grid>
        </div>
    )
};
export default SignUp