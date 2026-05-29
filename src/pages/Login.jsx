import React from 'react';
import Input from "../Components/ui/Input.jsx";
import Form from "../Components/ui/Form.jsx";
import Button from "../Components/ui/Button.jsx";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {HOME_PAGE} from "./routes.jsx";
import {emailValidation, passwordValidation} from "../Components/tools/validation.js";
import axios from "axios";

const Login = () => {
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isValid }
    } = useForm({mode: 'all'});

    const login = async (data) => {
        const res = await axios.get("http://localhost:3000/users")
        const user = res.data.find(e => e.email === data.email && e.password === data.password)
        if (user) {
            await axios.put("http://localhost:3000/currentUser", { ...user, id: 1 });
            navigate(HOME_PAGE)
            reset()
        } else {
            alert("wrong email or password")
        }
    }

    return (
        <div className="flex justify-center items-center h-full w-full">
            <Form onSubmit={handleSubmit(login)}>
                <Input
                    type="email"
                    placeholder="Email"
                    label="Email"
                    name="email"
                    register={register}
                    validation={emailValidation}
                />
                {errors.email && <span className="text-sm text-red-500">{errors.email.message}</span>}
                <Input
                    type="password"
                    placeholder="Password"
                    label="Password"
                    name="password"
                    register={register}
                    validation={passwordValidation}
                />
                {errors.password && <span className="text-sm text-red-500">{errors.password.message}</span>}
                <Button>Login</Button>
            </Form>
        </div>
    );
};

export default Login;