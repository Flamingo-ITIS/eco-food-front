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
    WrapContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    noWrapContainer: {
        display: 'flex',
        flexWrap: 'nowrap',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    card: {
        display: 'flex',
        flexWrap: 'nowrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 1000,
        height: "auto",
        margin: "auto",
        padding: "10px",
        transition: "0.3s",
        boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
        "&:hover": {
            boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
        },
        // display: 'flex',
        // flexWrap: 'wrap',
        // flexDirection: "row",
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
    }
});

export const Cart = ({products}) => {
    const classes = useStyles();
    return (
        <div>
            <h1>
                Корзина
            </h1>
            <div className={classes.container}>
                <ul>
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
                                    <IconButton>
                                        <IndeterminateCheckBoxIcon/>
                                    </IconButton>
                                    <h5>1</h5>
                                    <IconButton>
                                        <AddBoxIcon/>
                                    </IconButton>
                                </div>
                                <div>
                                    <h2>{product.price} РУБ</h2>
                                </div>
                            </Card>
                        </li>
                    )}
                </ul>
                <Paper style={{padding: "10px"}}>
                    <h1>
                        Итого
                    </h1>
                    <p> тут типа сколько товаров куда как оплатить и другая важная(нет) инфа</p>
                    <hr/>
                    <Button variant="contained" color="secondary">
                        Оформить заказ
                    </Button>
                </Paper>
            </div>
        </div>
    )
}
export default Cart;