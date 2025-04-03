import React from "react";

const InputText = ({ type = "text", name, register, message }) => {
    return (
        <div>
            <label>
                <input type={type} {...register(name)} />
                {message && <span>{message}</span>}
            </label>
        </div>
    );
};

export default InputText;
