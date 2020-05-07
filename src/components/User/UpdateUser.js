import Button from "@material-ui/core/Button";
import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import API_URL from "../API";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import {useCookies} from "react-cookie";

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
}));

const UpdateUser = () => {
    const classes = useStyles();
    const history = useHistory();
    const [user, setUser] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);
    const [cookies] = useCookies();

    async function handleSubmit(event) {
        event.preventDefault();
        const json = JSON.stringify(user);
        console.log(json);


        const url = API_URL + "/update-user";

        const requestOptions = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + cookies.auth_token
            },
            body: json
        };
        fetch(url, requestOptions, [])
            .then(async response => {
                const data = await response.json();

                // check for error response
                if (!response.ok) {
                    // get error message from body or default to response status
                    const error = (data && data.message) || response.status;
                    return Promise.reject(error);
                }

                history.push('/profile')
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }


    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Authorization': 'Bearer ' + cookies.auth_token
            },
        };
        const username = localStorage.getItem("username");
        const url = API_URL + '/' + username + '/users';
        fetch(url, requestOptions, [])
            .then(async response => {
                const data = await response.json();

                setIsLoaded(true);
                if (!response.ok) {
                    // get error message from body or default to response status
                    const error = (data && data.message) || response.status;
                    return Promise.reject(error);
                }
                setUser(data);
            })
            .catch(error => {
                setError(error);
                console.error('There was an error!', error);
            });
    },[]);
    return (
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
        >
            <Paper className={classes.paper} elevation={3}>
                <form
                    className={classes.form}
                    noValidate
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
                        value={user.contactPhone}
                        onChange={(event =>{
                            setUser({...user, contactPhone : event.target.value})
                        })}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="geoPosition"
                        label="Адрес"
                        name="geoPosition"
                        value={user.geoPosition}
                        onChange={(event =>{
                            setUser({...user, geoPosition : event.target.value})
                        })}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="Имя"
                        name="name"
                        value={user.name}
                        onChange={(event =>{
                            setUser({...user, name : event.target.value})
                        })}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="Имя пользователя"
                        name="username"
                        value={user.username}
                        onChange={(event =>{
                            setUser({...user, username : event.target.value})
                        })}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Изменить
                    </Button>
                </form>
            </Paper>
        </Grid>
    );
}

export default UpdateUser