import React from "react";
import {Carousel} from "react-responsive-carousel";
import Slider from 'infinite-react-carousel';
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import {Link} from "react-router-dom";
import {useStyles} from "./App";

const Main = ({products}) => {
    const classes = useStyles();
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
            <div>
                <ul className={classes.flex}>
                    {products.slice(0, 4).map(product =>
                        <li key={product.id}>
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.media}
                                    image={product.pictureUrl}
                                    title="product"
                                />
                                <CardContent>
                                    <h2 style={{margin: "0"}}>
                                        <Link to={`/product`}
                                              style={{textDecoration: 'none'}}>
                                            {product.title}
                                        </Link>
                                    </h2>
                                    <p>
                                        {product.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </li>
                    )}
                </ul>
            </div>
            <h1>Топ товаров</h1>
            <div>
                <ul className={classes.ulWrap}>
                    {products.map(product =>
                        <li key={product.id}>
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.media}
                                    image={product.pictureUrl}
                                    title="product"
                                />
                                <CardContent>
                                    <h2 style={{margin: "0"}}>
                                        <Link to={`/product`}
                                              style={{textDecoration: 'none'}}>
                                            {product.title}
                                        </Link>
                                    </h2>
                                    <p>
                                        {product.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
};

export default Main;