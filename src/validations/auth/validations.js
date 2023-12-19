import * as yup from "yup";

const validateLogin = yup.object({
    email: yup.string().email("email is invalid").required("email is required"),
});

const validateActivationCode = yup.object({
    email: yup.string().required("please enter the code"),
});

const validateLoginByPassword = yup.object({
    email: yup.string().email("email is invalid").required("email is required"),
    password: yup.string().required("password is required"),
});

const validateResetPassword = yup.object({
    password: yup.string().required("password is required"),
    confirm: yup
        .string()
        .oneOf([yup.ref("password"), null])
        .required("confirm is required"),
});

export { validateLogin, validateActivationCode, validateLoginByPassword, validateResetPassword };
