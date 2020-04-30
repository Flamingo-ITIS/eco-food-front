import React, {useEffect, useState} from "react";
import Card from "@material-ui/core/Card";
import {
    Link,
    useParams
} from "react-router-dom";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import {makeStyles} from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import AddShoppingCartOutlinedIcon from '@material-ui/icons/AddShoppingCartOutlined';
import IconButton from "@material-ui/core/IconButton";
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import InfoIcon from '@material-ui/icons/InfoOutlined';
import * as QueryString from "query-string";
import ProductsList from "./ProductsList";

const FoundProducts = () => {
    const values = QueryString.parse(window.location.search);
    const input = values.template;

    const [productsList, setProductsList] = useState([]);

    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
        };
        const url = 'http://localhost:9000/search/products?template=' + input;
        fetch(url, requestOptions)
            .then(response => response.json())
            .then(data => setProductsList(data));
    }, []);
    console.log(productsList);

    return (
        <div>
            <h1>Найденные товары</h1>
            <ProductsList productsList={productsList}/>
        </div>
    );
}
export default FoundProducts;