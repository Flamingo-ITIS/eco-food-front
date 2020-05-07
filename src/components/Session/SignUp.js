import React from 'react';
import TextField from "@material-ui/core/TextField";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import {useStyles} from "./Login";
import Grid from "@material-ui/core/Grid";
import ContactsOutlinedIcon from '@material-ui/icons/ContactsOutlined';
import Paper from "@material-ui/core/Paper";
import {Redirect} from "react-router-dom";
import API_URL from "../API";

async function handleSubmit(event) {
    event.preventDefault();
    const userData = new FormData(event.target);
    const object = {};
    userData.forEach((value, key) => {
        object[key] = value
    });
    const json = JSON.stringify(object);
    console.log(json);

    const url = API_URL + "/sign-up";
    console.log("start");
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *client
        body: json // body data type must match "Content-Type" header
    }, []);
    console.log(response.status)
    if (response.status === 200) {
        return (
            <Redirect
                to={{
                    pathname: "/profile"
                }}
            />
        )
    }
    // return await response.json(); // parses JSON response into native JavaScript objects
}


const SignUp = () => {
    const classes = useStyles();

    return (
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
                <form action="/profile"
                      className={classes.form}
                      noValidate
                      onSubmit={handleSubmit}>
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
    )
};
export default SignUp