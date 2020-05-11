import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import TextField from "@material-ui/core/TextField";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {
    Link,
    useHistory
} from "react-router-dom";
import { useCookies } from 'react-cookie';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import API_URL from "../API";
import {useAlert} from "react-alert";
import Typography from "@material-ui/core/Typography";


export const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(3),
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
        width: '100%',
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

const Login = () => {
    const classes = useStyles();
    const history = useHistory();
    const [cookies, setCookie, removeCookie] = useCookies();
    const alert = useAlert();


    async function handleSubmit(event) {
        event.preventDefault();

        const userData = new FormData(event.target);
        const username = userData.get("username");
        const password = userData.get("password");
        const data = "username=" + username + "&password=" + password;
        console.log(data)

        const url = API_URL + '/login';

        // axios({
        //     method: 'post',
        //     url: url,
        //     body: data,
        //     headers: {
        //         'Content-Type': 'application/x-www-form-urlencoded',
        //         'Access-Control-Allow-Origin': '*',
        //         'Accept': 'application/json'
        //     }
        // })

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Access-Control-Allow-Origin': '*',
                'Accept': 'application/json'
            },
            body: data
        };

        await fetch(url, requestOptions)
            .then(response => response.json())
            .then(data => {
                if (data.token !== undefined) {
                    setCookie('auth_token', data.token, { path: '/' });
                    localStorage.setItem("username", username);
                    alert.success("Вы успешно вошли в систему");
                    history.push('/profile');
                } else {
                    alert.error("Неверный логин или пароль");
                }
            });



        // await fetch(url, requestOptions)
        //     .then(response => {
        //         console.log(response);
        //         if (response.status === 200) {
        //             console.log("Login successfull");
        //             console.log(response.json()
        //                 .then(data => data.token));
        //             // localStorage.setItem("token", response.json().token);
        //             // history.push('/profile');
        //         } else if (response.status === 204) {
        //             console.log("Username password do not match");
        //             alert("username password do not match")
        //             history.push('/login');
        //         } else {
        //             console.log("Username does not exists");
        //             alert("Username does not exist");
        //             history.push('/login');
        //         }
        //     });
    }

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
                      onSubmit={handleSubmit}
                >
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="Логин"
                        name="username"
                        autoFocus
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
                <Typography variant="body1">
                    Еще не зарегистрированы?
                    <Link to="/sign_up">
                        Регистрация
                    </Link>
                </Typography>
            </Paper>
        </Grid>
    )
};
export default Login