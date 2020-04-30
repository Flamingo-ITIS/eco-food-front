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
import Main from "./Pages/Main";
import data from "../data"
import Login from "./Session/Login";
import SignUp from "./Session/SignUp";
import Cart from "./Products/Cart";
import Published_products from "./User/Published_products";
import Orders from "./User/Orders";
import FavouriteProducts from "./User/FavouriteProducts";
import ChatPage from "./Seller/ChatPage";
import PaymentInfo from "./Pages/PaymentInfo";
import NewProduct from "./Product/NewProduct";
import SellerProfile from "./Seller/SellerProfile";

const AppRouter = () => {
    return(
        <div style={style}>
            <Router>
                <Switch>
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
                    <Route path="/product/new">
                        <NewProduct/>
                    </Route>
                    <Route path="/product/:id">
                        <Product/>
                    </Route>
                    <Route path="/main">
                        <Main products={data.products}/>
                    </Route>
                    <Route path="/payment_info">
                        <PaymentInfo/>
                    </Route>
                    <Route path="/profile">
                        <Profile/>
                    </Route>
                    <Route path="/seller/:username">
                        <SellerProfile/>
                    </Route>
                    <Route path="/cart">
                        <Cart products={data.products}/>
                    </Route>
                    <Route path="/user/published_products">
                        <Published_products/>
                    </Route>
                    <Route path="/seller/chat">
                        <ChatPage/>
                    </Route>
                    <Route path="/user/orders">
                        <Orders orders={data.orders}/>
                    </Route>
                    <Route path="/user/favourite_products">
                        <FavouriteProducts products={data.products}/>
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
    return <Product product={data.products.find(product => (product.id === parseInt(id)))} similar_products={data.products}/>
}

export default AppRouter;