import { LoginDetail, RetrieveDetail, UserDetail } from "./interface";

export const defaultFormValues: UserDetail = {
    event: "",
    name: "",
    email: "",
    phone: "",
};

export const defaultLoginFormValues: LoginDetail = {
    phone: "",
    password: "",
};

export const defaultRetrieveFormValues: RetrieveDetail = {
    phone: "",
    event: "",
};
