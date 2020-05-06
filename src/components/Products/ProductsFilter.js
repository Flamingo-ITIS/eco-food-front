import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import {makeStyles} from "@material-ui/styles";
import {CATEGORY_STATES} from "../Product/Product";
import FormControl from "@material-ui/core/FormControl";
import * as QueryString from "query-string";

const useStyles = makeStyles(theme => ({
    filter: {
        padding: '30px',
        margin: '20px',
        backgroundColor: theme.palette.primary.light
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 150,
    },
    submit: {
        margin: theme.spacing(3, 0, 0),
        backgroundColor: theme.palette.primary.main,
        padding: "5px",
        color: "white"
    },
}));

function valuetext(value) {
    return `${value}°C`;
}

const ProductsFilter = ({categoryName}) => {
    const classes = useStyles();
    const history = useHistory();

    const [products, setProducts] = useState('');
    const [price, setPrice] = useState([0, 10000]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);
    const [category, setCategory] = useState(categoryName);

    async function handleSubmit(event) {
        event.preventDefault();
        const productData = new FormData(event.target);
        const object = {};
        productData.forEach((key, value) => {
            object[value] = key
        });
        // console.log(object);

        const category = object["category"];
        console.log(category);
        const values = QueryString.parse(window.location.search);
        values["category"] = category;
        const query = QueryString.stringify(values);
        history.push("/products?" + query);
    }

    const handleChangePrice = (event, newValue) => {
        setPrice(newValue);
    };

    return (
        <Card className={classes.filter}>
            <h3>Фильтры</h3>
            <form noValidate
                  onSubmit={handleSubmit}>
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
                    <Typography id="range-slider" gutterBottom>
                        Цена
                    </Typography>
                    <Slider
                        value={price}
                        onChange={handleChangePrice}
                        valueLabelDisplay="auto"
                        aria-labelledby="range-slider"
                        getAriaValueText={valuetext}
                    />
                    <br/>

                    <FormControl variant="outlined" required className={classes.formControl}>
                        <InputLabel id="categoryLabel">Категория</InputLabel>
                        <Select
                            labelId="categoryLabel"
                            id="category"
                            value={category}
                            name="category"
                            label="Категория"
                            onChange={(event) => {
                                setCategory(event.target.value);
                            }}
                        >
                            <MenuItem value="">Нет</MenuItem>
                            {Object.keys(CATEGORY_STATES).map(key =>
                                <MenuItem value={key}>{CATEGORY_STATES[key]}</MenuItem>
                            )}
                        </Select>
                    </FormControl>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Применить
                    </Button>
                </Grid>
            </form>
        </Card>
    )
};

export default ProductsFilter;