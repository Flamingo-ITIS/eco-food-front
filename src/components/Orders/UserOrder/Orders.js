import React, {useEffect, useState} from "react";
import OrdersList from "./OrdersList";
import API_URL from "../../API";
import Typography from "@material-ui/core/Typography";
import Loader from "react-loader-spinner";

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

        });

        console.log(boughtProducts);
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
                    <Typography variant="h4" gutterBottom>
                        Мои покупки
                    </Typography>
                    <OrdersList orders={boughtProducts}/>
                </div>
            );
        }
    }
;
export default Orders;