import React, {useEffect, useState} from "react";
import OrdersList from "./OrdersList";
import API_URL from "../../API";

const Orders = () => {
    // const classes = useStyles();

    const [boughtProducts, setBoughtProducts] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Authorization': 'Bearer ' + localStorage.getItem("token")
            },
        };
        const url = API_URL + '/buys';
        fetch(url, requestOptions)
            .then(response => response.json())
            .then(
                data => {
                    setIsLoaded(true);
                    setBoughtProducts(data)
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error)
                });

    }, []);

    console.log(boughtProducts);

    return (
        <div>
            <h1>
                Мои заказы
            </h1>
            <OrdersList orders={boughtProducts}/>
        </div>
    );
};
export default Orders;