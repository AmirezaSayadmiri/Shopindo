import { Favorite, FavoriteBorderOutlined, FavoriteOutlined, HeartBroken } from "@mui/icons-material";
import React from "react";

const ProductItem = () => {
    return (
        <div className="flex flex-col border">
            <img src="#" className="w-full border h-[200px]" alt="" />
            <div className="flex justify-between items-center p-2">
                <p>Iphone 12</p>
                <FavoriteBorderOutlined color="error" className="cursor-pointer"  />
            </div>
            <button className="bg-red-500 mt-2 hover:bg-red-400 text-white p-2 rounded-md">Add To Cart</button>
        </div>
    );
};

export default ProductItem;
