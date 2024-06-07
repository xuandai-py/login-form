
import Cookies from "js-cookie";
export const getAuth = () => {
    const token = Cookies.get("tokens");
    return token ? true : false;
};