import React from 'react';
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import AddIcon from '@material-ui/icons/Add';
import {useStyles} from "../Session/Login";
import Profile from "../User/Profile";

export const IsTokenValid = () => localStorage.getItem("token") && ((localStorage.getItem("token").length) === 40);

async function handleSubmit(event) {
    event.preventDefault();
    const userData = new FormData(event.target);
    const object = {};
    userData.forEach((value, key) => {object[key] = value});
    const json = JSON.stringify(object);
    console.log(json);

    const url = "http://localhost:9000/sign-up";
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
    },[]);
    console.log(response.json());
    // return await response.json(); // parses JSON response into native JavaScript objects
}


const SignUp = () => {
    const classes = useStyles();

    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    return (
        <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <AddIcon/>
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
                        onChange={event => {
                            setName(event.target.value);
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
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="username"
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
            </div>
        </Container>
    )
};
export default SignUp