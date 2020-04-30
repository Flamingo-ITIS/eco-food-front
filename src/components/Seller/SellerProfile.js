import React, {useEffect, useState,} from 'react'
import {
    Link,
    useParams,
} from "react-router-dom";
import {makeStyles} from "@material-ui/styles";
import {Paper} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import ListAltIcon from '@material-ui/icons/ListAlt';
import Grid from "@material-ui/core/Grid";
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import AddIcon from '@material-ui/icons/Add';

export const useStyles = makeStyles(theme => ({
    info: {
        padding: 10,
        margin: 10,
        // width: 400,
        height: 200,
        textAlign: 'left',
    },
    button: {
        margin: "10px",
        padding: "5px",
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.primary.light
    },
}));


const SellerProfile = () => {
    let {username} = useParams();
    const classes = useStyles();

    const [user, setUser] = useState({});

    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
        };
        const url = 'http://localhost:9000/products/' + username + '/users';
        fetch(url, requestOptions)
            .then(response => response.json())
            .then(data => setUser(data[0].user));
    }, []);

    console.log(user);
    return (
        <div>
            <h1>Мой профиль</h1>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="flex-start"
            >
                <Paper className={classes.image}>
                    <div>
                        <Avatar variant="square"
                                style={{width: '200px', height: '200px'}}
                        />
                    </div>
                    <Button>
                        Изменить профиль
                    </Button>
                </Paper>
                <Paper className={classes.info}>
                    <h2 style={{textAlign: 'right'}}>{user.role}</h2>
                    <h3>Имя пользователя: {user.username}</h3>
                    <h3>Имя: {user.name}</h3>
                    <h3>Номер телефона: {user.contactPhone}</h3>
                    <h3>Адрес: {user.geoPosition}</h3>
                    <h3>email: {user.email}</h3>
                </Paper>
                <Paper>
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="flex-start"
                    >
                        {/*<div>*/}
                        {/*    <Button href="/seller/published_products">*/}
                        {/*        <ListAltIcon fontSize="large" style={{width: "100px", height: "100px"}}/>*/}
                        {/*        <h3>*/}
                        {/*            Опубликованные товары*/}
                        {/*        </h3>*/}
                        {/*    </Button>*/}
                        {/*</div>*/}
                    </Grid>
                </Paper>
            </Grid>
        </div>
    )
};

export default SellerProfile;