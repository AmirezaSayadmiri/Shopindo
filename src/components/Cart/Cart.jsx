import React from "react";
import CartItem from "./CartItem";
import { Button } from "@mui/material";

const Cart = () => {
    return (
        <div className="my-10 p-10 border-2">
            <h1 className="text-center text-xl">Cart</h1>

            <div className="flex flex-col gap-1">
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
            </div>

            <div className="text-center flex flex-col  gap-2 mt-5">
                <h1>Total Discount: 400$</h1>
                <h1>Total Price: 400$</h1>
            </div>

            <div className="flex justify-center my-10">
                <Button href="/cart/delivery" color="success" variant="contained">
                    Check out
                </Button>
            </div>
        </div>
    );
};

export default Cart;
