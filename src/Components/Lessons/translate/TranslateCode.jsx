export const TranslateCode =
`
import React from 'react';
import i18next from "i18next";
import {useTranslation} from "react-i18next";

const Translate = () => {
    const languages = [
        {id:Math.random(), language: "eng" , img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh7RZavzRPhYqeh3V3x0yOuNj9KU5cVb8z6g&s"},
        {id:Math.random(), language: "hy" , img:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_Armenia.svg/330px-Flag_of_Armenia.svg.png"},
        {id:Math.random(), language: "rus" , img:"https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/330px-Flag_of_Russia.svg.png"},
    ]
    const {t} = useTranslation()
    return (
        <div>
            <h1
                className="text-5xl font-bold"
            >
                {t("Hello")}
            </h1>
            {
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
        </div>
    );
};

export default Translate;
`