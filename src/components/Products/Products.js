import React, {useCallback, useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import ProductsFilter from "./ProductsFilter";
import ProductsList from "./ProductsList";
import Loader from "react-loader-spinner";
import API_URL from "../API";
import * as QueryString from "query-string";
import SortingButton from "./SortingButton";
import {useCookies} from "react-cookie";


const Products = ({products}) => {
    const [productsList, setProductsList] = useState([]);
    const [category, setCategory] = useState('');
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);
    const [isSorted, setIsSorted] = useState();
    const [isFiltered, setIsFiltered] = useState();
    const values = QueryString.parse(window.location.search);

    useEffect( () => {
        let url = API_URL + "/products" + window.location.search;
        console.log(window.location.search);

        if (values.category !== undefined) {
            const category = values.category;
            setCategory(category);
        }

        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Accept': 'application/json',
                // 'Authorization': 'Bearer ' + cookies.auth_token
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
                setIsSorted(true);
                setIsFiltered(true);
            })
            .catch(error => {
                setError(error);
                console.error('There was an error!', error);
            });
    }, [isSorted, isFiltered]);

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
                timeout={5000}
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
                    <div onClick={() => {
                        setIsSorted(false);
                        setIsLoaded(false);
                    }}>
                        <SortingButton sorting_field="По цене"/>
                        <SortingButton sorting_field="По названию"/>
                        <SortingButton sorting_field="По рейтингу"/>
                    </div>
                </Grid>
                <Grid
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="flex-start"
                >
                    <Grid item xs={3}>
                        <ProductsFilter
                            categoryName={category}
                            filterState={isFiltered => setIsFiltered(isFiltered)}
                            loadedState={isLoaded => setIsLoaded(isLoaded)}
                        />
                    </Grid>
                    <Grid
                        // style={{width: "900px"}}
                        item xs={9}
                    >
                        <ProductsList
                            products={products}
                            productsList={productsList}
                        />
                    </Grid>
                </Grid>
            </div>
        );
    }
}
export default Products;