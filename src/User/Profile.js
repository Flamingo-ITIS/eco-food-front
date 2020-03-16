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

export const useStyles = makeStyles({
    flex: {
        display: 'flex',
        flexWrap: 'nowrap',
        justifyContent: 'center',
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
            <div className={classes.flex}>
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
            </div>
        </div>
    )
};

export default Profile;