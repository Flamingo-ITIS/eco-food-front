import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import {Link} from "react-router-dom";
import {makeStyles} from "@material-ui/styles";
import IconButton from "@material-ui/core/IconButton";
import AddBoxIcon from '@material-ui/icons/AddBox';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

export const useStyles = makeStyles({
    wrapContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '10px'
    },
    noWrapContainer: {
        display: 'flex',
        flexWrap: 'nowrap',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        margin: '10px'
    },
    card: {
        display: 'flex',
        flexWrap: 'nowrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: "auto",
        margin: "10px",
        padding: "10px",
        transition: "0.3s",
        boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
        "&:hover": {
            boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
        },
    },
    content: {
        width: '500px'
    },
    media: {
        height: 150,
        width: 250,
        margin: "0 auto"
    },
    container: {
        display: 'flex',
        flexWrap: 'nowrap',
        margin: '10px',
        alignItems: 'flex-start',
    },
    ulNoWrap: {
        justifyContent: "center",
        margin: "15px",
    }
});

export const Published_products = ({products}) => {
    const classes = useStyles();
    return (
        <div>
            <h1>
                Опубликованные товары
            </h1>
            <div className={classes.container}>
                <ul className={classes.ulNoWrap}>
                    {products.map(product =>
                        <li key={product.id}>
                            <Card className={classes.card}>
                                <div>
                                    <CardMedia
                                        className={classes.media}
                                        image={product.pictureUrl}
                                        title="product"
                                    />
                                    {/*<div>*/}
                                    {/*    <i className="fas fa-search-plus fa-2x" style={{cursor: 'pointer'}}/>*/}
                                    {/*    <i className="far fa-heart fa-2x" style={{cursor: 'pointer'}}/>*/}
                                    {/*    <i className="fas fa-cart-arrow-down fa-2x" style={{cursor: 'pointer'}}/>*/}
                                    {/*</div>*/}
                                </div>
                                <CardContent className={classes.content}>
                                    <h2 style={{margin: "0"}}>
                                        <Link to={`/product/${product.id}`}
                                              style={{textDecoration: 'none'}}>
                                            {product.title}
                                        </Link>
                                    </h2>
                                </CardContent>
                                <div className={classes.noWrapContainer}>
                                    <h2>10 шт.</h2>
                                </div>
                                <div>
                                    <h2>{product.price} РУБ</h2>
                                </div>
                                <div className={classes.wrapContainer} style={{maxWidth: "100px"}}>
                                    <Button style={{backgroundColor: "#62C5FF", width: "100%", margin: "5px", padding: "15px"}}>
                                        Изменить
                                    </Button>
                                    <Button style={{backgroundColor: "#DA1313", width: "100%", margin: "5px"}}>
                                        Удалить
                                    </Button>
                                </div>
                            </Card>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}
export default Published_products;