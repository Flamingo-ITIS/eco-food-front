import React, {useEffect, useState} from "react";
import {makeStyles} from "@material-ui/styles";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";
import {Paper} from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import {
    Link,
    useParams
} from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import InfoIcon from '@material-ui/icons/InfoOutlined';
import AddShoppingCartOutlinedIcon from '@material-ui/icons/AddShoppingCartOutlined';
import GradeOutlinedIcon from '@material-ui/icons/GradeOutlined';
import Typography from "@material-ui/core/Typography";
import data from "../../data";

export const useStyles = makeStyles(theme => ({
    noWrapContainer: {
        display: 'flex',
        flexWrap: 'nowrap',
        justifyContent: 'center',
    },
    wrapContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    card: {
        width: 250,
        height: 400,
        margin: "20px",
        padding: "5px",
        transition: "0.3s",
        boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
        "&:hover": {
            boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
        },
    },
    info: {
        padding: 10,
        margin: 10,
        width: 800,
        height: 350,
        textAlign: 'left',
        boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    },
    image: {
        padding: 10,
        margin: 10,
        height: 350,
        width: 300,
        boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    },
    media: {
        height: 200,
        width: 300,
    },
    iconButton: {
        backgroundColor: theme.palette.primary.light,
        color: "black",
        // border: "1px solid black",
        margin: "10px",
        padding: "10px",
        boxShadow: "0 8px 20px -12px rgba(0,0,0,0.8)",
    },
}));

const Product = () => {
    let {id} = useParams();
    const classes = useStyles();
    const [product, setProduct] = useState({});

    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
        };
        const url = 'http://localhost:9000/products/' + id;
        fetch(url, requestOptions)
            .then(response => response.json())
            .then(data => setProduct(data));
    }, []);
    console.log(product);

    return (
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            spacing={40}
        >
            <Typography variant="h2">
                {product.title}
            </Typography>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Paper className={classes.image}>
                    <CardMedia
                        className={classes.media}
                        image={product.pictureUrl}
                        title={product.title}
                    />
                    <div>
                        <IconButton className={classes.iconButton}>
                            <InfoIcon fontSize="large"/>
                        </IconButton>
                        <IconButton className={classes.iconButton}>
                            <LoyaltyIcon fontSize="large"/>
                        </IconButton>
                        <IconButton className={classes.iconButton}>
                            <AddShoppingCartOutlinedIcon fontSize="large"/>
                        </IconButton>
                    </div>
                    <div>
                        <IconButton>
                            <GradeOutlinedIcon/>
                        </IconButton>
                        <IconButton>
                            <GradeOutlinedIcon/>
                        </IconButton>
                        <IconButton>
                            <GradeOutlinedIcon/>
                        </IconButton>
                        <IconButton>
                            <GradeOutlinedIcon/>
                        </IconButton>
                        <IconButton>
                            <GradeOutlinedIcon/>
                        </IconButton>

                    </div>
                </Paper>
                <Paper className={classes.info}>
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                        spacing={40}
                    >
                        <Typography variant="h4">
                            Описание
                        </Typography>
                        <br/>
                        <Typography variant="body1">
                            {product.description}
                        </Typography>
                    </Grid>
                </Paper>
            </Grid>
            {/*<div>*/}
            {/*    <h1>Похожие товары</h1>*/}
            {/*    <ul className={classes.wrapContainer}>*/}
            {/*        {similar_products.map(product =>*/}
            {/*            <li key={product.id}>*/}
            {/*                <Card className={classes.card}>*/}
            {/*                    <CardMedia*/}
            {/*                        className={classes.media}*/}
            {/*                        image={product.pictureUrl}*/}
            {/*                        title={product.title}*/}
            {/*                    />*/}
            {/*                    <div>*/}
            {/*                        <i className="fas fa-search-plus" style={{cursor: 'pointer'}}/>*/}
            {/*                        <i className="far fa-heart" style={{cursor: 'pointer'}}/>*/}
            {/*                        <i className="fas fa-cart-arrow-down" style={{cursor: 'pointer'}}/>*/}
            {/*                    </div>*/}
            {/*                    <CardContent>*/}
            {/*                        <h2>*/}
            {/*                            <Link to={``}*/}
            {/*                                  style={{textDecoration: 'none'}}>*/}
            {/*                                {product.title}*/}
            {/*                            </Link>*/}
            {/*                        </h2>*/}
            {/*                    </CardContent>*/}
            {/*                </Card>*/}
            {/*            </li>*/}
            {/*        )}*/}
            {/*    </ul>*/}
            {/*</div>*/}
        </Grid>
    )
};

export default Product;