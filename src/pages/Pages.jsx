import {privateRoutes, publicRoutes} from "./routes.jsx";
import {useRoutes} from "react-router-dom"

const Pages = () => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    const routes = useRoutes(currentUser ? privateRoutes : publicRoutes)

    return routes;
};

export default Pages;