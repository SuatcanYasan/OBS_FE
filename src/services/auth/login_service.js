import {setCookie} from "helpers/cookie_helper";

const { post } = require("helpers/api_helper");

export const loginUserService = async (user) => {
    const body = {
        email: user.email,
        password: user.password,
    };
    const response = await post("/auth/login", body);
    if(response.status){
        await setCookie("access_token", response.data.access_token);
        await setCookie("customer_type", response.data.id);
        await setCookie("role", response.data.role);
    }else{
    }

    return response;
}


