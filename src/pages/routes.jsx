import First from './First.jsx';
import Home from './Home';
import Login from './Login';
import {Navigate} from "react-router-dom";
import Register from "./Register.jsx";
import {LOGIN_PAGE, REGISTRATION_PAGE} from "./paths.jsx";
import TopicModal from "./TopicModal.jsx";


export const FIRST_PAGE = "/"
export const HOME_PAGE = "/home"


export const publicRoutes = [
    {
        path : FIRST_PAGE,
        element : <First/>,
        title : "First"
    },
    {
        path : LOGIN_PAGE,
        element : <Login/>,
        title : "Login"
    },
    {
        path : REGISTRATION_PAGE,
        element : <Register/>,
        title : "Registration"
    },
    {
        path : "*",
        element: <Navigate to={FIRST_PAGE}/>
    }
]

export const privateRoutes = [

    {
        path : HOME_PAGE,
        title : "Home",
        children: [
            {
                index: true,
                element : <Home/>,
            },
            {
                path: ":topic",
                element: <TopicModal/>
            },

        ]
    },
    {
        path : "*",
        element: <Navigate to={HOME_PAGE}/>
    }
]