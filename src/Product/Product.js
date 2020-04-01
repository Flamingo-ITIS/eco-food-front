import React from "react";
import {makeStyles} from "@material-ui/styles";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";
import {Paper} from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import {
    Link,
    useParams
} from "react-router-dom";
import CardActionArea from "@material-ui/core/CardActionArea";

export const useStyles = makeStyles({
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
        height: 300,
        textAlign: 'left',
    },
    image: {
        padding: 10,
        margin: 10,
        height: 300
    },
    media: {
        height: 150,
    },
});

const Product = ({product, similar_products}) => {
    // let {id} = useParams();
    console.log({product});
    console.log({similar_products});
    // product = products.find(product => (product.id === id));
    const classes = useStyles();
    return (
        <div>
            <h1>{product.title}</h1>
            <div className={classes.noWrapContainer}>
                <Paper className={classes.image}>
                    <CardMedia
                        className={classes.media}
                        // image="https://foodcity.ru/storage/products/October2018/eP9jt5L6V510QjjT4a1B.jpg"
                        image={product.pictureUrl}
                        title={product.title}
                    />
                    <div>
                        <i className="fas fa-search-plus fa-2x" style={{cursor: 'pointer'}}/>
                        <i className="far fa-heart fa-2x" style={{cursor: 'pointer'}}/>
                        <i className="fas fa-cart-arrow-down fa-2x" style={{cursor: 'pointer'}}/>
                    </div>
                    <div>
                        <i className="fas fa-star" style={{cursor: 'pointer'}}/>
                        <i className="fas fa-star" style={{cursor: 'pointer'}}/>
                        <i className="fas fa-star" style={{cursor: 'pointer'}}/>
                        <i className="far fa-star" style={{cursor: 'pointer'}}/>
                        <i className="far fa-star" style={{cursor: 'pointer'}}/>
                    </div>
                </Paper>
                <Paper className={classes.info}>
                    <h3>Описание</h3>
                    {/*<p>*/}
                    {/*    Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).*/}
                    {/*</p>*/}
                    <p>
                        {product.description}
                    </p>
                </Paper>
            </div>
            <div>
                <h1>Похожие товары</h1>
                <ul className={classes.wrapContainer}>
                    {similar_products.map(product =>
                        <li key={product.id}>
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.media}
                                    image={product.pictureUrl}
                                    title={product.title}
                                />
                                <div>
                                    <i className="fas fa-search-plus" style={{cursor: 'pointer'}}/>
                                    <i className="far fa-heart" style={{cursor: 'pointer'}}/>
                                    <i className="fas fa-cart-arrow-down" style={{cursor: 'pointer'}}/>
                                </div>
                                <CardContent>
                                    <h2>
                                        <Link to={``}
                                              style={{textDecoration: 'none'}}>
                                            {product.title}
                                        </Link>
                                    </h2>
                                </CardContent>
                            </Card>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
};

export default Product;