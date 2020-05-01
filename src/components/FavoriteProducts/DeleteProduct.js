import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';
import IconButton from "@material-ui/core/IconButton";
import React, {useEffect} from "react";
import {makeStyles} from "@material-ui/styles";

export const useStyles = makeStyles(theme => ({
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
}));

const DeleteProduct = ({product_id}) => {
    const classes = useStyles();

    async function triggerDelete() {
        if (window.confirm("Are you sure you want to delete this task?")) {
            const requestOptions = {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Authorization': 'Bearer ' + localStorage.getItem("token")
                },
            };
            const url = 'http://localhost:9000/' + product_id + '/favorites';
            fetch(url, requestOptions)
                .then(response => response.json())
                .then(
                    data => {
                        // setIsLoaded(true);
                        // setProductsList(data)
                    },
                    (error) => {
                        // setIsLoaded(true);
                        // setError(error)
                    });

        }
    }
    ;

    return (
        <IconButton
            className={classes.iconButton}
            style={{color: "red"}}
            onClick={(e) => {
                e.preventDefault();
                triggerDelete();
            }}
        >
            <DeleteSweepIcon/>
        </IconButton>
    )
};

export default DeleteProduct;