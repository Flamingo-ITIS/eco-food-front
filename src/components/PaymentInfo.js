import Grid from "@material-ui/core/Grid";
import React from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/styles";

export const useStyles = makeStyles({
    info: {
        padding: 20,
        margin: 20,
    },
});

const PaymentInfo = () => {
    const classes = useStyles();
    return (
        <Grid container
              direction="column"
              justify="center"
              alignItems="center"
        >
            <Typography variant="h2">
                Доставка и оплата
            </Typography>
            <Paper className={classes.info}>
                <Typography variant="body1">
                    ./src/components/Product/Product.js
                    Line 9:5:  'useParams' is defined but never used  no-unused-vars

                    ./src/components/NavBar.js
                    Line 9:8:    'ShoppingCartIcon' is defined but never used                                                               no-unused-vars
                    Compiling...
                    ./src/components/Product/Product.js
                    Line 9:5:  'useParams' is defined but never used  no-unused-vars

                    ./src/components/NavBar.js
                    Line 9:8:    'ShoppingCartIcon' is defined but never used                                                               no-unused-vars
                    Compiling...
                    ./src/components/Product/Product.js
                    Line 9:5:  'useParams' is defined but never used  no-unused-vars

                    ./src/components/NavBar.js
                    Line 9:8:    'ShoppingCartIcon' is defined but never used                                                               no-unused-vars
                    Compiling..../src/components/Product/Product.js
                    Line 9:5:  'useParams' is defined but never used  no-unused-vars

                    ./src/components/NavBar.js
                    Line 9:8:    'ShoppingCartIcon' is defined but never used                                                               no-unused-vars
                    Compiling...
                    ./src/components/Product/Product.js
                    Line 9:5:  'useParams' is defined but never used  no-unused-vars

                    ./src/components/NavBar.js
                    Line 9:8:    'ShoppingCartIcon' is defined but never used                                                               no-unused-vars
                    Compiling...
                    ./src/components/Product/Product.js
                    Line 9:5:  'useParams' is defined but never used  no-unused-vars

                    ./src/components/NavBar.js
                    Line 9:8:    'ShoppingCartIcon' is defined but never used                                                               no-unused-vars
                    Compiling...
                    ./src/components/Product/Product.js
                    Line 9:5:  'useParams' is defined but never used  no-unused-vars

                    ./src/components/NavBar.js
                    Line 9:8:    'ShoppingCartIcon' is defined but never used                                                               no-unused-vars
                    Compiling...



                </Typography>
            </Paper>
        </Grid>
    )
};

export default PaymentInfo;