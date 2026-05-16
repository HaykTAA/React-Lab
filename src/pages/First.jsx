import { useNavigate } from "react-router-dom";
import Button from "../Components/ui/Button.jsx";
import { LOGIN_PAGE, REGISTRATION_PAGE } from "./paths.jsx";
import reactLogo from "../assets/react.svg";
import {useTranslation} from "react-i18next";
const First = () => {
    const navigate = useNavigate();
    const {t} = useTranslation()
    return (
        <div className="flex justify-center items-center h-[calc(100vh-100px)] w-full gap-30 ">
                <img
                    src={reactLogo}
                    className="size-[200px]"
                    alt="react logo"
                />
            <div
                className="gap-6 flex flex-col justify-center items-center"
            >
                <h1
                    className="text-5xl font-bold"
                >
                    {t("The best way to lear React")}
                </h1>
                <div
                    className="flex flex-col justify-center items-center gap-4"
                >
                    <Button
                        onClick={() => navigate(REGISTRATION_PAGE)}
                        className="px-8 bg-cyan-400 text-white rounded-lg py-4 text-xl font-bold"
                    >
                        {t("GET STARTED")}
                    </Button>

                    <Button
                        onClick={() => navigate(LOGIN_PAGE)}
                        className="px-8 bg-transparent border-2 rounded-lg py-4 text-black text-xl font-bold"
                    >
                        {t("I ALREADY HAVE AN ACCOUNT")}
                    </Button>
                </div>
            </div>
        </div>
    );
};
export default First;