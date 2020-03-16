import React from "react";
import {makeStyles} from "@material-ui/styles";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";
import {Paper} from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import {Link} from "react-router-dom";
import CardActionArea from "@material-ui/core/CardActionArea";

export const useStyles = makeStyles({
    flex: {
        display: 'flex',
        flexWrap: 'nowrap',
        justifyContent: 'center',
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

const Product = ({product}) => {
    const classes = useStyles();
    return (
        <div>
            <h1>Товар</h1>
            <div className={classes.flex}>
                <Paper className={classes.image}>
                    <CardMedia
                        className={classes.media}
                        image="https://foodcity.ru/storage/products/October2018/eP9jt5L6V510QjjT4a1B.jpg"
                        title="Paella dish"
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
                    <p>
                        Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).
                    </p>
                </Paper>
            </div>
            <div>
                <h1>Похожие товары</h1>
                <ul>
                    <li>
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.media}
                                image="/static/images/tomato3.jpg"
                                title="Paella dish"
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
                                        Товар
                                    </Link>
                                </h2>
                            </CardContent>
                        </Card>
                    </li>
                    <li>
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.media}
                                image="/static/images/tomato3.jpg"
                                title="Paella dish"
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
                                        Товар
                                    </Link>
                                </h2>
                            </CardContent>
                        </Card>
                    </li>
                    <li>
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.media}
                                image="/static/images/tomato3.jpg"
                                title="Paella dish"
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
                                        Товар
                                    </Link>
                                </h2>
                            </CardContent>
                        </Card>
                    </li>
                    <li>
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.media}
                                image="/static/images/tomato3.jpg"
                                title="Paella dish"
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
                                        Товар
                                    </Link>
                                </h2>
                            </CardContent>
                        </Card>
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default Product;