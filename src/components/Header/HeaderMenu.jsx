import React, { useState } from "react";
import Digital from "./SubMenus/Digital";
import Clothes from "./SubMenus/Clothes";

const HeaderMenu = ({ showMenu }) => {
    const [subMenu, setSubMenu] = useState(1);

    const render = () => {
        switch (subMenu) {
            case 1:
                return <Digital />;
            case 2:
                return <Clothes />;
            default:
                return "";
        }
    };

    return (
        <div
            style={{ display: showMenu ? "grid" : "none" }}
            className="absolute w-[700px] z-10  top-6 left-0 grid grid-cols-3 border-4 border-red-300"
        >
            <div className="col-span-1 flex flex-col bg-red-50">
                <h1 onMouseEnter={() => setSubMenu(1)} className="border p-2 text-center hover:bg-red-100">
                    Digital
                </h1>
                <h1 onMouseEnter={() => setSubMenu(2)} className="border p-2 text-center hover:bg-red-100">
                    Clothes
                </h1>
                <h1 className="border p-2 text-center hover:bg-red-100">Clothes</h1>
                <h1 className="border p-2 text-center hover:bg-red-100">Clothes</h1>
                <h1 className="border p-2 text-center hover:bg-red-100">Clothes</h1>
            </div>
            <div className="col-span-2 bg-white">{render()}</div>
        </div>
    );
};

export default HeaderMenu;
