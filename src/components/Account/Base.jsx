import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const Base = () => {
    const location = useLocation();

    return (
        <div className="grid grid-cols-3 m-10">
            <div className="col-span-1 flex flex-col">
                <Link
                    className={`text-center rounded-md border-2 p-3 hover:bg-blue-500 hover:text-white ${
                        location.pathname === "/account/profile" ? "bg-blue-900 text-white" : "bg-gray-100"
                    }`}
                    to={"/account/profile"}
                >
                    Profile
                </Link>
                <Link
                    className={`text-center rounded-md border-2 p-3 hover:bg-blue-500 hover:text-white ${
                        location.pathname === "/account/orders" ? "bg-blue-900 text-white" : "bg-gray-100"
                    }`}
                    to={"/account/orders"}
                >
                    Orders
                </Link>
                <Link
                    className={`text-center rounded-md border-2 p-3 hover:bg-blue-500 hover:text-white ${
                        location.pathname === "/account/likes" ? "bg-blue-900 text-white" : "bg-gray-100"
                    }`}
                    to={"/account/likes"}
                >
                    Liked Products
                </Link>
            </div>
            <div className="col-span-2">
                <Outlet />
            </div>
        </div>
    );
};

export default Base;
