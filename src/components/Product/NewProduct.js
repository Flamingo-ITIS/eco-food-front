import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/core/SvgIcon/SvgIcon";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {Link, Redirect, useHistory} from "react-router-dom";
import React, {useState} from "react";
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
import API_URL from "../API";

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
    formControl: {
        margin: theme.spacing(1),
        minWidth: 300,
    },
}));




const NewProduct = () => {
    const classes = useStyles();
    const history = useHistory();

    async function handleSubmit(event) {
        event.preventDefault();
        // const {history} = this.props;
        const productData = new FormData(event.target);
        const object = {};
        productData.forEach((value, key) => {
            object[key] = value
        });

        object["count"] = parseInt(object["count"]);
        const json = JSON.stringify(object);
        console.log(json);


        const url = API_URL + "/products";

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem("token")
            },
            body: json
        };
        fetch(url, requestOptions, [])
            .then(async response => {
                const data = await response.json();

                // check for error response
                if (!response.ok) {
                    // get error message from body or default to response status
                    const error = (data && data.message) || response.status;
                    return Promise.reject(error);
                }

                history.push('/product/'+ data.id.toString())
            })
            .catch(error => {
                // setState({ errorMessage: error });
                console.error('There was an error!', error);
            });
            // .then(response => response.json())
            // .then(data => setProduct_id({data.id}));

        // console.log(product_id);

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
                                className={classes.formControl}
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                type="number"
                                id="count"
                                label="Количество"
                                name="count"
                                className={classes.formControl}
                            />
                            {/*<h3>*/}
                            {/*    ₽*/}
                            {/*</h3>*/}
                            <FormControl variant="outlined" required className={classes.formControl}>
                                <InputLabel id="typeLabel">Тип</InputLabel>
                                <Select
                                    labelId="typeLabel"
                                    id="countType"
                                    name="countType"
                                    label="Тип"
                                >
                                    <MenuItem value="KILOGRAM">Килограмм</MenuItem>
                                    <MenuItem value="ITEM">Шт.</MenuItem>
                                </Select>
                            </FormControl>

                            <FormControl variant="outlined" required className={classes.formControl}>
                                <InputLabel id="categoryLabel">Категория</InputLabel>
                                <Select
                                    labelId="categoryLabel"
                                    id="category"
                                    name="category"
                                    label="Категория"
                                >
                                    <MenuItem value="FRUIT">Фрукты</MenuItem>
                                    <MenuItem value="VEGETABLES">Овощи</MenuItem>
                                    <MenuItem value="NUTS">Орехи</MenuItem>
                                </Select>
                            </FormControl>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                type="number"
                                id="cost"
                                label="Цена"
                                name="cost"
                                className={classes.formControl}
                            />
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

                            <textarea placeholder="Описание"
                                      id="description"
                                      name="description"
                                      required
                            />
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
                                    <AddPhotoAlternateIcon/>
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