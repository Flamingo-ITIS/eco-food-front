import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";
import React from "react";
import Profile from "./User/Profile";
import ProductsList from "./Products/ProductsList";
import Product from "./Product/Product";
import Main from "./Main";
import data from "./products"
import Login from "./Session/Login";
import SignUp from "./Session/SignUp";
import Cart from "./Products/Cart";
import Published_products from "./User/Seller/Published_products";

const AppRouter = () => {
    return(
        <div style={style}>
            <Router>
                <Switch>
                    <Route path="/user/profile">
                        <Profile/>
                    </Route>
                    <Route path="/login">
                        <Login/>
                    </Route>
                    <Route path="/sign_up">
                        <SignUp/>
                    </Route>
                    <Route path="/user/ordered_products">
                        <Profile/>
                    </Route>
                    <Route path="/products">
                        <ProductsList products={data.products}/>
                    </Route>
                    <Route path="/product/:id">
                        <GetProduct/>
                    </Route>
                    <Route path="/main">
                        <Main products={data.products}/>
                    </Route>
                    <Route path="/profile">
                        <Profile/>
                    </Route>
                    <Route path="/cart">
                        <Cart products={data.products}/>
                    </Route>
                    <Route path="/seller/published_products">
                        <Published_products products={data.products}/>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

const style={
    marginTop:'20px'
}

const GetProduct = () => {
    let {id} = useParams();
    console.log(id);
    return <Product product={data.products.find(product => (product.id === parseInt(id)))}/>
}

export default AppRouter;