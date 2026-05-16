import React from "react";

const Input = ({ register,label,name,validation, ...props }) => {

    return (
        <label>
            <span className="capitalize">{label}</span>
            <input
                {...props}
                {...register(name,validation)}
                className="mt-2 w-full h-10 rounded-md px-2 border border-white"

            />
        </label>
    );
};

export default Input;