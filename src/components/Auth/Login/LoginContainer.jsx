import React, { useState } from "react";
import GetEmail from "./GetEmail";
import ActivationCode from "./ActivationCode";

const LoginContainer = () => {
    const [authStep, setAuthStep] = useState(1);
    const [email, setEmail] = useState("");

    const render = () => {
        switch (authStep) {
            case 1:
                return <GetEmail setEmail={setEmail} setAuthStep={setAuthStep} />;
            case 2:
                return <ActivationCode />;
            default:
                return "";
        }
    };

    return <div>{render()}</div>;
};

export default LoginContainer;
