import React, {useEffect, useState} from "react";
import Card from "@material-ui/core/Card";
import {Link} from "react-router-dom";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import {makeStyles} from "@material-ui/core/styles";
import {useStyles} from "../../App";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Avatar from "@material-ui/core/Avatar";
import {Paper} from "@material-ui/core";

const ProductsList = ({products}) => {
    const classes = useStyles();
    // const [products, setProducts] = useState([]);
    // useEffect(() => {
    //     const requestOptions = {
    //         method: 'GET',
    //         headers: { 'Content-Type': 'application/json',
    //             'Access-Control-Allow-Origin': '*'},
    //     };
    //     fetch('http://localhost:9000/product', requestOptions)
    //         .then(response => response.json())
    //         .then(data => setProducts(data));
    // }, []);
    // console.log(products);
    return (
        <div>
            <h1>Избранное</h1>
            <div style={{display: 'flex', flexWrap: 'nowrap'}}>
                <ul className={classes.ulWrap}>
                    {products.map(product =>
                        <li key={product.id}>
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.media}
                                    image={product.pictureUrl}
                                    title="product"
                                />
                                <div>
                                    <i className="fas fa-search-plus fa-2x" style={{cursor: 'pointer'}}/>
                                    <i className="fas fa-heart fa-2x" style={{cursor: 'pointer', color: 'red'}}/>
                                    <i className="fas fa-cart-arrow-down fa-2x" style={{cursor: 'pointer'}}/>
                                </div>
                                <CardContent>
                                    <h2 style={{margin: "0"}}>
                                        <Link to={`/product/${product.id}`}
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
    );
}
export default ProductsList