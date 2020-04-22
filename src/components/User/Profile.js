import React from 'react'
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
import AddIcon from '@material-ui/icons/Add';

export const useStyles = makeStyles(theme => ({
    info: {
        padding: 10,
        margin: 10,
        width: 400,
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


const Profile = () => {
    const classes = useStyles();
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
                    <h3>Имя: Ринат</h3>
                    <h3>Фамилия: Ринатосов</h3>
                    <h3>ДР: 01.01.01</h3>
                    <h3>Пол: мужской</h3>
                    <h3>Статус: продавец</h3>
                </Paper>
                <Paper>
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="flex-start"
                    >
                        <Button href="/product/new" variant="contained" color="primary" className={classes.button}>
                            <AddIcon fontSize="large"/>
                            <Typography variant="h4">
                                Новый товар
                            </Typography>
                        </Button>
                        <div>
                            <Button href="/seller/published_products">
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
};

export default Profile;