import SortIcon from '@material-ui/icons/Sort';
import Button from "@material-ui/core/Button";
import React from "react";
import {Link, Redirect, useHistory} from "react-router-dom";

const SortingByCost = () => {
    const history = useHistory();

    function sort(cost) {
        history.push("/products?sort=" + cost + ",asc");
    }

    return (
        <Button
            // onClick={sort("cost")}
        >
            <SortIcon/>
            По цене
        </Button>
    )
};

export default SortingByCost;