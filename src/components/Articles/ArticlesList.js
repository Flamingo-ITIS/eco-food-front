import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/core/SvgIcon/SvgIcon";
import LikeProduct from "../FavoriteProducts/LikeProduct";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {Link} from "react-router-dom";
import Chip from "@material-ui/core/Chip";
import Button from "@material-ui/core/Button";
import React, {useEffect, useState} from "react";
import {makeStyles} from "@material-ui/styles";
import API_URL from "../API";

export const useStyles = makeStyles(theme => ({
    card: {
        width: 250,
        // height: 400,
        // background: "linear-gradient(rgba(200,240,130,0.5),transparent)",
        // backgroundColor: "#fdfdc8",
        margin: "20px",
        padding: "5px",
        borderRadius: "12px",
        transition: "0.3s",
        // boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
        "&:hover": {
            transform: 'scale(1.05)',
        },
    },
    titleBar: {
        borderRadius: "12px 12px 0 0"
    },
    media: {
        height: 150,
        width: 250,
        borderRadius: "12px",
        margin: "0 auto"
    },
    heading: {
        fontWeight: "bold"
    },
    subheading: {
        lineHeight: 1.8
    },
    iconButton: {
        backgroundColor: theme.palette.primary.light,
        "&:hover": {
            backgroundColor: theme.palette.primary.main,
        },
        color: "black",
        // border: "1px solid black",
        margin: "10px",
        padding: "10px"
    },
    buyButton: {
        // margin: theme.spacing(1,1,1),
        color: "white",
    }
}));

const ArticlesList = () => {
    const classes = useStyles();
    const TextTruncate = require('react-text-truncate');

    const [articles, setArticles] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
        };
        const url = API_URL + '/articles';
        fetch(url, requestOptions)
            .then(response => response.json())
            .then(
                data => {
                    setIsLoaded(true);
                    setArticles(data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error)
                });

    }, []);
    console.log(articles);

    return (
        <ul>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                {articles?.map(article =>
                    <li key={article.id}>
                        <Card className={classes.card} elevation={5}>
                            {/*<CardMedia*/}
                            {/*    className={classes.media}*/}
                            {/*    image={article.pictureUrl}*/}
                            {/*    title="product"*/}
                            {/*/>*/}
                            <CardContent>
                                <Grid
                                    container
                                    direction="column"
                                    alignItems="center"
                                    justify="center"
                                >
                                    <Typography variant="h6" gutterBottom style={{width: 220}}>
                                        <Link to={`/articles/${article.id}`}
                                              style={{textDecoration: 'none'}}>
                                            <TextTruncate
                                                line={3}
                                                truncateText="…"
                                                text={article.name}
                                            />
                                        </Link>
                                    </Typography>
                                    <Typography variant="body1" gutterBottom style={{width: 220}}>
                                        <TextTruncate
                                            line={5}
                                            truncateText="…"
                                            text={article.lid}
                                        />
                                    </Typography>
                                </Grid>
                            </CardContent>
                        </Card>
                    </li>
                )}
            </Grid>
        </ul>
    )
};

export default ArticlesList;