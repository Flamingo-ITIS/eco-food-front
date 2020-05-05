import React, {useEffect, useState} from "react";
import {Carousel} from "react-responsive-carousel";
import Slider from 'infinite-react-carousel';
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import {Link} from "react-router-dom";
import {useStyles} from "../App";
import ProductsList from "../Products/ProductsList";
import ArticlesList from "../Articles/ArticlesList";
import API_URL from "../API";
import Loader from "react-loader-spinner";

const Main = ({products}) => {
    const classes = useStyles();
    const [topProducts, setTopProducts] = useState([]);
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
        const url = API_URL + '/products/top';
        fetch(url, requestOptions)
            .then(response => response.json())
            .then(
                data => {
                    setIsLoaded(true);
                    setTopProducts(data)
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error)
                });
    }, []);
    console.log(topProducts);
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
                <div>
                    <Slider dots>
                        {/*<div>*/}
                        {/*    <img src="https://dizao-shop.ru/upload/iblock/106/slaydery_dizao_shopru1.jpg" alt={"banner"}/>*/}
                        {/*</div>*/}
                        <div>
                            <img src="/static/banners/banner_1.jpg" alt={"banner"}/>
                        </div>
                        <div>
                            <img src="/static/banners/banner_2.png" alt={"banner"}/>
                        </div>
                        <div>
                            <img src="/static/banners/banner_3.png" alt={"banner"}/>
                        </div>
                        <div>
                            <img src="/static/banners/banner_4.png" alt={"banner"}/>
                        </div>
                    </Slider>
                </div>
                <h1>Блог</h1>
                <ArticlesList/>
                {/*<div>*/}
                {/*    <ul className={classes.flex}>*/}
                {/*        {products.slice(0, 4).map(product =>*/}
                {/*            <li key={product.id}>*/}
                {/*                <Card className={classes.card}>*/}
                {/*                    <CardMedia*/}
                {/*                        className={classes.media}*/}
                {/*                        image={product.pictureUrl}*/}
                {/*                        title="product"*/}
                {/*                    />*/}
                {/*                    <CardContent>*/}
                {/*                        <h2 style={{margin: "0"}}>*/}
                {/*                            <Link to={`/product`}*/}
                {/*                                  style={{textDecoration: 'none'}}>*/}
                {/*                                {product.title}*/}
                {/*                            </Link>*/}
                {/*                        </h2>*/}
                {/*                        <p>*/}
                {/*                            {product.description}*/}
                {/*                        </p>*/}
                {/*                    </CardContent>*/}
                {/*                </Card>*/}
                {/*            </li>*/}
                {/*        )}*/}
                {/*    </ul>*/}
                {/*</div>*/}
                <h1>Топ товаров</h1>
                <ProductsList productsList={topProducts}/>
            </div>
        )
    }
};

export default Main;