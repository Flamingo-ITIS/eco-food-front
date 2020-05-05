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
import Products from "./Products/Products";
import Product from "./Product/Product";
import Main from "./Pages/Main";
import data from "../data"
import Login from "./Session/Login";
import SignUp from "./Session/SignUp";
import Cart from "./Products/Cart";
import Published_products from "./User/Published_products";
import Orders from "./Orders/UserOrder/Orders";
import FavouriteProducts from "./FavoriteProducts/FavouriteProducts";
import ChatPage from "./Seller/ChatPage";
import PaymentInfo from "./Pages/PaymentInfo";
import NewProduct from "./Product/NewProduct";
import SellerProfile from "./Seller/SellerProfile";
import FoundProducts from "./Products/FoundProducts"
import ArticlesList from "./Articles/ArticlesList";
import Article from "./Articles/Article";
import ConfirmPurchase from "./Orders/ConfirmPurchase";
import UpdateUser from "./User/UpdateUser";

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
                        <Products
                            products={data.products}
                        />
                    </Route>
                    <Route path="/articles/:id">
                        <Article/>
                    </Route>
                    <Route path="/search/products">
                        <FoundProducts/>
                    </Route>
                    <Route path="/product/new">
                        <NewProduct/>
                    </Route>
                    <Route path="/product/:id">
                        <Product/>
                    </Route>
                    <Route exact path="/">
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
                    <Route path="/user/update">
                        <UpdateUser/>
                    </Route>
                    <Route path="/seller/chat">
                        <ChatPage/>
                    </Route>
                    <Route path="/user/orders">
                        <Orders/>
                    </Route>
                    <Route path="/user/favourite_products">
                        <FavouriteProducts products={data.products}/>
                    </Route>
                    <Route path="/buy/confirmation/:id">
                        <ConfirmPurchase/>
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