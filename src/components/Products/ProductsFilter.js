import FormGroup from "@material-ui/core/FormGroup";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import React from "react";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
    filter: {
        padding: '30px',
        margin: '20px',
        backgroundColor: theme.palette.primary.light
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

const ProductsFilter = () => {
    const classes = useStyles();

    const [age, setAge] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const [price, setPrice] = React.useState([0, 10000]);

    // const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    //     setAge(event.target.value as number);
    // };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleChangePrice = (event, newValue) => {
        setPrice(newValue);
    };

    return (
        <Card className={classes.filter}>
            <h3>Фильтры</h3>
            <FormGroup>
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
                    {/*<FormControlLabel*/}
                    {/*    control={*/}
                    {/*        <Checkbox*/}
                    {/*            value="checkedB"*/}
                    {/*            color="primary"*/}
                    {/*        />*/}
                    {/*    }*/}
                    {/*    label="Дата"*/}
                    {/*/>*/}
                    <br/>
                    <InputLabel>Категория</InputLabel>
                    <Select
                        style={{width: 150}}
                        open={open}
                        onClose={handleClose}
                        onOpen={handleOpen}
                        value={age}
                        onChange={event => {
                            setAge(event.target.value);
                        }}
                    >
                        <MenuItem value="">
                            <em>Нет</em>
                        </MenuItem>
                        <MenuItem value={10}>Фрукты</MenuItem>
                        <MenuItem value={20}>Овощи</MenuItem>
                        <MenuItem value={30}>Орехи</MenuItem>
                    </Select>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Применить
                    </Button>
                </Grid>
            </FormGroup>
        </Card>
    )
};

export default ProductsFilter;