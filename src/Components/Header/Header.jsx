import { FaLess } from "react-icons/fa6";
import Button from "../ui/Button.jsx";
import {useNavigate} from "react-router-dom";
import {FIRST_PAGE, HOME_PAGE} from "../../pages/routes.jsx";
import { CgProfile } from "react-icons/cg";
import i18next from "i18next";
import {useState, useEffect} from "react";
import Modal from "../ui/Modal.jsx";
import DropDown from "../ui/DropDown.jsx";
import axios from "axios";

const Header = () => {
    const languages = [
        {id:Math.random(), language: "en" , img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh7RZavzRPhYqeh3V3x0yOuNj9KU5cVb8z6g&s"},
        {id:Math.random(), language: "am" , img:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_Armenia.svg/330px-Flag_of_Armenia.svg.png"},
        {id:Math.random(), language: "ru" , img:"https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/330px-Flag_of_Russia.svg.png"},
    ]
    const [currentUser, setCurrentUser] = useState(null)
    const [users, setUsers] = useState(null)
    const navigate = useNavigate()
    const [visible, setVisible] = useState(false);
    const [open, setOpen] = useState(false);

    const limit = () => {
        navigate(currentUser ? HOME_PAGE : FIRST_PAGE);
    };

    const getCurrentUser = async () => {
        const res = await axios.get("http://localhost:3000/currentUser");
        const isEmpty = !res.data.username;
        setCurrentUser(isEmpty ? null : res.data);
    }

    const getUsers = async () => {
        const res = await axios.get("http://localhost:3000/users");
        setUsers(res.data);
    }

    useEffect(() => {
        getCurrentUser();
        getUsers();
        const interval = setInterval(getCurrentUser, 500);
        return () => clearInterval(interval);
    }, [])

    const handleLogOut = async () => {
        await axios.put("http://localhost:3000/currentUser", { id: 1 });
        setCurrentUser(null);
        navigate(FIRST_PAGE);
        setOpen(false);
    }

    const handleDelete = async () => {
        if (!users || !currentUser) return;
        const filteredUsers = users.filter(e => e.id !== currentUser.id);
        await axios.put("http://localhost:3000/currentUser", { id: 1 });
        setCurrentUser(null);
        await Promise.all(filteredUsers.map(user =>
            axios.put(`http://localhost:3000/users/${user.id}`, user)
        ));
        setUsers(filteredUsers);
        navigate(FIRST_PAGE);
        setOpen(false);
    }

    return (
        <div className="h-15 w-full flex justify-between items-center gap-6 px-78">
            <span
                className="flex text-white"
                onClick={limit}
            >
                <h1 className="text-5xl text-cyan-400 font-bold">
                    Limit
                </h1>
                <FaLess color="black" size={38} />
            </span>
            <div>
                {currentUser && (
                    <div className="flex gap-5">
                        <div className="flex gap-2 items-center" onClick={() => setOpen(true)}>
                            <CgProfile className="size-6" />
                            <div className="text-xl capitalize">
                                {currentUser.username}
                            </div>
                        </div>
                    </div>
                )}
                {open && currentUser && (
                    <DropDown
                        className="top-15 left-212.5 w-25 h-35 border flex justify-center items-center border-black bg-white"
                        setVisible={setOpen}
                    >
                        <div className="flex flex-col gap-3">
                            <Button onClick={handleLogOut} className={"font-bold"}>
                                Logout
                            </Button>
                            <Button onClick={handleDelete} className={"font-bold"}>
                                Delete
                            </Button>
                        </div>
                    </DropDown>
                )}
            </div>
            {currentUser ?
                <Button
                    className={"bg-black text-white rounded-lg px-5 py-4 text-l font-bold"}
                    children={`+ Add Topic`}
                    onClick={() => setVisible(true)}
                />
                :
                languages.map(el => (
                    <div
                        className='border rounded-3xl cursor-pointer'
                        key={el.id}
                        onClick={() => i18next.changeLanguage(el.language)}
                    >
                        <img
                            className="h-10 w-10 rounded-full"
                            src={el.img}
                            alt={el.language}
                        />
                    </div>
                ))
            }
            {visible && (
                <Modal setVisible={setVisible} />
            )}
        </div>
    );
};

export default Header;