import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/core/SvgIcon/SvgIcon";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {Link, Redirect} from "react-router-dom";
import React from "react";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import makeStyles from "@material-ui/core/styles/makeStyles";
import CameraEnhanceIcon from '@material-ui/icons/CameraEnhance';
import IconButton from "@material-ui/core/IconButton";
import Fab from "@material-ui/core/Fab";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";

export const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(8),
        borderRadius: "5px",
        padding: "30px",
    },
    description: {
        width: 600,
        margin: "15px",
    },
    main: {
        width: 300
    },
    button: {
        margin: "10px",
        padding: "5px",
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.primary.light
    },
}));

async function handleSubmit(event) {
    event.preventDefault();
    const productData = new FormData(event.target);

    const url = "http://localhost:9000/login";

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Access-Control-Allow-Origin': '*',
            'Accept': 'application/json'
        },

    };
    await fetch(url, requestOptions)
    // .then(response => response.json())
    // .then(data => localStorage.setItem("token", data.token));

    return (
        <Redirect
            to={{
                pathname: "/profile"
            }}
        />
    )
    // axios.post(url, data, requestOptions)
    //     .then((res) => {
    //         console.log("RESPONSE RECEIVED: ", res);
    //     })

    // if (response.body != null) {
    //     localStorage.setItem("token", response.body);
    //     return <Switch to="/profile"/>
    // } else {
    //     return <Switch to="/login"/>
    // }
    // return await response.json(); // parses JSON response into native JavaScript objects
}


const NewProduct = () => {
    const classes = useStyles();

    return (
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
        >
            <Paper className={classes.paper} elevation={3}>
                {/*<Avatar className={classes.avatar}>*/}
                {/*    <LockOutlinedIcon/>*/}
                {/*</Avatar>*/}
                <h1>
                    Новый товар
                </h1>
                <form className={classes.form}
                      noValidate
                      onSubmit={handleSubmit}>
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="flex-start"
                    >
                        <Grid
                            container
                            direction="column"
                            justify="center"
                            alignItems="center"
                            className={classes.main}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="title"
                                label="Название"
                                name="title"
                                autoFocus
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                type="number"
                                id="description"
                                label="Цена"
                                name="description"
                            />
                            {/*<h3>*/}
                            {/*    ₽*/}
                            {/*</h3>*/}

                            <FormControl
                                fullWidth
                                variant="outlined"
                                margin="normal"
                                required
                            >
                                <InputLabel>Категория</InputLabel>
                                <Select>
                                    <MenuItem value={10}>Фрукты</MenuItem>
                                    <MenuItem value={20}>Овощи</MenuItem>
                                    <MenuItem value={30}>Орехи</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid
                            container
                            direction="column"
                            justify="center"
                            alignItems="center"
                            className={classes.description}
                        >
                            {/*<TextField*/}
                            {/*    variant="outlined"*/}
                            {/*    margin="normal"*/}
                            {/*    required*/}
                            {/*    fullWidth*/}
                            {/*    type="textarea"*/}
                            {/*    id="description"*/}
                            {/*    label="Описание"*/}
                            {/*    name="description"*/}
                            {/*    className={classes.description}*/}
                            {/*/>*/}

                            <textarea placeholder="Описание" required/>
                            <input
                                accept="image/*"
                                className={classes.input}
                                style={{display: 'none'}}
                                id="raised-button-file"
                                multiple
                                type="file"
                            />
                            <label htmlFor="raised-button-file">
                                <Fab component="span" className={classes.button}>
                                    <AddPhotoAlternateIcon />
                                </Fab>
                                Загрузить фото
                            </label>

                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Готово
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Grid>
    )
};
export default NewProduct