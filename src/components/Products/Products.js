import React, {useEffect, useState} from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import SortIcon from '@material-ui/icons/Sort';
import ProductsFilter from "./ProductsFilter";
import ProductsList from "./ProductsList";
import Loader from "react-loader-spinner";
import API_URL from "../API";

const Products = ({products}) => {
    const [productsList, setProductsList] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
        };
        const url = API_URL + '/products';
        fetch(url, requestOptions)
            .then(response => response.json())
            .then(
                data => {
                    setIsLoaded(true);
                    setProductsList(data)
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error)
                });

    }, []);
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
                    <ProductsList products={products} productsList={productsList}/>
                </Grid>
            </div>
        );
    }
}
export default Products;