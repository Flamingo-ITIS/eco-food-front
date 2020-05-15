import React, {useEffect, useState} from "react";
import {makeStyles} from "@material-ui/styles";
import CardMedia from "@material-ui/core/CardMedia";
import {Paper} from "@material-ui/core";
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
import GradeIcon from '@material-ui/icons/Grade';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import Chip from "@material-ui/core/Chip";
import API_URL from "../API";
import StarRatingComponent from 'react-star-rating-component';
import RecallsList from "./RecallsList";
import NewRecall from "./NewRecall";
import {checkLoggedIn} from "../NavBar";
import {useCookies} from "react-cookie";
import LikeProduct from "../FavoriteProducts/LikeProduct";
import UploadProductImages from "./UploadProductImages";
import ProductImages from "./ProductImages";


export const useStyles = makeStyles(theme => ({
    info: {
        padding: 10,
        margin: 10,
        width: 800,
        height: 400,
        textAlign: 'left',
        boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    },
    image: {
        height: 400,
        padding: 10,
        margin: 10,
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
    button: {
        margin: theme.spacing(2),
    }
}));

export const CATEGORY_STATES = {
    VEGETABLE: "Овощи",
    FRUIT: "Фрукты",
    NUT: "Орехи",
    BERRY: "Ягоды",
    MUSHROOM: "Грибы",
    HONEY: "Мед",
    GREEN_AND_SPICE: "Зелень и специи",
    DRIED_FRUITS: "Сухофрукты",
    DRINKS: "Напитки"
};

function category_text(category) {
    return CATEGORY_STATES[category]
}

const Product = () => {
    let {id} = useParams();
    const classes = useStyles();
    const [cookies] = useCookies();
    const [product, setProduct] = useState({});
    const [images, setImages] = useState([]);
    const [product_user, setProduct_user] = useState({});
    const [product_category, setProduct_category] = useState({});

    const get_images = () => {

    };

    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
        };
        const url = API_URL + '/products/' + id;
        fetch(url, requestOptions)
            .then(response => response.json())
            .then(data => {
                setProduct(data);
                setProduct_user(data.user);
                setProduct_category(data.category);
                setImages(data.images);
            });
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
            <Chip
                color="secondary"
                label={category_text(product_category.name)}
            />
            <Typography variant="h2" gutterBottom>
                {product.title}
            </Typography>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Paper className={classes.image}>
                    <ProductImages
                        product_id={product.id}
                        images={images}
                    />
                    <UploadProductImages product_id={product.id}/>
                    <div>
                        <LikeProduct product_id={product.id}/>
                    </div>
                    <div>
                        <StarRatingComponent
                            editing={false}
                            renderStarIcon={() => <GradeIcon fontSize="large"/>}
                            starCount={5}
                            value={product.rating}
                            emptyStarColor="#cfcfcf"
                            // name="rate1"
                            // starCount={5}
                            // value={rating}
                            // onStarClick={onStarClick.bind(this)}
                        />
                    </div>
                    <Button
                        variant="outlined"
                        color="secondary"
                        component={Link}
                        to={'/seller/' + product_user.username}
                        className={classes.button}
                    >
                        <AccountBoxIcon/>
                        Профиль продавца
                    </Button>
                </Paper>
                <Paper className={classes.info}>
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                        spacing={40}
                    >
                        <Typography variant="h4" gutterBottom>
                            Описание
                        </Typography>
                        <Typography variant="body1" component="h6" gutterBottom>
                            {product.description}
                        </Typography>
                    </Grid>
                </Paper>
            </Grid>

            <hr
                style={{
                    color: "black",
                    margin: 20,
                    width: 1100,
                }}
            />
            <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
                style={{
                    width: 1000,
                }}
            >
                <Typography variant="h5" gutterBottom>
                    Отзывы
                </Typography>
                {(checkLoggedIn(cookies.auth_token)) ? (
                    <NewRecall productId={id}/>
                ) : (
                    <Typography variant="body1" gutterBottom>
                        <Link to="/login">
                            Войдите
                        </Link>
                        , чтобы оставить комментарий
                    </Typography>
                )
                }
            </Grid>

            <RecallsList product_id={id}/>
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