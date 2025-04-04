import React from "react";

const InputText = ({ type = "text", name, register, message, ...other }) => {
    return (
        <div>
            <label>
                <input type={type} {...register(name)} {...other} />
                {message && <span>{message}</span>}
            </label>
        </div>
    );
};

export default InputText;
