import { Button } from "@mui/material";
import React from "react";

const DeliveryTime = () => {
    return (
        <div className="pt-20">
            <div className="flex flex-col mx-10">
                <div className="text-center rounded-md p-2 border bg-purple-600 cursor-pointer text-white">
                    2024-4-4 at 9-12AM
                </div>
                <div className="text-center rounded-md p-2 border bg-purple-200 cursor-pointer">2024-4-4 at 9-12AM</div>
                <div className="text-center rounded-md p-2 border bg-purple-200 cursor-pointer">2024-4-4 at 9-12AM</div>
                <div className="text-center rounded-md p-2 border bg-purple-200 cursor-pointer">2024-4-4 at 9-12AM</div>
                <div className="text-center rounded-md p-2 border bg-purple-200 cursor-pointer">2024-4-4 at 9-12AM</div>
                <div className="text-center rounded-md p-2 border bg-purple-200 cursor-pointer">2024-4-4 at 9-12AM</div>
            </div>
            <div className="flex justify-center mt-5">
                <Button color="success" variant="contained" href="/order/success">Go to payment and complete</Button>
            </div>
        </div>
    );
};

export default DeliveryTime;
