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
import Typography from "@material-ui/core/Typography";
import {Link} from "react-router-dom";

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
            <Typography variant="h3" gutterBottom>
                Избранное
            </Typography>
            {products.length > 0 ? (
                <ProductsList productsList={products}/>
            ) : (
                <div>
                    <Typography variant="body1" gutterBottom>
                        Здесь пока ничего нет :(
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Скорее перейдите в <Link to="/products">
                        каталог
                    </Link> и добавьте товары в избранное!
                    </Typography>
                </div>
            )}
        </div>
    );
}
export default FavouriteProducts;