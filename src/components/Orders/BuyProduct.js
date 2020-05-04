import React, {useState} from "react";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/styles";
import Modal from "@material-ui/core/Modal";
import Fade from "@material-ui/core/Fade";
import Backdrop from "@material-ui/core/Backdrop";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Fab from "@material-ui/core/Fab";
import AddPhotoAlternateIcon from "@material-ui/core/SvgIcon/SvgIcon";
import Paper from "@material-ui/core/Paper";
import API_URL from "../API";
import {useHistory} from "react-router-dom";
import Typography from "@material-ui/core/Typography";


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
    buyButton: {
        // margin: theme.spacing(1,1,1),
        color: "white",
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

const BuyProduct = ({product}) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [boughtProduct, setBoughtProduct] = useState({});
    const history = useHistory();

    async function handleSubmit(event) {
        event.preventDefault();
        const buyProductData = new FormData(event.target);
        const object = {};
        buyProductData.forEach((value, key) => {
            object[key] = value
        });

        object["count"] = parseInt(object["count"]);
        object["cost"] = product.cost;
        object["productId"] = product.id;
        const json = JSON.stringify(object);
        console.log(json);


        const url = API_URL + "/buys";

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Authorization': 'Bearer ' + localStorage.getItem("token")
            },
            body: json
        };
        fetch(url, requestOptions, [])
            .then(async response => {
                const data = await response.json();
                if (!response.ok) {
                    const error = (data && data.message) || response.status;
                    return Promise.reject(error);
                }
                setBoughtProduct(data);
                history.push('/buy/confirmation/' + data.id.toString())
            })
            .catch(error => {
                // setState({ errorMessage: error });
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
                variant="contained"
                color="primary"
                className={classes.buyButton}
                onClick={handleOpen}
            >
                <ShoppingBasketIcon/>
                Купить
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
                            Пожалуйста уточните
                        </Typography>
                        <form noValidate
                              onSubmit={handleSubmit}
                              id="transition-modal-description"
                        >
                            <Grid
                                container
                                direction="row"
                                justify="center"
                                alignItems="center"
                            >
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
                                <FormControl
                                    fullWidth
                                    variant="outlined"
                                    required
                                    className={classes.formControl}
                                >
                                    <InputLabel id="typeLabel">Получение товара</InputLabel>
                                    <Select
                                        labelId="typeLabel"
                                        id="deliveryType"
                                        name="deliveryType"
                                        label="Получение товара"
                                    >
                                        <MenuItem value="COURIER">Доставка</MenuItem>
                                        <MenuItem value="PICKUP">Самовывоз</MenuItem>
                                    </Select>
                                </FormControl>

                                <FormControl
                                    fullWidth
                                    variant="outlined"
                                    required
                                    className={classes.formControl}
                                >
                                    <InputLabel id="paymentTypeLabel">Оплата</InputLabel>
                                    <Select
                                        labelId="paymentTypeLabel"
                                        id="paymentType"
                                        name="paymentType"
                                        label="Оплата"
                                    >
                                        <MenuItem value="CARD">Банковская карта</MenuItem>
                                        <MenuItem value="CASH">Наличные</MenuItem>
                                    </Select>
                                </FormControl>
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
};

export default BuyProduct;
