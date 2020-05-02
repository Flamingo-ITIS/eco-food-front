import React, {useEffect, useState} from "react";
import Paper from "@material-ui/core/Paper";
import {
    Link,
    useParams
} from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import API_URL from "../API";

const Article = () => {
    let {id} = useParams();
    const [article, setArticle] = useState({});
    const [product_user, setProduct_user] = useState({});
    const [product_category, setProduct_category] = useState({});

    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
        };
        const url = API_URL + '/articles/' + id;
        fetch(url, requestOptions)
            .then(response => response.json())
            .then(data => {
                setArticle(data);
            });
    }, []);
    console.log(article);

    return (
        <Paper style={{padding: 30}} elevation={5}>
            <Typography variant="h3" gutterBottom>
                {article.name}
            </Typography>
            <hr/>
            <br/>
            <Typography variant="overline" gutterBottom>
                {article.lid}
            </Typography>
            <hr/>
            <br/>
            <Typography variant="h5" gutterBottom>
                {article.text}
            </Typography>
        </Paper>
    )
};

export default Article;