import React, {useState} from "react";
import {useCookies} from "react-cookie";
import {useHistory} from "react-router-dom";
import API_URL from "../API";
import Button from "@material-ui/core/Button";
import ShoppingBasketIcon from "@material-ui/core/SvgIcon/SvgIcon";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop/Backdrop";
import Fade from "@material-ui/core/Fade";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import {makeStyles} from "@material-ui/styles";
import StarRatingComponent from "react-star-rating-component";
import GradeIcon from '@material-ui/icons/Grade';
import {useAlert} from "react-alert";

export const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        width: 500,
    },
    button: {
        margin: "10px",
        padding: "5px",
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.primary.light
    },
    formControl: {
        margin: theme.spacing(1),
    },
}));

const NewRecall = ({productId, success_new_recall}) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [product_rating, setProduct_rating] = useState();
    const alert = useAlert();
    const [cookies] = useCookies();

    function onStarClick(nextValue) {
        setProduct_rating(nextValue);
    }

    async function handleSubmit(event) {
        event.preventDefault();
        const recallData = new FormData(event.target);
        const object = {};
        recallData.forEach((value, key) => {
            object[key] = value
        });

        object["productId"] = parseInt(productId);
        const json = JSON.stringify(object);
        console.log(json);


        const url = API_URL + "/recalls";

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Authorization': 'Bearer ' + cookies.auth_token
            },
            body: json
        };
        fetch(url, requestOptions, [])
            .then(async response => {
                const data = await response;
                if (response.ok) {
                    alert.success("Ваш отзыв успешно опубликован");
                    success_new_recall(true);
                    setOpen(false);
                } else {
                    alert.error("Что-то пошло не так...");
                    const error = (data && data.message) || response.status;
                    return Promise.reject(error);
                }
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div>
            <Button
                variant="outlined"
                color="primary"
                onClick={handleOpen}
            >
                Оставить отзыв
            </Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Paper className={classes.paper}>
                        <Typography variant="h5" gutterBottom id="transition-modal-title">
                            Новый отзыв
                        </Typography>
                        <form
                            onSubmit={handleSubmit}
                            id="transition-modal-description"
                        >
                            <Grid
                                container
                                direction="row"
                                justify="center"
                                alignItems="center"
                            >
                                <div>
                                    <StarRatingComponent
                                        required
                                        renderStarIcon={() => <GradeIcon fontSize="large"/>}
                                        emptyStarColor="#cfcfcf"
                                        name="value"
                                        starCount={5}
                                        value={product_rating}
                                        onStarClick={onStarClick.bind(this)}
                                    />
                                </div>
                                <TextField
                                    id="message"
                                    name="message"
                                    label="Отзыв"
                                    multiline
                                    rows={8}
                                    fullWidth
                                    variant="outlined"
                                    className={classes.formControl}
                                />
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                >
                                    Готово
                                </Button>
                            </Grid>
                        </form>
                    </Paper>
                </Fade>
            </Modal>
        </div>
    )
}

export default NewRecall;