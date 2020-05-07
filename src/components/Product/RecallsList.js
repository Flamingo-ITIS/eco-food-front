import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import GradeIcon from '@material-ui/icons/Grade';
import React, {useEffect, useState} from "react";
import StarRatingComponent from "react-star-rating-component";
import {makeStyles} from "@material-ui/styles";
import Chip from "@material-ui/core/Chip";
import API_URL from "../API";
export const useStyles = makeStyles(theme => ({
    card: {
        width: 1000,
        margin: "20px",
        padding: "5px",
        borderRadius: "12px",
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

const RecallsList = ({product_id}) => {
    const classes = useStyles();
    const [recalls, setRecalls] = useState([]);

    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
        };
        const recallsURL = API_URL + '/recalls/' + product_id;
        fetch(recallsURL, requestOptions)
            .then(response => response.json())
            .then(data => {
                setRecalls(data);
            });
    });
    return (
        <ul
            style={{padding: 0}}
        >
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                {recalls.map(recall =>
                    <li key={recall.id}>
                        <Card className={classes.card} elevation={5}>
                            <CardContent>
                                <Grid
                                    container
                                    direction="column"
                                    alignItems="flex-start"
                                    justify="space-between"
                                >
                                    <Chip
                                        color="secondary"
                                        label={recall.customer.username}
                                        style={{margin: 10}}
                                    />
                                    <div>
                                        <StarRatingComponent
                                            editing={false}
                                            renderStarIcon={() => <GradeIcon/>}
                                            starCount={5}
                                            value={recall.value}
                                            emptyStarColor="#cfcfcf"
                                        />
                                    </div>
                                    <Typography variant="body1" gutterBottom >
                                        {recall.message}
                                    </Typography>
                                </Grid>
                            </CardContent>
                        </Card>
                    </li>
                )}
            </Grid>
        </ul>
    );
};

export default RecallsList;