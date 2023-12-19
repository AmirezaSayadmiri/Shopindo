import React from "react";
import Header from "./components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import { Container } from "@mui/material";
import Footer from "./components/Footer";
import LoginContainer from "./components/Auth/Login/LoginContainer";
import LoginByPassword from "./components/Auth/LoginByPassword/LoginByPassword";
import ForgetPassword from "./components/Auth/ForgetPassword/ForgetPassword";

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
                </Routes>
            </BrowserRouter>
            <Footer />
        </Container>
    );
};

export default App;
