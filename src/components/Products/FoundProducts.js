import React, {useEffect, useState} from "react";
import * as QueryString from "query-string";
import ProductsList from "./ProductsList";
import API_URL from "../API";
import Typography from "@material-ui/core/Typography";

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
        const url = API_URL + '/search/products?template=' + input;
        fetch(url, requestOptions)
            .then(response => response.json())
            .then(data => setProductsList(data));
    }, []);
    console.log(productsList);

    return (
        <div>
            <Typography variant="h4" gutterBottom>
                Найденные товары
            </Typography>
            {productsList.length > 0 ? (
                <ProductsList productsList={productsList}/>
            ) : (
                <div>
                    <Typography variant="h6" gutterBottom>
                        По запросу "{input}" ничего не найдено.
                    </Typography>
                </div>
            )}
        </div>
    );
}
export default FoundProducts;