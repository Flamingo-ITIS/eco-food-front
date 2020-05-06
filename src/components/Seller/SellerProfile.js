import React, {useEffect, useState,} from 'react'
import {
    Link,
    useParams,
} from "react-router-dom";
import {makeStyles} from "@material-ui/styles";
import {Paper} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Chip from "@material-ui/core/Chip";
import API_URL from "../API";

export const useStyles = makeStyles(theme => ({
    info: {
        padding: 10,
        margin: 10,
        // width: 400,
        height: 200,
        textAlign: 'left',
    },
    button: {
        margin: "10px",
        padding: "5px",
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.primary.light
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
        width: '200px'
    },
    media: {
        height: 150,
        width: 250,
        margin: "0 auto"
    },
}));


const SellerProfile = () => {
    let {username} = useParams();
    const classes = useStyles();

    const [user, setUser] = useState({});
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
        };
        const url = API_URL + '/products/' + username + '/users';
        fetch(url, requestOptions)
            .then(response => response.json())
            .then(data => {
                setProducts(data);
                setUser(data[0].user);
            });
    }, []);

    console.log(user);
    return (
        <Grid>
            <Chip
                color="secondary"
                label={<Typography variant="h4">
                    {user.username}
                </Typography>}
                style={{margin: 20}}
            />
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="flex-start"
            >
                <Paper className={classes.image}>
                    <div>
                        <Avatar variant="square"
                                style={{width: '200px', height: '200px'}}
                        />
                    </div>
                </Paper>
                {/*<Paper className={classes.info}>*/}
                {/*    <h2 style={{textAlign: 'right'}}>{user.role}</h2>*/}
                {/*    <h3>Имя: {user.name}</h3>*/}
                {/*    <h3>Номер телефона: {user.contactPhone}</h3>*/}
                {/*    <h3>Адрес: {user.geoPosition}</h3>*/}
                {/*    <h3>email: {user.email}</h3>*/}
                {/*</Paper>*/}
                <ul>
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                    >
                        <Typography variant="h4">
                            Опубликованные товары
                        </Typography>
                        <hr/>
                        <br/>
                        {products?.map(product =>
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
                                        <h4>{product.count + " " + product.countType}</h4>
                                    </div>
                                    <div>
                                        <h2>{product.cost} РУБ</h2>
                                    </div>
                                </Card>
                            </li>
                        )}
                    </Grid>
                </ul>
            </Grid>
        </Grid>
    )
};

export default SellerProfile;