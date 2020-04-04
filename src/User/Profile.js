import React from 'react'
import '../App.css';
import {makeStyles} from "@material-ui/styles";
import {Paper} from "@material-ui/core";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import {Link} from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import ListAltIcon from '@material-ui/icons/ListAlt';

export const useStyles = makeStyles({
    noWrapContainer: {
        display: 'flex',
        flexWrap: 'nowrap',
        justifyContent: 'center',
    },
    wrapContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: "center",
    },
    info: {
        padding: 10,
        margin: 10,
        width: 800,
        height: 300,
        textAlign: 'left',
    },
});


const Profile = () => {
    const classes = useStyles();
    return (
        <div>
            <h1>Мой профиль</h1>
            <div className={classes.noWrapContainer}>
                <Paper className={classes.image}>
                    <div>
                        <Avatar variant="square"
                                style={{width: '300px', height: '300px'}}
                        />
                    </div>
                    <Button>
                        Изменить профиль
                    </Button>
                </Paper>
                <Paper className={classes.info}>
                    <h3>Имя: Ринат</h3>
                    <h3>Фамилия: Ринатосов</h3>
                    <h3>ДР: 01.01.01</h3>
                    <h3>Пол: мужской</h3>
                    <h3>Статус: продавец</h3>
                </Paper>
                <div className={classes.wrapContainer} style={{justifyContent: "left"}}>
                    <Button href="/seller/published_products">
                        <ListAltIcon fontSize="large" style={{width: "100px", height: "100px"}}/>
                        <h3>
                            Опубликованные товары
                        </h3>
                    </Button>
                    <Button href="/user/orders">
                        <ListAltIcon fontSize="large" style={{width: "100px", height: "100px"}}/>
                        <h3>
                            Мои заказы
                        </h3>
                    </Button>
                    <Button href="/user/favourite_products">
                        <ListAltIcon fontSize="large" style={{width: "100px", height: "100px"}}/>
                        <h3>
                            Избранное
                        </h3>
                    </Button>
                    <Button href="/seller/chat">
                        <ListAltIcon fontSize="large" style={{width: "100px", height: "100px"}}/>
                        <h3>
                            Диалог с продавцом
                        </h3>
                    </Button>
                </div>
            </div>
        </div>
    )
};

export default Profile;