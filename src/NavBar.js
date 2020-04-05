import React, {useState} from 'react'
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import TextField from "@material-ui/core/TextField";
import {makeStyles} from "@material-ui/core/styles";
import {IsTokenValid} from "./Session/Login";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const style = {
    flexGrow: 1
};

const useStyles = makeStyles(theme => ({
    navBar: {
        background: '#ffede1'
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
        width: 200,
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
}));

const NavBar = () => {
    const classes = useStyles();
    const [input, setInput] = useState("");
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
                        label="Search products"
                        type="search"
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                        value={input}
                        onChange={event => {
                            setInput(event.target.value);
                        }}
                    />
                    <div>
                        <Button href="/products">
                            Каталог
                        </Button>
                        <Button href="/main">
                            НА ГЛАВНУЮ
                        </Button>
                        <Button>
                            Просто кнопка
                        </Button>
                    </div>
                    <div>
                        <Button href="/profile">
                            <AccountBoxIcon/>
                            Профиль
                        </Button>
                        <Button href="/cart">
                            <ShoppingCartIcon/>
                            Корзина
                        </Button>
                        <Button href="/" onClick={exit}>
                            <ExitToAppIcon/>
                            Выход
                        </Button>
                    </div>
                    <div>
                        <Button href="/login">
                            <LockOpenIcon/>
                            Вход
                        </Button>

                        <Button href="/sign_up">
                            <LockOpenIcon/>
                            Регистрация
                        </Button>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
};

export default NavBar