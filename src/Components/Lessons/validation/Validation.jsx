import React from 'react';
import Input from "../../ui/Input.jsx";
import {emailValidation, passwordValidation, usernameValidation} from "../../tools/validation.js";
import Button from "../../ui/Button.jsx";
import {useForm} from "react-hook-form";

const Validation = () => {
    const {
        register,
        formState: {errors, isValid}
    } = useForm({mode: 'all'});

    return (
        <div className="flex flex-col justify-center  h-full w-100 gap-6 bg-blue-400 rounded-md p-5">
                <Input
                    type={'text'}
                    placeholder={'Username'}
                    label={'Username'}
                    name={'username'}
                    register={register}
                    validation={usernameValidation}
                />
                {errors.username && <span className="text-sm text-red-500">{errors.username.message}</span>}
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
                <Button>Register</Button>
        </div>
    );
};

export default Validation;