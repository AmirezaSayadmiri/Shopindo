import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { validateLogin } from "../../../validations/auth/validations";


const ForgetPassword = () => {
    return (
        <div className="my-10 border px-2 py-20 mx-20 rounded-lg bg-gray-50">
            <h1 className="text-center text-2xl mb-4">Forgot Password</h1>
            <Formik initialValues={{ email: "" }} onSubmit={(values) => {}} validationSchema={validateLogin}>
                <Form className="flex flex-col items-center">
                    <div className="flex flex-col gap-1">
                        <h1>Email:</h1>
                        <Field name="email" className="border-2 w-[300px] outline-none p-2 rounded-md" />
                        <ErrorMessage name="email" render={(msg) => <div className="text-red-500">{msg}</div>} />
                    </div>
                    <button
                        type="submit"
                        className="mt-1 bg-blue-950 text-white rounded-md w-[300px] px-2 py-3 hover:bg-blue-900"
                    >
                        Send Reset Link
                    </button>
                </Form>
            </Formik>
        </div>
    );
};

export default ForgetPassword;
