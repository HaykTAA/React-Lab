import {privateRoutes, publicRoutes} from "./routes.jsx";
import {useRoutes} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

const Pages = () => {
    const [currentUser, setCurrentUser] = useState(null);

    const getUser = async () => {
        try {
            const res = await axios.get("http://localhost:3000/currentUser");
            const isEmpty = !res.data.username;
            setCurrentUser(isEmpty ? null : res.data);
        } catch (e) {
            setCurrentUser(null);
        }
    }

    useEffect(() => {
        getUser();
        const interval = setInterval(getUser, 500);
        return () => clearInterval(interval);
    }, []);

    return useRoutes(currentUser ? privateRoutes : publicRoutes);
};

export default Pages;