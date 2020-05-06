import React, {useEffect, useState} from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import {useStyles} from "../Products/ProductsList";
import Grid from "@material-ui/core/Grid";
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import UnLikeProduct from "./UnLikeProduct";
import API_URL from "../API";
import {useCookies} from "react-cookie";

const FavouriteProducts = () => {
    const classes = useStyles();
    const [products, setProducts] = useState([]);
    const [cookies] = useCookies();

    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Authorization': 'Bearer ' + cookies.auth_token
            },
        };
        fetch(API_URL + '/favorites', requestOptions)
            .then(response => response.json())
            .then(data => setProducts(data));
    }, []);
    console.log(products);
    return (
        <div>
            <h1>Избранное</h1>
            <ul>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    {products.map(product =>
                        <li key={product.id}>
                            <Card className={classes.card} elevation={5}>
                                {/*<CardMedia*/}
                                {/*    className={classes.media}*/}
                                {/*    image={product.pictureUrl}*/}
                                {/*    title="product"*/}
                                {/*/>*/}
                                <GridListTile>
                                    <img src={product.pictureUrl} className={classes.media}/>
                                    <GridListTileBar
                                        title={product.title}
                                        titlePosition="top"
                                        actionIcon={
                                            <UnLikeProduct product_id={product.id}/>
                                        }
                                        actionPosition="right"
                                        className={classes.titleBar}
                                    />
                                </GridListTile>
                                {/*<div>*/}
                                {/*    <IconButton className={classes.iconButton}>*/}
                                {/*        <InfoIcon fontSize="large"/>*/}
                                {/*    </IconButton>*/}
                                {/*    <IconButton className={classes.iconButton} color="secondary">*/}
                                {/*        <LoyaltyIcon fontSize="large"/>*/}
                                {/*    </IconButton>*/}
                                {/*    <IconButton className={classes.iconButton}>*/}
                                {/*        <AddShoppingCartOutlinedIcon fontSize="large"/>*/}
                                {/*    </IconButton>*/}
                                {/*</div>*/}
                                {/*<CardContent>*/}
                                {/*    <h2 style={{margin: "0"}}>*/}
                                {/*        <Link to={`/product/${product.id}`}*/}
                                {/*              style={{textDecoration: 'none'}}>*/}
                                {/*            {product.title}*/}
                                {/*        </Link>*/}
                                {/*    </h2>*/}
                                {/*    <div className={classes.description}>*/}
                                {/*        {product.description}*/}
                                {/*    </div>*/}
                                {/*</CardContent>*/}
                                <CardContent>
                                    <TextInfoContent
                                        overline={'Овощи'}
                                        heading={product.title}
                                    />
                                </CardContent>
                            </Card>
                        </li>
                    )}
                </Grid>
            </ul>
        </div>
    );
}
export default FavouriteProducts;