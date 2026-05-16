import React from 'react';
import Input from "../Components/ui/Input.jsx";
import Form from "../Components/ui/Form.jsx";
import Button from "../Components/ui/Button.jsx";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {HOME_PAGE} from "./routes.jsx";
import {emailValidation,passwordValidation} from "../Components/tools/validation.js";


const Login = () => {
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        reset,
        formState:{errors,isValid
        }} = useForm({mode: 'all'});

    const login = (data) => {
        const users = JSON.parse(localStorage.getItem("users")) || []

        const user = users.find(e => e.email === data.email && e.password === data.password)
        if (user) {
            localStorage.setItem("currentUser", JSON.stringify(user))
            reset()
            navigate(HOME_PAGE)

        }else{
            alert("wrong email or password")
        }
    }
    return (
        <div className="flex justify-center items-center h-full w-full">
            <Form
                onSubmit={handleSubmit(login)}
            >
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
                <Button>
                    Login
                </Button>
            </Form>
        </div>
    );
};

export default Login;