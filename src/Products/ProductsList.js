import React from "react";
import Card from "@material-ui/core/Card";
import {Link} from "react-router-dom";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import {makeStyles} from "@material-ui/core/styles";
import {useStyles} from "../App";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Avatar from "@material-ui/core/Avatar";

const ProductsList = ({products}) => {
    const classes = useStyles();
    return (
        <div>
            <h1>Каталог</h1>
            <div style={{display: 'flex', flexWrap: 'nowrap'}}>
                <div>
                    <h3>Фильтры</h3>
                    <FormGroup>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    value="checkedB"
                                    color="primary"
                                />
                            }
                            label="Primary"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    value="checkedB"
                                    color="primary"
                                />
                            }
                            label="Primary"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    value="checkedB"
                                    color="primary"
                                />
                            }
                            label="Primary"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    value="checkedB"
                                    color="primary"
                                />
                            }
                            label="Primary"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    value="checkedB"
                                    color="primary"
                                />
                            }
                            label="Primary"
                        />

                    </FormGroup>
                </div>
                <ul>
                    <li>
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.media}
                                image="/static/images/tomato3.jpg"
                                title="Paella dish"
                            />
                            <div>
                                <i className="fas fa-search-plus fa-2x" style={{cursor: 'pointer'}}/>
                                <i className="far fa-heart fa-2x" style={{cursor: 'pointer'}}/>
                                <i className="fas fa-cart-arrow-down fa-2x" style={{cursor: 'pointer'}}/>
                            </div>
                            <CardContent>
                                <h2>
                                    <Link to={`/product`}
                                          style={{textDecoration: 'none'}}>
                                        Товар
                                    </Link>
                                </h2>
                                <p>
                                    Здесь будет описание
                                    Здесь будет описание
                                    Здесь будет описание
                                    Здесь будет описание
                                    Здесь будет описание
                                </p>
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
                                <i className="fas fa-search-plus fa-2x" style={{cursor: 'pointer'}}/>
                                <i className="far fa-heart fa-2x" style={{cursor: 'pointer'}}/>
                                <i className="fas fa-cart-arrow-down fa-2x" style={{cursor: 'pointer'}}/>
                            </div>
                            <CardContent>
                                <h2>
                                    <Link to={``}
                                          style={{textDecoration: 'none'}}>
                                        Товар
                                    </Link>
                                </h2>
                                <p>
                                    Здесь будет описание
                                    Здесь будет описание
                                    Здесь будет описание
                                    Здесь будет описание
                                    Здесь будет описание
                                </p>
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
                                <i className="fas fa-search-plus fa-2x" style={{cursor: 'pointer'}}/>
                                <i className="far fa-heart fa-2x" style={{cursor: 'pointer'}}/>
                                <i className="fas fa-cart-arrow-down fa-2x" style={{cursor: 'pointer'}}/>
                            </div>
                            <CardContent>
                                <h2>
                                    <Link to={``}
                                          style={{textDecoration: 'none'}}>
                                        Товар
                                    </Link>
                                </h2>
                                <p>
                                    Здесь будет описание
                                    Здесь будет описание
                                    Здесь будет описание
                                    Здесь будет описание
                                    Здесь будет описание
                                </p>
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
                                <i className="fas fa-search-plus fa-2x" style={{cursor: 'pointer'}}/>
                                <i className="far fa-heart fa-2x" style={{cursor: 'pointer'}}/>
                                <i className="fas fa-cart-arrow-down fa-2x" style={{cursor: 'pointer'}}/>
                            </div>
                            <CardContent>
                                <h2>
                                    <Link to={``}
                                          style={{textDecoration: 'none'}}>
                                        Товар
                                    </Link>
                                </h2>
                                <p>
                                    Здесь будет описание
                                    Здесь будет описание
                                    Здесь будет описание
                                    Здесь будет описание
                                    Здесь будет описание
                                </p>
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
                                <i className="fas fa-search-plus fa-2x" style={{cursor: 'pointer'}}/>
                                <i className="far fa-heart fa-2x" style={{cursor: 'pointer'}}/>
                                <i className="fas fa-cart-arrow-down fa-2x" style={{cursor: 'pointer'}}/>
                            </div>
                            <CardContent>
                                <h2>
                                    <Link to={``}
                                          style={{textDecoration: 'none'}}>
                                        Товар
                                    </Link>
                                </h2>
                                <p>
                                    Здесь будет описание
                                    Здесь будет описание
                                    Здесь будет описание
                                    Здесь будет описание
                                    Здесь будет описание
                                </p>
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
                                <i className="fas fa-search-plus fa-2x" style={{cursor: 'pointer'}}/>
                                <i className="far fa-heart fa-2x" style={{cursor: 'pointer'}}/>
                                <i className="fas fa-cart-arrow-down fa-2x" style={{cursor: 'pointer'}}/>
                            </div>
                            <CardContent>
                                <h2>
                                    <Link to={``}
                                          style={{textDecoration: 'none'}}>
                                        Товар
                                    </Link>
                                </h2>
                                <p>
                                    Здесь будет описание
                                    Здесь будет описание
                                    Здесь будет описание
                                    Здесь будет описание
                                    Здесь будет описание
                                </p>
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
                                <i className="fas fa-search-plus fa-2x" style={{cursor: 'pointer'}}/>
                                <i className="far fa-heart fa-2x" style={{cursor: 'pointer'}}/>
                                <i className="fas fa-cart-arrow-down fa-2x" style={{cursor: 'pointer'}}/>
                            </div>
                            <CardContent>
                                <h2>
                                    <Link to={``}
                                          style={{textDecoration: 'none'}}>
                                        Товар
                                    </Link>
                                </h2>
                                <p>
                                    Здесь будет описание
                                    Здесь будет описание
                                    Здесь будет описание
                                    Здесь будет описание
                                    Здесь будет описание
                                </p>
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
                                <i className="fas fa-search-plus fa-2x" style={{cursor: 'pointer'}}/>
                                <i className="far fa-heart fa-2x" style={{cursor: 'pointer'}}/>
                                <i className="fas fa-cart-arrow-down fa-2x" style={{cursor: 'pointer'}}/>
                            </div>
                            <CardContent>
                                <h2>
                                    <Link to={``}
                                          style={{textDecoration: 'none'}}>
                                        Товар
                                    </Link>
                                </h2>
                                <p>
                                    Здесь будет описание
                                    Здесь будет описание
                                    Здесь будет описание
                                    Здесь будет описание
                                    Здесь будет описание
                                </p>
                            </CardContent>
                        </Card>
                    </li>
                </ul>
            </div>
        </div>
    );
}
export default ProductsList