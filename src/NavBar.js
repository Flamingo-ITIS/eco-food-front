import React, {useState} from 'react'
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import TextField from "@material-ui/core/TextField";
import {makeStyles} from "@material-ui/core/styles";
import {IsTokenValid} from "./Session/Login";
import {Link} from "react-router-dom";

const style = {
    flexGrow: 1
};

const useStyles = makeStyles(theme => ({
    container: {
        display: 'inline-flex',
        justifyContent: "flex-between",
        flexWrap: 'nowrap',
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
    }
}));

const NavBar = () => {
    const classes = useStyles();
    const [input, setInput] = useState("");
    const exit = () => {
        localStorage.clear();
    };

    return (
        <div>
            <AppBar style={{background: '#2e3b55'}} position="static">
                <Toolbar className={classes.container}>
                    <Typography variant="h6" style={style}>
                        Farmer2U
                    </Typography>
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
                    <Button href="/products" color="inherit">
                        Каталог
                    </Button>
                    <Button href="/main" color="inherit">
                        НА ГЛАВНУЮ
                    </Button>
                    <Button color="inherit">
                        Button
                    </Button>
                    {IsTokenValid() ? (
                        <div>
                            <Button href="/profile" color="inherit">
                                <AccountBoxIcon/>
                                Profile
                            </Button>
                            <Button color='inherit' href="/" onClick={exit}>
                                <ExitToAppIcon/>
                                Exit
                            </Button>
                        </div>
                    ) : (
                        <div>
                            <Button href="/login" color="inherit">
                                <LockOpenIcon/>
                                Вход
                            </Button>

                            <Button href="/user/ordered_products" color="inherit">
                                <LockOpenIcon/>
                                Корзина
                            </Button>
                        </div>

                    )}
                </Toolbar>
            </AppBar>
        </div>
    )
};

export default NavBar