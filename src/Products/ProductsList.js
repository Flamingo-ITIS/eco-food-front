import React, {useEffect, useState} from "react";
import Card from "@material-ui/core/Card";
import {Link} from "react-router-dom";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import {makeStyles} from "@material-ui/styles";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import AddShoppingCartOutlinedIcon from '@material-ui/icons/AddShoppingCartOutlined';
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import InfoIcon from '@material-ui/icons/InfoOutlined';

export const useStyles = makeStyles({
    card: {
        width: 250,
        height: 400,
        // background: "linear-gradient(rgba(200,240,130,0.5),transparent)",
        // backgroundColor: "#fdfdc8",
        margin: "20px",
        padding: "5px",
        paddingBottom: "15px",
        transition: "0.3s",
        boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
        "&:hover": {
            boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
        },
    },
    media: {
        height: 150,
        width: 250,
        margin: "0 auto"
    },
    heading: {
        fontWeight: "bold"
    },
    subheading: {
        lineHeight: 1.8
    },
    iconButton: {
        // backgroundColor: "#fc462d",
        color: "black",
        // border: "1px solid black",
        margin: "10px",
        padding: "10px"
    },
    description: {
        margin: "5px"
    }
});


const ProductsList = ({products}) => {
    const classes = useStyles();
    // const [products, setProducts] = useState([]);
    // console.log(localStorage.getItem("token"));
    // useEffect(() => {
    //     const requestOptions = {
    //         method: 'GET',
    //         headers: { 'Content-Type': 'application/json',
    //             'Access-Control-Allow-Origin': '*',
    //             'Authorization': 'Bearer ' + "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJSaW5hdCIsImF1dGgiOlsiUEFSVE5FUiJdLCJpYXQiOjE1ODYxMTg0MTcsImV4cCI6MTU4NjcyMzIxN30.RZO9SzLAIzw9sN7DAUMAMWKcM0qL-8aRsUc4ZWJU1ao"
    //         },
    //     };
    //     fetch('http://localhost:9000/product', requestOptions)
    //         .then(response => response.json())
    //         .then(data => setProducts(data));
    // }, []);
    console.log(products);
    return (
        <div>
            <h1>Каталог</h1>
            <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
            >
                <Card style={{padding: '30px', margin: '20px', backgroundColor: '#e0fcd4'}}>
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
                </Card>

                <ul style={{width: "900px"}}>
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                    >
                        {products.map(product =>
                            <li key={product.id}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.media}
                                        image={product.pictureUrl}
                                        title="product"
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
                                    <CardContent>
                                        <h2 style={{margin: "0"}}>
                                            <Link to={`/product/${product.id}`}
                                                  style={{textDecoration: 'none'}}>
                                                {product.title}
                                            </Link>
                                        </h2>
                                        <div className={classes.description}>
                                            {product.description}
                                        </div>
                                    </CardContent>
                                </Card>
                            </li>
                        )}
                    </Grid>
                </ul>
            </Grid>
        </div>
    );
}
export default ProductsList