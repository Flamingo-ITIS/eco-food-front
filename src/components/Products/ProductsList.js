import React, {useEffect, useState} from "react";
import Card from "@material-ui/core/Card";
import {Link} from "react-router-dom";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import {makeStyles} from "@material-ui/styles";
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
import Chip from "@material-ui/core/Chip";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import TextTruncate from 'react-text-truncate';


export const useStyles = makeStyles(theme => ({
    card: {
        width: 250,
        // height: 400,
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
    buyButton: {
        // margin: theme.spacing(1,1,1),
        color: "white",
    }
}));
const ProductsList = ({products, productsList}) => {
    const classes = useStyles();
    const TextTruncate = require('react-text-truncate');
    return (
        <ul style={{width: "900px"}}>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                {products?.map(product =>
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
                                <Grid
                                    container
                                    direction="column"
                                    alignItems="center"
                                    justify="space-between"
                                    style={{height: 100}}
                                >
                                    <Typography variant="h5" gutterBottom style={{width: 220}}>
                                        <Link to={`/product/${product.id}`}
                                              style={{textDecoration: 'none'}}>
                                            <TextTruncate
                                                line={1}
                                                truncateText="…"
                                                text={product.title}
                                            />
                                        </Link>
                                    </Typography>
                                    {/*<div className={classes.description}>*/}
                                    {/*    {product.description}*/}
                                    {/*</div>*/}
                                    <Grid
                                        container
                                        direction="row"
                                        alignItems="flex-end"
                                        justify="space-between"
                                    >
                                        <Chip
                                            variant="outlined"
                                            color="secondary"
                                            label={product.price + ' РУБ.'}
                                        />
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            className={classes.buyButton}
                                        >
                                            <ShoppingBasketIcon/>
                                            Купить
                                        </Button>
                                    </Grid>
                                </Grid>
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
                                <Grid
                                    container
                                    direction="column"
                                    alignItems="center"
                                    justify="space-between"
                                    style={{height: 100}}
                                >
                                    <Typography variant="h5" gutterBottom style={{width: 220}}>
                                        <Link to={`/product/${product.id}`}
                                              style={{textDecoration: 'none'}}>
                                            <TextTruncate
                                                line={1}
                                                truncateText="…"
                                                text={product.title}
                                            />
                                        </Link>
                                    </Typography>
                                    {/*<div className={classes.description}>*/}
                                    {/*    {product.description}*/}
                                    {/*</div>*/}
                                    <Grid
                                        container
                                        direction="row"
                                        alignItems="flex-end"
                                        justify="space-between"
                                    >
                                        <Chip
                                            variant="outlined"
                                            color="secondary"
                                            label={product.cost + ' РУБ.'}
                                        />
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            className={classes.buyButton}
                                        >
                                            <ShoppingBasketIcon/>
                                            Купить
                                        </Button>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </li>
                )}
            </Grid>
        </ul>
    )
};

export default ProductsList;