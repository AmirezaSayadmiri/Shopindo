import { Delete } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";

const CartItem = () => {
    return (
        <div className="flex items-center justify-between border rounded-md p-2">
            <div className="flex items-center gap-2">
                <img src="#" alt="" className="border w-[50px] h-[50px]" />
                <h1>Product1</h1>
            </div>
            <h1 className="font-extrabold">5</h1>
            <h1>500$</h1>
            <div className="flex gap-1">
                <Button color="primary" variant="contained">+</Button>
                <Button color="error" variant="contained">-</Button>
                <Button color="error" variant="contained"><Delete /></Button>
            </div>
        </div>
    );
};

export default CartItem;
