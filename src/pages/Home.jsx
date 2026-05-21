import React from 'react';
import Topic from "../Components/ui/Topic.jsx";
import { useState } from "react";
import {Outlet, useNavigate} from "react-router-dom";

const Home = () => {
    const [activeModal, setActiveModal] = useState(null);

    const navigate = useNavigate();

    const  topics = [
        {id: 1, name: "props", project: "Array",},
        {id: 2, name: "useState", project: "ToDo",},
        {id: 3, name: "swiper", project: "Image slides",},
        {id: 4, name: "useEffect", project: "Pagination",},
        {id: 5, name: "validation", project: "Inputs",},
        {id: 6, name: "nestedRoutes", project: "url",},
        {id: 7, name: "translate", project: "Translate the word hello",},
        {id: 8, name: "uiComponents", project: "Component button",},
        {id: 9, name: "dataBase", project: "To Do List",},
    ]

    return (
        <div className="h-[calc(100vh-100px)] m-10 grid-cols-2 grid gap-10">
            {
                topics.map(el => {
                    return (
                       <div>
                           <Topic
                               key={el.id}
                               name={el.name}
                               project={el.project}
                               onStart={() => navigate(`/home/${el.name}`)}
                           />

                           <Outlet />
                       </div>
                    )
                })
            }
        </div>
    );
};

export default Home;