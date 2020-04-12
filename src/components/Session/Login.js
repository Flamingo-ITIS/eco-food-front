import React, {useEffect} from 'react';
import Container from "@material-ui/core/Container";
import makeStyles from "@material-ui/core/styles/makeStyles";
import TextField from "@material-ui/core/TextField";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Switch from "@material-ui/core/Switch";
import Button from "@material-ui/core/Button";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {Link} from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";

export const IsTokenValid = () => localStorage.getItem("token");

export const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        maxWidth: 400,
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: "5px",
        padding: "30px",
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.primary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor: theme.palette.primary.main,
        padding: "5px",
        color: "white"
    },
    centerRow: {
        padding: theme.spacing(3, 2),
        textAlign: "center",
        margin: "10px",
    }
}));


async function handleSubmit(event) {
    event.preventDefault();
    const userData = new FormData(event.target);
    const username = userData.get("username");
    const password = userData.get("password");
    const data = "username=" + username + "&password=" + password;


    // const express = require('express');
    // const cors = require('cors');
    // const app = express();
    //
    // app.get('/login', cors(), function (req, res, next) {
    //     res.json({msg: 'This is CORS-enabled for a Single Route'})
    // })

    console.log(data);
    const url = "http://localhost:9000/login";
    console.log("start");
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        credentials: 'same-origin',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Access-Control-Allow-Origin': '*',
            'Accept': 'application/json'
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *client
        body: data // body data type must match "Content-Type" header
    }).then(response => response.json())
        .then(result => console.log(result));
    // if (response.body != null) {
    //     localStorage.setItem("token", response.body);
    //     return <Switch to="/profile"/>
    // } else {
    //     return <Switch to="/login"/>
    // }
    // return await response.json(); // parses JSON response into native JavaScript objects
}

const Login = () => {
    const classes = useStyles();
    const [login, setLogin] = React.useState("");
    const [password, setPassword] = React.useState("");

    return (
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
        >
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <h1>
                    Вход
                </h1>
                <form className={classes.form}
                      noValidate
                      onSubmit={handleSubmit}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="Логин"
                        name="username"
                        autoFocus
                        onChange={event => {
                            setLogin(event.target.value);
                        }}
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
                        onChange={event => {
                            setPassword(event.target.value);
                        }}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Вход
                    </Button>
                </form>
                <div>
                    Еще не зарегистрированы?
                    <Link to="/sign_up">
                        Регистрация
                    </Link>
                </div>
            </Paper>
        </Grid>
    )
};
export default Login