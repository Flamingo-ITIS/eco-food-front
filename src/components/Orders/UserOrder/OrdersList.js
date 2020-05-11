import React from "react";
import Card from "@material-ui/core/Card";
import {Link} from "react-router-dom";
import {makeStyles} from "@material-ui/styles";
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import Icon from "@material-ui/core/Icon";
import PaymentIcon from '@material-ui/icons/Payment';
import Grid from "@material-ui/core/Grid";
import ConfirmPurchase from "../ConfirmPurchase";

export const useStyles = makeStyles({
    card: {
        height: "auto",
        width: 1200,
        margin: "10px",
        padding: "10px",
        transition: "0.3s",
        boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
        "&:hover": {
            boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
        },
    },
    content: {
        width: '500px'
    },
    media: {
        height: 150,
        width: 250,
        margin: "0 auto"
    },
    container: {
        display: 'flex',
        flexWrap: 'nowrap',
        margin: '10px',
        alignItems: 'flex-start',
    },
    ulNoWrap: {
        justifyContent: "center",
        margin: "15px",
    },
    field: {
        width: 200,
    },
});

const OrdersList = ({orders}) => {
    const classes = useStyles();
    return (
        <ul>
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
            >
                <li>
                    <Card className={classes.card} style={{backgroundColor: "#89eb9f"}}>
                        <Grid
                            container
                            direction="row"
                            justify="space-between"
                            alignItems="center"
                        >
                            <Grid item xs={2}>
                                <h2>id</h2>
                            </Grid>
                            <Grid item xs={2}>
                                <h2>Название товара</h2>
                            </Grid>
                            <Grid item xs={2}>
                                <h2>Статус</h2>
                            </Grid>
                            <Grid item xs={2}>
                                <h2>Сумма</h2>
                            </Grid>
                            <Grid item xs={2}>
                                <h2>Получение</h2>
                            </Grid>
                            <Grid item xs={2}>
                                <h2>Способ оплаты</h2>
                            </Grid>


                            {/*<div className={classes.field}>*/}
                            {/*    <h2>id</h2>*/}
                            {/*</div>*/}
                            {/*<div className={classes.field}>*/}
                            {/*    <h2>Название товара</h2>*/}
                            {/*</div>*/}
                            {/*<div className={classes.field}>*/}
                            {/*    <h2>Статус</h2>*/}
                            {/*</div>*/}
                            {/*<div className={classes.field}>*/}
                            {/*    <h2>Сумма</h2>*/}
                            {/*</div>*/}
                            {/*<div className={classes.field}>*/}
                            {/*    <h2>Способ оплаты</h2>*/}
                            {/*</div>*/}
                        </Grid>
                    </Card>
                </li>
                {orders.map(order =>
                    <li key={order.id}>
                        <Card className={classes.card}>
                            <Grid
                                container
                                direction="row"
                                justify="space-between"
                                alignItems="center"
                            >
                                <Grid item xs={2}>
                                    <h2>
                                        {order.id}
                                    </h2>
                                </Grid>
                                <Grid item xs={2}>
                                    <h2>{order.title}</h2>
                                </Grid>
                                <Grid item xs={2}>
                                    {order.status === "COMPLETED" ? (
                                        <div>
                                            <Icon>
                                                <AssignmentTurnedInIcon style={{color: "green"}}/>
                                            </Icon>
                                            <h2>
                                                {order.status}
                                            </h2>
                                        </div>
                                    ) : (
                                        <div>
                                            <Icon>
                                                <AutorenewIcon style={{color: "#dbc500"}}/>
                                            </Icon>
                                            <h2>
                                                {order.status}
                                            </h2>
                                            <ConfirmPurchase id={order.id}/>
                                        </div>
                                    )}
                                </Grid>
                                <Grid item xs={2}>
                                    <h2>{order.cost} РУБ</h2>
                                </Grid>
                                <Grid item xs={2}>
                                    <Icon>
                                        <PaymentIcon/>
                                    </Icon>
                                    <h2>{order.deliveryType}</h2>
                                </Grid>
                                <Grid item xs={2}>
                                    <Icon>
                                        <PaymentIcon/>
                                    </Icon>
                                    <h2>{order.paymentType}</h2>
                                </Grid>
                            </Grid>
                        </Card>
                    </li>
                )}
            </Grid>
        </ul>
    )
};

export default OrdersList;