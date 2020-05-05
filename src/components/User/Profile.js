import React, {useEffect, useState} from 'react'
import {Link, Redirect, useHistory} from "react-router-dom";
import '../../App.css';
import {makeStyles} from "@material-ui/styles";
import {Paper} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import ListAltIcon from '@material-ui/icons/ListAlt';
import Grid from "@material-ui/core/Grid";
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import API_URL from "../API";
import Loader from "react-loader-spinner";
import UploadUserPhoto from "./UploadUserPhoto";
import Chip from "@material-ui/core/Chip";
import {Image} from "@material-ui/icons";

export const useStyles = makeStyles(theme => ({
    info: {
        padding: 10,
        margin: 10,
        // width: 400,
        height: 250,
    },
    button: {
        margin: "10px",
        padding: "5px",
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.primary.light
    },
}));


const Profile = () => {
        const classes = useStyles();
        console.log(localStorage.getItem("username"));
        const history = useHistory();

        const [user, setUser] = useState({});
        const [isLoaded, setIsLoaded] = useState(false);
        const [error, setError] = useState(null);
        const [binaryData, setBinaryData] = useState();

        useEffect(() => {
            const requestOptions = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Authorization': 'Bearer ' + localStorage.getItem("token")
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
                    // history.push('/profile');
                })
                .catch(error => {
                    setError(error);
                    console.error('There was an error!', error);
                });
            const photoURL = API_URL + '/profile-photo';
            fetch(photoURL, requestOptions, [])
                .then(async response => {
                    response.blob().then(blob => {
                        const fileReaderInstance = new FileReader();
                        fileReaderInstance.readAsDataURL(blob);
                        fileReaderInstance.onload = () => {
                            setBinaryData(fileReaderInstance.result);
                            console.log(binaryData);
                        }
                    })
                });
        }, []);

        console.log(user);
        if (error) {
            return <div>Ошибка: {error.message}</div>;
        } else if (!isLoaded) {
            return <div style={{position: 'fixed', top: '50%', left: '50%'}}>
                <Loader
                    type="ThreeDots"
                    color="primary"
                    height={100}
                    width={100}
                    timeout={3000} //3 secs
                />
            </div>
        } else {
            return (
                <div>
                    <Typography variant="h3" gutterBottom>
                        Мой профиль
                    </Typography>
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="flex-start"
                    >
                        <Paper className={classes.image}>
                            <div>
                                <Avatar variant="square"
                                        style={{width: '250px', height: '250px'}}
                                        src={binaryData}
                                />
                            </div>
                            <UploadUserPhoto/>
                        </Paper>
                        <Paper>
                            <Grid
                                container
                                direction="column"
                                justify="space-between"
                                alignItems="flex-start"
                                className={classes.info}
                            >
                                <Chip
                                    label={user.role === "PARTNER" ? ("Продавец") : ("Покупатель")}
                                    color="secondary"
                                />
                                <h3>Имя пользователя: {user.username}</h3>
                                <h3>Имя: {user.name}</h3>
                                <h3>Номер телефона: {user.contactPhone}</h3>
                                <h3>Адрес: {user.geoPosition}</h3>
                                <h3>email: {user.email}</h3>
                                <Button
                                    variant="outlined"
                                    color="secondary"
                                    href="/user/update"
                                >
                                    Изменить профиль
                                </Button>
                            </Grid>
                        </Paper>
                        <Paper>
                            <Grid
                                container
                                direction="column"
                                justify="center"
                                alignItems="flex-start"
                            >
                                <div>
                                    <Button href="/user/published_products">
                                        <ListAltIcon fontSize="large" style={{width: "100px", height: "100px"}}/>
                                        <h3>
                                            Опубликованные товары
                                        </h3>
                                    </Button>
                                </div>
                                <div>
                                    <Button href="/user/orders">
                                        <ListAltIcon fontSize="large" style={{width: "100px", height: "100px"}}/>
                                        <h3>
                                            Мои покупки
                                        </h3>
                                    </Button>
                                </div>
                                <div>
                                    <Button href="/user/favourite_products">
                                        <LoyaltyIcon fontSize="large" style={{width: "100px", height: "100px"}}/>
                                        <h3>
                                            Избранное
                                        </h3>
                                    </Button>
                                </div>
                                <div>
                                    <Button href="/seller/chat">
                                        <ListAltIcon fontSize="large" style={{width: "100px", height: "100px"}}/>
                                        <h3>
                                            Диалог с продавцом
                                        </h3>
                                    </Button>
                                </div>
                            </Grid>
                        </Paper>
                    </Grid>
                </div>
            )
        }
    }
;

export default Profile;