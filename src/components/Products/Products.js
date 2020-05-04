import React, {useEffect, useState} from "react";
import {Link, Redirect, useHistory} from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import SortIcon from '@material-ui/icons/Sort';
import ProductsFilter from "./ProductsFilter";
import ProductsList from "./ProductsList";
import Loader from "react-loader-spinner";
import API_URL from "../API";
import * as QueryString from "query-string";
import SortingButton from "./SortingButton";

const Products = ({products}) => {
    const [productsList, setProductsList] = useState([]);
    const [category, setCategory] = useState('');
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);
    const values = QueryString.parse(window.location.search);
    const history = useHistory();

    useEffect(() => {
        let url = API_URL + "/products" + window.location.search;
        console.log(window.location.search);
        if (values.category !== undefined) {
            const category = values.category;
            setCategory(category);
        };

        //
        // if (values.sort !== undefined){
        //     const sort = values.sort;
        //     url = url + "?sort=" + sort;
        //     console.log(url);
        // };

        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem("token")
            },
        };
        fetch(url, requestOptions, [])
            .then(async response => {
                const data = await response.json();

                setIsLoaded(true);
                if (!response.ok) {
                    // get error message from body or default to response status
                    const error = (data && data.message) || response.status;
                    return Promise.reject(error);
                }
                setProductsList(data);
            })
            .catch(error => {
                setError(error);
                console.error('There was an error!', error);
            });
    });
    console.log(productsList);

    if (error) {
        return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
        return <div style={{position: 'fixed', top: '50%', left: '50%'}}>
            <Loader
                type="ThreeDots"
                color="primary"
                height={100}
                width={100}
                timeout={3000} //3 secs
            />
        </div>
    } else {
        return (
            <div>
                <h1>Каталог</h1>
                <Grid
                    container
                    direction="row"
                    justify="flex-end"
                    alignItems="center"
                >
                    <SortingButton sorting_field="По цене"/>
                    <SortingButton sorting_field="По названию"/>
                    <SortingButton sorting_field="По рейтингу"/>
                </Grid>
                <Grid
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="flex-start"
                >
                    <ProductsFilter categoryName={category}/>
                    <ProductsList products={products} productsList={productsList}/>
                </Grid>
            </div>
        );
    }
}
export default Products;