import { Star } from "@mui/icons-material";
import React from "react";
import Stars from "./Stars";

const Comment = () => {
    return (
        <div className="m-10 border-2 rounded-md flex flex-col p-2">
            <div className="flex items-center justify-between">
                <h1 className="font-bold">Amireza</h1>
                <Stars />
                <span className="text-gray-400">2022-15-15 10:50:18</span>
            </div>
            <p className="text-justify p-2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet vel velit accusantium optio repellat modi
                doloremque officia, nihil veniam molestias corporis molestiae obcaecati placeat maiores accusamus magnam
                debitis saepe similique.
            </p>
        </div>
    );
};

export default Comment;
