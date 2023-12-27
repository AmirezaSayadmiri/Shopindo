import { Star } from "@mui/icons-material";
import React from "react";

const Stars = () => {
    return (
        <div className="flex">
            <Star className="text-yellow-300" />
            <Star className="text-yellow-300" />
            <Star className="text-yellow-300" />
            <Star className="text-yellow-300" />
            <Star className="text-gray-300" />
        </div>
    );
};

export default Stars;
