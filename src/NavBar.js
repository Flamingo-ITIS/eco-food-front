import React, {useState} from 'react'
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import LockOpenIcon from '@material-ui/icons/LockOpen';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import TextField from "@material-ui/core/TextField";
import {makeStyles} from "@material-ui/core/styles";
import {IsTokenValid} from "./Session/Login";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCartTwoTone';
import Avatar from "@material-ui/core/Avatar";
import DnsIcon from '@material-ui/icons/DnsTwoTone';
import ContactsOutlinedIcon from '@material-ui/icons/ContactsOutlined';
import AppsIcon from '@material-ui/icons/Apps';

const style = {
    flexGrow: 1
};

const useStyles = makeStyles(theme => ({
    navBar: {
        background: '#e0fcd4'
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
        backgroundColor: "#ed6a5a",
    },
    button: {
        margin: "10px",
        padding: "5px",
        color: "black"
    },
}));

const NavBar = () => {
    const classes = useStyles();
    const [search_input, setSearch_input] = useState("");
    const exit = () => {
        localStorage.clear();
    };

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
                        <Button className={classes.button} href="/cart">
                            <ShoppingCartIcon/>
                            Корзина
                        </Button>
                    </div>
                    {/*<div>*/}
                    {/*    <Button href="/profile">*/}
                    {/*        <AccountBoxIcon/>*/}
                    {/*        Профиль*/}
                    {/*    </Button>*/}
                    {/*    <Button href="/" onClick={exit}>*/}
                    {/*        <ExitToAppIcon/>*/}
                    {/*        Выход*/}
                    {/*    </Button>*/}
                    {/*</div>*/}
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
                </Toolbar>
            </AppBar>
        </div>
    )
};

export default NavBar