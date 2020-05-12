import React, {useEffect, useState} from "react";
import Card from "@material-ui/core/Card";
import {Link} from "react-router-dom";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import {makeStyles} from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import AddShoppingCartOutlinedIcon from '@material-ui/icons/AddShoppingCartOutlined';
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from '@material-ui/icons/InfoOutlined';
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import TextTruncate from 'react-text-truncate';
import LikeProduct from "../FavoriteProducts/LikeProduct";
import BuyProduct from "../Orders/BuyProduct";
import API_URL from "../API";
import {useCookies} from "react-cookie";
import UnLikeProduct from "../FavoriteProducts/UnLikeProduct";


export const useStyles = makeStyles(theme => ({
    card: {
        width: 250,
        // height: 400,
        // background: "linear-gradient(rgba(200,240,130,0.5),transparent)",
        // backgroundColor: "#fdfdc8",
        margin: "20px",
        padding: "5px",
        borderRadius: "12px",
        transition: "0.3s",
        // boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
        "&:hover": {
            transform: 'scale(1.05)',
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


    function handleCheckFavorites(id) {
        console.log(favoriteProducts);
        return favoriteProducts.includes(id);
    }

    const [cookies] = useCookies();
    const [favoriteProducts, setFavoriteProducts] = useState([]);

    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Authorization': 'Bearer ' + cookies.auth_token
            },
        };
        const url = API_URL + '/favorites';
        fetch(url, requestOptions, [])
            .then(async response => {
                const data = await response.json();
                if (!response.ok) {
                    // get error message from body or default to response status
                    const error = (data && data.message) || response.status;
                    return Promise.reject(error);
                }
                setFavoriteProducts(data.map(item => item.id));
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, []);

    return (
        <ul
            style={{padding: 0}}
        >
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                {/*{products?.map(product =>*/}
                {/*    <li key={product.id}>*/}
                {/*        <Card className={classes.card} elevation={5}>*/}
                {/*            <CardMedia*/}
                {/*                className={classes.media}*/}
                {/*                image={product.pictureUrl}*/}
                {/*                title="product"*/}
                {/*            />*/}
                {/*            <div>*/}
                {/*                <IconButton className={classes.iconButton}>*/}
                {/*                    <InfoIcon fontSize="large"/>*/}
                {/*                </IconButton>*/}
                {/*                <LikeProduct product_id={product.id}/>*/}
                {/*                <IconButton className={classes.iconButton}>*/}
                {/*                    <AddShoppingCartOutlinedIcon fontSize="large"/>*/}
                {/*                </IconButton>*/}
                {/*            </div>*/}
                {/*            <CardContent>*/}
                {/*                <Grid*/}
                {/*                    container*/}
                {/*                    direction="column"*/}
                {/*                    alignItems="center"*/}
                {/*                    justify="space-between"*/}
                {/*                    style={{height: 100}}*/}
                {/*                >*/}
                {/*                    <Typography variant="h5" gutterBottom style={{width: 220}}>*/}
                {/*                        <Link to={`/product/${product.id}`}*/}
                {/*                              style={{textDecoration: 'none'}}>*/}
                {/*                            <TextTruncate*/}
                {/*                                line={1}*/}
                {/*                                truncateText="…"*/}
                {/*                                text={product.title}*/}
                {/*                            />*/}
                {/*                        </Link>*/}
                {/*                    </Typography>*/}
                {/*                    /!*<div className={classes.description}>*!/*/}
                {/*                    /!*    {product.description}*!/*/}
                {/*                    /!*</div>*!/*/}
                {/*                    <Grid*/}
                {/*                        container*/}
                {/*                        direction="row"*/}
                {/*                        alignItems="flex-end"*/}
                {/*                        justify="space-between"*/}
                {/*                    >*/}
                {/*                        <Chip*/}
                {/*                            variant="outlined"*/}
                {/*                            color="secondary"*/}
                {/*                            label={product.price + ' РУБ.'}*/}
                {/*                        />*/}
                {/*                        <BuyProduct product={product}/>*/}
                {/*                    </Grid>*/}
                {/*                </Grid>*/}
                {/*            </CardContent>*/}
                {/*        </Card>*/}
                {/*    </li>*/}
                {/*)}*/}
                {productsList.map(product =>
                    <li key={product.id}>
                        <Card className={classes.card} elevation={5}>
                            <CardMedia
                                className={classes.media}
                                image={product.pictureUrl}
                                title="product"
                            />
                            <div>
                                <IconButton
                                    href={`/product/${product.id}`}
                                    className={classes.iconButton}
                                >
                                    <InfoIcon fontSize="large"/>
                                </IconButton>

                                {handleCheckFavorites(product.id) ? (
                                    <UnLikeProduct product_id={product.id}/>
                                ) : (
                                    <LikeProduct product_id={product.id}/>
                                )}
                                {/*<IconButton className={classes.iconButton}>*/}
                                {/*    <AddShoppingCartOutlinedIcon fontSize="large"/>*/}
                                {/*</IconButton>*/}
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
                                        <BuyProduct product={product}/>
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