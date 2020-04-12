import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import {Link} from "react-router-dom";
import {makeStyles} from "@material-ui/styles";
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import Icon from "@material-ui/core/Icon";
import PaymentIcon from '@material-ui/icons/Payment';


export const useStyles = makeStyles({
    WrapContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    noWrapContainer: {
        display: 'flex',
        flexWrap: 'nowrap',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    card: {
        display: 'flex',
        flexWrap: 'nowrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: "auto",
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
        width: 250,
    },
});

export const Orders = ({orders}) => {
    const classes = useStyles();
    return (
        <div>
            <h1>
                Мои заказы
            </h1>
            <div className={classes.container}>
                <ul className={classes.ulNoWrap}>
                    <li>
                        <Card className={classes.card} style={{backgroundColor: "#89eb9f"}}>
                            <div>
                                <h2>
                                    id
                                </h2>
                            </div>
                            <CardContent className={classes.noWrapContainer}>
                                <div className={classes.field}>
                                    <h2>Дата заказа</h2>
                                </div>
                                <div className={classes.field}>
                                    <h2>Статус</h2>
                                </div>
                                <div className={classes.field}>
                                    <h2>Сумма</h2>
                                </div>
                                <div className={classes.field}>
                                    <h2>Способ оплаты</h2>
                                </div>
                            </CardContent>
                        </Card>
                    </li>
                    {orders.map(order =>
                        <li key={order.id}>
                            <Card className={classes.card}>
                                <div>
                                    <h2>
                                        <Link to={`/order/${order.id}`}
                                              style={{textDecoration: 'none'}}>
                                            {order.id}
                                        </Link>
                                    </h2>
                                </div>
                                <CardContent className={classes.noWrapContainer}>
                                    <div className={classes.field}>
                                        <h2>{order.date}</h2>
                                    </div>
                                    <div className={classes.field}>
                                            {order.status === "закрыт" ? (
                                                <Icon>
                                                    <AssignmentTurnedInIcon style={{color: "green"}}/>
                                                </Icon>
                                            ) : (
                                                <Icon>
                                                    <AutorenewIcon style={{color: "#dbc500"}}/>
                                                </Icon>
                                            )}
                                        <h2>
                                            {order.status}
                                        </h2>
                                    </div>
                                    <div className={classes.field}>
                                        <h2>{order.total} РУБ</h2>
                                    </div>
                                    <div className={classes.field}>
                                        <Icon>
                                            <PaymentIcon/>
                                        </Icon>
                                        <h2>{order.payment}</h2>
                                    </div>
                                </CardContent>
                            </Card>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
};
export default Orders;