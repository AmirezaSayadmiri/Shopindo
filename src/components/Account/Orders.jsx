import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Pagination from "../Helpers/Pagination";

const Orders = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-1">
            <h1 className="text-xl font-bold mb-10">All orders</h1>

            <div className="flex items-center justify-between border-2 w-[500px] p-2 rounded-sm bg-green-100">
                <h1 className="font-bold">#15165165652</h1>
                <h1>Proccessing...</h1>
                <Button href={"/account/orders"} variant="contained" color="warning">See Details</Button>
            </div>
            <div className="flex items-center justify-between border-2 w-[500px] p-2 rounded-sm bg-green-100">
                <h1 className="font-bold">#15165165652</h1>
                <h1>Proccessing...</h1>
                <Button href={"/account/orders"} variant="contained" color="warning">See Details</Button>
            </div>
            <div className="flex items-center justify-between border-2 w-[500px] p-2 rounded-sm bg-green-100">
                <h1 className="font-bold">#15165165652</h1>
                <h1>Proccessing...</h1>
                <Button href={"/account/orders"} variant="contained" color="warning">See Details</Button>
            </div>
            <div className="flex items-center justify-between border-2 w-[500px] p-2 rounded-sm bg-green-100">
                <h1 className="font-bold">#15165165652</h1>
                <h1>Proccessing...</h1>
                <Button href={"/account/orders"} variant="contained" color="warning">See Details</Button>
            </div>

            <br />
            <Pagination />
        </div>
    );
};

export default Orders;
