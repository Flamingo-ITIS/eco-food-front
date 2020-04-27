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
import SortIcon from '@material-ui/icons/Sort';
import ProductsFilter from "./ProductsFilter";

export const useStyles = makeStyles(theme => ({
    card: {
        width: 250,
        height: 400,
        // background: "linear-gradient(rgba(200,240,130,0.5),transparent)",
        // backgroundColor: "#fdfdc8",
        margin: "20px",
        padding: "5px",
        borderRadius: "12px",
        transition: "0.5s",
        // boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
        "&:hover": {
            boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
        },
    },
    titleBar: {
        borderRadius: "12px 12px 0 0"
    },
    media: {
        height: 150,
        width: 250,
        borderRadius: "12px",
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
    },
    submit: {
        margin: theme.spacing(3, 0, 0),
        backgroundColor: theme.palette.primary.main,
        padding: "5px",
        color: "white"
    },
}));

const ProductsList = ({products}) => {
    const classes = useStyles();
    const [productsList, setProductsList] = useState([]);

    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
        };
        const url = 'http://localhost:9000/products';
        fetch(url, requestOptions)
            .then(response => response.json())
            .then(data => setProductsList(data));
    }, []);
    console.log(productsList);

    return (
        <div>
            <h1>Каталог</h1>
            <Grid
                container
                direction="row"
                justify="flex-end"
                alignItems="center"
            >
                <Button>
                    <SortIcon/>
                    По цене
                </Button>
                <Button>
                    <SortIcon/>
                    По рейтингу
                </Button>
            </Grid>
            <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
            >
                <ProductsFilter/>

                <ul style={{width: "900px"}}>
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                    >
                        {products.map(product =>
                            <li key={product.id}>
                                <Card className={classes.card} elevation={5}>
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
                        {productsList.map(product =>
                            <li key={product.id}>
                                <Card className={classes.card} elevation={5}>
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