import React from "react";
import ProductItem from "./ProductItem";

const Home = () => {
    return (
        <>
            <h1 className="mt-20 mb-8 text-center text-2xl">Most Sold Products</h1>
            <div className="grid grid-cols-3 gap-4">
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
            </div>
        </>
    );
};

export default Home;
