import Input from "../Components/ui/Input.jsx";
import Button from "../Components/ui/Button.jsx";
import Form from "../Components/ui/Form.jsx";
import {LOGIN_PAGE} from "./paths.jsx";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form"
import {usernameValidation, emailValidation, passwordValidation} from "../Components/tools/validation.js";
import axios from "axios";

const Register = () => {
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: {errors, isValid}
    } = useForm({mode: 'all'});

    const handleRegistration = async (data) => {
        await axios.post("http://localhost:3000/users", data);
        navigate(LOGIN_PAGE)
    }
    //
    // const topicResponse = async () => {
    //     const topicResp = await axios.get("http://localhost:3000/topicsHome");
    //     const children = {}
    //     topicResp.data.forEach((topic) => {
    //         children[topic.name] = false
    //     })
    //
    //     return children
    // }
    //
    // const newUserResponse = async () => {
    //     const newUser = {
    //         username,
    //         email,
    //         password,
    //         id,
    //         children
    //     }
    //     await axios.post("http://localhost:3000/users", newUser);
    //
    // }

    return (
        <div className="flex justify-center items-center h-full w-full">
            <Form onSubmit={handleSubmit(handleRegistration)}>
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
            </Form>
        </div>
    );
};

export default Register;