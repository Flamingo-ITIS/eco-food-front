import React, {useEffect, useState} from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import ProductsList, {useStyles} from "../Products/ProductsList";
import Grid from "@material-ui/core/Grid";
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import UnLikeProduct from "./UnLikeProduct";
import API_URL from "../API";
import {useCookies} from "react-cookie";

const FavouriteProducts = () => {
    const classes = useStyles();
    const [cookies] = useCookies();
    const [products, setProducts] = useState([]);

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
                    <ProductsList productsList={products}/>
                    {/*{products.map(product =>*/}
                    {/*    <li key={product.id}>*/}
                    {/*        <Card className={classes.card} elevation={5}>*/}
                    {/*            <GridListTile>*/}
                    {/*                <img src={product.pictureUrl} className={classes.media}/>*/}
                    {/*                <GridListTileBar*/}
                    {/*                    title={product.title}*/}
                    {/*                    titlePosition="top"*/}
                    {/*                    actionIcon={*/}
                    {/*                        <UnLikeProduct product_id={product.id}/>*/}
                    {/*                    }*/}
                    {/*                    actionPosition="right"*/}
                    {/*                    className={classes.titleBar}*/}
                    {/*                />*/}
                    {/*            </GridListTile>*/}
                    {/*            <CardContent>*/}
                    {/*                <TextInfoContent*/}
                    {/*                    overline={'Овощи'}*/}
                    {/*                    heading={product.title}*/}
                    {/*                />*/}
                    {/*            </CardContent>*/}
                    {/*        </Card>*/}
                    {/*    </li>*/}
                    {/*)}*/}
                </Grid>
            </ul>
        </div>
    );
}
export default FavouriteProducts;