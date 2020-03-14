import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React from "react";
import Profile from "./User/Profile";
import ProductsList from "./Products/ProductsList";
import Product from "./Product/Product";

const AppRouter = () => {
    return(
        <div style={style}>
            <Router>
                <Switch>
                    <Route path="/user/profile">
                        <Profile/>
                    </Route>
                    <Route path="/login">
                        <Profile/>
                    </Route>
                    <Route path="/user/ordered_products">
                        <Profile/>
                    </Route>
                    <Route path="/products">
                        <ProductsList/>
                    </Route>
                    <Route path="/product">
                        <Product/>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

const style={
    marginTop:'20px'
}

export default AppRouter;