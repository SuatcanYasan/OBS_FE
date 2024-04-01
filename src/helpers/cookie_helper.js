import Cookies from "universal-cookie"

export const setCookie = (name, value) => {
    const cookies = new Cookies();
    cookies.set(name, value, { secure: true });
}
export const getCookie = (name) => {
    const cookies = new Cookies();
    return cookies.get(name);
}
export const removeCookie = (name) => {
    const cookies = new Cookies();
    cookies.remove(name);
}

