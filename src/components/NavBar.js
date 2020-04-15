import React, {useState} from 'react'
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import LockOpenIcon from '@material-ui/icons/LockOpen';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import TextField from "@material-ui/core/TextField";
import {makeStyles} from "@material-ui/core/styles";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCartTwoTone';
import Avatar from "@material-ui/core/Avatar";
import DnsIcon from '@material-ui/icons/DnsTwoTone';
import ContactsOutlinedIcon from '@material-ui/icons/ContactsOutlined';
import AppsIcon from '@material-ui/icons/Apps';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';

const style = {
    flexGrow: 1
};

const useStyles = makeStyles(theme => ({
    navBar: {
        background: theme.palette.primary.light
    },
    container: {
        display: 'flex',
        justifyContent: "space-around",
        flexWrap: 'nowrap',
        height: '100px',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 400,
    },
    centerRow: {
        padding: theme.spacing(3, 2),
        textAlign: "center",
        margin: "10px",
    },
    logo: {
        height: '100px',
        filter: 'invert(100%)',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.primary.main,
    },
    button: {
        margin: "10px",
        padding: "5px",
        color: "black"
    },
}));

export const isTokenValid = () => localStorage.getItem("token");

async function handleExit() {
    const url = "http://localhost:9000/logout";

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Authorization': 'Bearer ' + localStorage.getItem("token")
        }
    };
    await fetch(url, requestOptions)
    localStorage.clear();
}


const NavBar = () => {
    const classes = useStyles();
    const [search_input, setSearch_input] = useState("");

    return (
        <div>
            <AppBar className={classes.navBar} position="static">
                <Toolbar className={classes.container}>
                    <img className={classes.logo} src="/static/logo.png"/>
                    <TextField
                        id="outlined-search"
                        name="name"
                        label="Поиск товара"
                        type="search"
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                        value={search_input}
                        onChange={event => {
                            setSearch_input(event.target.value);
                        }}
                    />
                    <div>
                        <Button className={classes.button} href="/products">
                            <DnsIcon/>
                            Каталог
                        </Button>
                        <Button className={classes.button} href="/main">
                            <AppsIcon/>
                            Главная
                        </Button>
                        <Button className={classes.button} href="/payment_info">
                            <LocalShippingIcon/>
                            Доставка и оплата
                        </Button>
                        {/*<Button className={classes.button} href="/cart">*/}
                        {/*    <ShoppingCartIcon/>*/}
                        {/*    Корзина*/}
                        {/*</Button>*/}
                    </div>
                    {isTokenValid() ? (
                        <div>
                            <Button href="/profile">
                                <AccountBoxIcon/>
                                Профиль
                            </Button>
                            <Button onClick={handleExit}>
                                <ExitToAppIcon/>
                                Выход
                            </Button>
                        </div>
                    ) : (
                        <div>
                            <Button href="/login">
                                <Avatar className={classes.avatar}>
                                    <LockOpenIcon/>
                                </Avatar>
                                Вход
                            </Button>

                            <Button href="/sign_up">
                                <Avatar className={classes.avatar}>
                                    <ContactsOutlinedIcon/>
                                </Avatar>
                                Регистрация
                            </Button>
                        </div>
                    )}
                    </Toolbar>
            </AppBar>
        </div>
)
};

export default NavBar