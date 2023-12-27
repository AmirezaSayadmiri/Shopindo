import React from "react";
import Header from "./components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import { Container } from "@mui/material";
import Footer from "./components/Footer";
import LoginContainer from "./components/Auth/Login/LoginContainer";
import LoginByPassword from "./components/Auth/LoginByPassword/LoginByPassword";
import ForgetPassword from "./components/Auth/ForgetPassword/ForgetPassword";
import Cart from "./components/Cart/Cart";
import DeliveryTime from "./components/Cart/DeliveryTime";
import SuccessfullPayment from "./components/Cart/SuccessfullPayment";
import FailedPayment from "./components/Cart/FailedPayment";
import Profile from "./components/Account/Profile";
import Base from "./components/Account/Base";
import Orders from "./components/Account/Orders";
import Likes from "./components/Account/Likes";
import Product from "./components/Products/Product/Product";

const App = () => {
    return (
        <Container>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<LoginContainer />} />
                    <Route path="/login-by-password" element={<LoginByPassword />} />
                    <Route path="/password/forget" element={<ForgetPassword />} />

                    <Route path="/cart" element={<Cart />} />
                    <Route path="/cart/delivery" element={<DeliveryTime />} />
                    <Route path="/order/success" element={<SuccessfullPayment />} />
                    <Route path="/order/failed" element={<FailedPayment />} />

                    <Route path="/account" element={<Base />}>
                        <Route path="profile" element={<Profile />} />
                        <Route path="orders" element={<Orders />} />
                        <Route path="likes" element={<Likes />} />
                    </Route>

                    <Route path="/products/:id" element={<Product />} />
                </Routes>
            </BrowserRouter>
            <Footer />
        </Container>
    );
};

export default App;
