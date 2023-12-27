import React from "react";
import ProductItem from "../ProductItem";
import Pagination from "../Helpers/Pagination";

const Likes = () => {
    return (
        <>
            <div className="grid grid-cols-2 gap-4 m-5">
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
            </div>
            <br />
            <Pagination />
        </>
    );
};

export default Likes;
