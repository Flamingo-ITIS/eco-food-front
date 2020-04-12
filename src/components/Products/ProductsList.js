import React, {useEffect, useState} from "react";
import Card from "@material-ui/core/Card";
import {Link} from "react-router-dom";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import {makeStyles} from "@material-ui/styles";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import AddShoppingCartOutlinedIcon from '@material-ui/icons/AddShoppingCartOutlined';
import IconButton from "@material-ui/core/IconButton";
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import InfoIcon from '@material-ui/icons/InfoOutlined';
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

export const useStyles = makeStyles(theme => ({
    card: {
        width: 250,
        height: 400,
        // background: "linear-gradient(rgba(200,240,130,0.5),transparent)",
        // backgroundColor: "#fdfdc8",
        margin: "20px",
        padding: "5px",
        paddingBottom: "15px",
        transition: "0.3s",
        boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
        "&:hover": {
            boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
        },
    },
    media: {
        height: 150,
        width: 250,
        margin: "0 auto"
    },
    heading: {
        fontWeight: "bold"
    },
    subheading: {
        lineHeight: 1.8
    },
    iconButton: {
        backgroundColor: theme.palette.primary.light,
        "&:hover": {
            backgroundColor: theme.palette.primary.main,
        },
        color: "black",
        // border: "1px solid black",
        margin: "10px",
        padding: "10px"
    },
    description: {
        margin: "5px"
    },
    filter: {
        padding: '30px',
        margin: '20px',
        backgroundColor: theme.palette.primary.light
    }
}));

function valuetext(value) {
    return `${value}°C`;
}

const ProductsList = ({products}) => {
    const classes = useStyles();
    // const [products, setProducts] = useState([]);
    // console.log(localStorage.getItem("token"));
    // useEffect(() => {
    //     const requestOptions = {
    //         method: 'GET',
    //         headers: { 'Content-Type': 'application/json',
    //             'Access-Control-Allow-Origin': '*',
    //             'Authorization': 'Bearer ' + "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJSaW5hdCIsImF1dGgiOlsiUEFSVE5FUiJdLCJpYXQiOjE1ODYxMTg0MTcsImV4cCI6MTU4NjcyMzIxN30.RZO9SzLAIzw9sN7DAUMAMWKcM0qL-8aRsUc4ZWJU1ao"
    //         },
    //     };
    //     fetch('http://localhost:9000/product', requestOptions)
    //         .then(response => response.json())
    //         .then(data => setProducts(data));
    // }, []);
    console.log(products);

    const [age, setAge] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const [price, setPrice] = React.useState([0, 10000]);

    // const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    //     setAge(event.target.value as number);
    // };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleChangePrice = (event, newValue) => {
        setPrice(newValue);
    }

    return (
        <div>
            <h1>Каталог</h1>
            <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
            >
                <Card className={classes.filter}>
                    <h3>Фильтры</h3>
                    <FormGroup>
                        <Typography id="range-slider" gutterBottom>
                            Цена
                        </Typography>
                        <Slider
                            value={price}
                            onChange={handleChangePrice}
                            valueLabelDisplay="auto"
                            aria-labelledby="range-slider"
                            getAriaValueText={valuetext}
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    value="checkedB"
                                    color="primary"
                                />
                            }
                            label="Дата"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    value="checkedB"
                                    color="primary"
                                />
                            }
                            label="Оценка"
                        />
                        <br/>
                        <InputLabel>Категория</InputLabel>
                        <Select
                            style={{width: 150}}
                            open={open}
                            onClose={handleClose}
                            onOpen={handleOpen}
                            value={age}
                            onChange={event => {
                                setAge(event.target.value);
                            }}
                        >
                            <MenuItem value="">
                                <em>Нет</em>
                            </MenuItem>
                            <MenuItem value={10}>Фрукты</MenuItem>
                            <MenuItem value={20}>Овощи</MenuItem>
                            <MenuItem value={30}>Орехи</MenuItem>
                        </Select>
                    </FormGroup>
                </Card>

                <ul style={{width: "900px"}}>
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                    >
                        {products.map(product =>
                            <li key={product.id}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.media}
                                        image={product.pictureUrl}
                                        title="product"
                                    />
                                    <div>
                                        <IconButton className={classes.iconButton}>
                                            <InfoIcon fontSize="large"/>
                                        </IconButton>
                                        <IconButton className={classes.iconButton}>
                                            <LoyaltyIcon fontSize="large"/>
                                        </IconButton>
                                        <IconButton className={classes.iconButton}>
                                            <AddShoppingCartOutlinedIcon fontSize="large"/>
                                        </IconButton>
                                    </div>
                                    <CardContent>
                                        <h2 style={{margin: "0"}}>
                                            <Link to={`/product/${product.id}`}
                                                  style={{textDecoration: 'none'}}>
                                                {product.title}
                                            </Link>
                                        </h2>
                                        <div className={classes.description}>
                                            {product.description}
                                        </div>
                                    </CardContent>
                                </Card>
                            </li>
                        )}
                    </Grid>
                </ul>
            </Grid>
        </div>
    );
}
export default ProductsList