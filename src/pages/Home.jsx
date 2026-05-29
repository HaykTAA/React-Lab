import React, { useEffect, useState } from 'react';
import Topic from "../Components/ui/Topic.jsx";
import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
    const navigate = useNavigate();
    const [topics, setTopics] = useState([]);

    const getTopics = async () => {
        try {
            const res = await axios.get("http://localhost:3000/topicsHome");
            setTopics(res.data);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getTopics();
    }, []);

    return (
        <div className="h-[calc(100vh-100px)] m-10 grid-cols-2 grid gap-10">
            {
                topics.map(el => {
                    return (
                        <div key={el.id}>
                            <Topic
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