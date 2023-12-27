import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Pagination = () => {
    return (
        <div className="flex justify-center">
            <div className="flex items-center gap-2">
                <Button>
                    <ArrowBack />
                </Button>
                <Link className="border-2 px-3 hover:bg-gray-50">1</Link>
                <Link className="border-2 px-3 hover:bg-gray-50">2</Link>
                <Link className="border-2 px-3 hover:bg-gray-50">3</Link>
                <Button>
                    <ArrowForward />
                </Button>
            </div>
        </div>
    );
};

export default Pagination;
