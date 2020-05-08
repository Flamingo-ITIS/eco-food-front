import Grid from "@material-ui/core/Grid";
import React from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/styles";
import pickup_icon from '../../images/icons/pickup_icon.png';
import courier_icon from '../../images/icons/courier_icon.png';
import card_icon from '../../images/icons/card_icon.png';
import cash_icon from '../../images/icons/cash_icon.png';

export const useStyles = makeStyles({
    info: {
        padding: 20,
        margin: 20,
    },
    infoContainer: {
        width: 600,
        // margin: 20,
    },
    deliveryLogo: {
        height: 70,
        margin: 20,
        spacing: 5,
    },
});

const PaymentInfo = () => {
    const classes = useStyles();
    return (
        <Grid container
              direction="column"
              justify="center"
              alignItems="flex-start"
        >
            <Paper className={classes.info} elevation={3}>
                <Grid container
                      direction="row"
                      justify="flex-start"
                      alignItems="center"
                >
                    <Typography
                        variant="h3"
                        align="center"
                        gutterBottom
                    >
                        ДОСТАВКА И ОПЛАТА
                    </Typography>
                </Grid>
                <Typography variant="subtitle1" align="left">
                    Мы доставляем ваши покупки по всей территории Казани. Вы можете выбрать один из доступных
                    способов
                    доставки — курьером или самовывоз. Стоимость будет рассчитана автоматически во время
                    оформления
                    заказа.
                </Typography>
            </Paper>
            <Grid container
                  direction="row"
                  justify="center"
                  alignItems="flex-start">
                <Grid container
                      direction="column"
                      justify="center"
                      alignItems="center"
                      className={classes.infoContainer}
                >
                    <Paper className={classes.info} elevation={3}>
                        <Grid container
                              direction="row"
                              justify="flex-start"
                              alignItems="center"
                        >
                            <img className={classes.deliveryLogo} src={courier_icon}/>
                            <Typography variant="h4" align="left" gutter>
                                Курьерская доставка
                            </Typography>
                        </Grid>
                        <Typography variant="subtitle1" align="left">
                            Наша доставка осуществляется за 1 день.
                            Сделайте заказ до 19:00, и мы доставим товар завтра.
                            При оформлении заказа выберите «доставка до двери», укажите свой адрес и время доставки.
                            Стоимость и время варьируется в зависимости от района города.
                        </Typography>
                    </Paper>
                    <Paper className={classes.info} elevation={3}>
                        <Grid container
                              direction="row"
                              justify="flex-start"
                              alignItems="center"
                        >
                            <img className={classes.deliveryLogo} src={pickup_icon}/>
                            <Typography variant="h4" align="left" gutter>
                                Самовывоз
                            </Typography>
                        </Grid>
                        <Typography variant="subtitle1" align="left">
                            Вы можете забрать свой товар прямо с у продавца. Для этого Вам необходимо договориться о
                            месте и
                            времени передачи товара.
                        </Typography>
                    </Paper>
                </Grid>
                <Grid container
                      direction="column"
                      justify="center"
                      alignItems="center"
                      className={classes.infoContainer}
                >
                    <Paper className={classes.info} elevation={3}>
                        <Typography variant="h4" align="center" gutter>
                            Способ оплаты
                        </Typography>
                        <Grid container
                              direction="row"
                              justify="flex-start"
                              alignItems="center"
                        >
                            <img className={classes.deliveryLogo} src={cash_icon}/>
                            <Typography variant="h5" align="left" gutter>
                                Наличный расчет
                            </Typography>
                        </Grid>
                        <Typography variant="subtitle1" align="left" gutter>
                            Вы оплачиваете заказ наличными при его получении курьеру или фермеру.
                        </Typography>
                        <Grid container
                              direction="row"
                              justify="flex-start"
                              alignItems="center"
                        >
                            <img className={classes.deliveryLogo} src={card_icon}/>
                            <Typography variant="h5" align="left" gutter>
                                Безналичный расчет
                            </Typography>
                        </Grid>
                        <Typography variant="subtitle1" align="left" gutter>
                            Оплачивайте заказ картой онлайн.
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Grid>
    )
};

export default PaymentInfo;