import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";
import React from "react";
import Profile from "./components/User/Profile";
import ProductsList from "./components/Products/ProductsList";
import Product from "./components/Product/Product";
import Main from "./components/Main";
import data from "./data"
import Login from "./components/Session/Login";
import SignUp from "./components/Session/SignUp";
import Cart from "./components/Products/Cart";
import Published_products from "./components/User/Seller/Published_products";
import Orders from "./components/User/Orders";
import FavouriteProducts from "./components/User/FavouriteProducts";
import ChatPage from "./components/User/Seller/ChatPage";
import PaymentInfo from "./components/PaymentInfo";
import NewProduct from "./components/Product/NewProduct";

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
                        <GetProduct/>
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
                    <Route path="/cart">
                        <Cart products={data.products}/>
                    </Route>
                    <Route path="/seller/published_products">
                        <Published_products products={data.products}/>
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