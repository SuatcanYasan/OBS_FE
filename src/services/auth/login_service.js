import {setCookie} from "helpers/cookie_helper";
import {LOGIN_URL} from "helpers/url_helper";

const { post } = require("helpers/api_helper");

export const loginUserService = async (user) => {
    const body = {
        email: user.email,
        password: user.password,
    };
    const response = await post(LOGIN_URL, body);
    if(response.status){
        await setCookie("access_token", response.data.accessToken);
        await setCookie("customer_type", response.data.id);
        await setCookie("role", response.data.role);
    }else{
    }

    return response;
}


