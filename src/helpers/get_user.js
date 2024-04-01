import jwt from "jwt-decode";
import {getCookie} from "./cookie_helper";

const getUser = () => {
    const token = getCookie("access_token");
    if (token != null) {
        return jwt(token);
    }
    return null;
}

export default getUser;