import SortIcon from '@material-ui/icons/Sort';
import Button from "@material-ui/core/Button";
import React from "react";
import {Link, Redirect, useHistory} from "react-router-dom";
import * as QueryString from "query-string";


const SORTING_STATES = {
    "По цене": "cost",
    "По названию": "title",
    "По рейтингу": "rating",
};


const SortingButton = ({sorting_field}) => {
    const history = useHistory();
    let sort_param = SORTING_STATES[sorting_field];

    function checkSort(sort_param) {
        const values = QueryString.parse(window.location.search);
        if (values.sort !== undefined && values.sort === sort_param + ",asc") {
            return "primary"
        } else {
            return "black"
        }
    }
    function sort() {
        const values = QueryString.parse(window.location.search);
        checkSort(sort_param) === "primary" ? (
            values["sort"] = ""
        ) : (
            values["sort"] = sort_param + ",asc"
        );
        const query = QueryString.stringify(values);
        history.push("/products?" + query);
    }
    return (
        <Button
            onClick={sort}
            color={checkSort(sort_param)}
        >
            <SortIcon/>
            {sorting_field}
        </Button>
    )
};

export default SortingButton;