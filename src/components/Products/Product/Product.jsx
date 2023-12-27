import { Button } from "@mui/material";
import React from "react";
import Comment from "./Comment";
import Stars from "./Stars";

const Product = () => {
    return (
        <div className="m-20 border-2">
            <img src="#" alt="" className="w-full border-2 h-[300px]" />

            <div className="flex items-center justify-between">
                <span className="text-gray-400 p-4">Category: Digital</span>
                <span className="text-gray-400 p-4">Tags: #Digital #Phone</span>
            </div>

            <div className="flex justify-between items-center p-4">
                <div className="flex flex-col gap-2">
                    <h1 className="text-xl font-bold">
                        Iphone 13 pro max <span className="text-blue-600">1200$</span>
                    </h1>
                    <Stars />
                </div>

                <div className="flex gap-1">
                    <div className="w-[40px] h-[40px] bg-red-500 border-2 border-gray-400 rounded-full"></div>
                    <div className="w-[40px] h-[40px] bg-blue-500 border-2 border-gray-400 rounded-full"></div>
                    <div className="w-[40px] h-[40px] bg-white border-2 border-gray-400 rounded-full"></div>
                </div>
            </div>

            <div className="flex flex-col gap-1 p-4">
                <h1>Description:</h1>
                <p className="text-justify text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi cum distinctio nostrum nobis aliquid
                    voluptas ut eos voluptates vero nulla, adipisci deserunt. Error corporis, minus accusantium commodi
                    assumenda est facere.
                </p>
            </div>

            <div className="m-2">
                <Button className="w-full" color="success" variant="contained">
                    Add To Cart
                </Button>
                <Button className="w-full" color="success" variant="contained">
                    +
                </Button>
                <Button className="w-full" color="error" variant="contained">
                    -
                </Button>
                <Button className="w-full" color="error" variant="contained">
                    Remove
                </Button>
            </div>

            <div className="flex flex-col mt-20">
                <h1 className="text-center">Comments(27)</h1>
                <Comment />
                <Comment />
                <Comment />
                <Comment />
            </div>
        </div>
    );
};

export default Product;
