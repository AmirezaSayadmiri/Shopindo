import {  Person, Menu, ShoppingCart } from "@mui/icons-material";
import { Button } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import HeaderMenu from "./HeaderMenu";

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <header className="flex items-center justify-between p-5 mt-4 border-2 rounded-md">
            <div className="flex items-center gap-4 font-bold text-gray-700">
                <Link to={"/"} className="text-2xl font-bold text-red-500">
                    Shopindo
                </Link>
                <Link
                    onMouseLeave={() => setShowMenu(false)}
                    onMouseEnter={() => setShowMenu(true)}
                    to={"/"}
                    className="flex items-center relative"
                >
                    <Menu />
                    Categories
                    <HeaderMenu showMenu={showMenu} />
                </Link>
                <Link to={"/"} className="">
                    Contact Us
                </Link>
                <Link to={"/"} className="">
                    About us
                </Link>
            </div>
            <div className="flex items-center gap-2">
                <Button variant="contained" color="primary" href="/login">
                    Login | Register
                </Button>
                <Button variant="contained" color="primary">
                    <ShoppingCart />
                </Button>
                <Button variant="contained" color="primary">
                    <Person />
                </Button>
                <Button variant="contained" color="error">
                    Logout
                </Button>
            </div>
        </header>
    );
};

export default Header;
