import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();
    const [formValues, setFormValues] = useState({
        fullName: "",
        email: "",
        password: "",
        passwordConfirmation: "",
    });

    const [errors, setErrors] = useState({});

    const setFieldValue = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
        });
    };

    const getName = (name) => {
        const parts = name
            .trim()
            .split(" ")
            .map((item) => item);
        if (parts.length === 1) return [parts[0], ""];
        const firstName = parts.pop();
        const lastName = parts.join(" ");
        return [firstName, lastName];
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
        setErrors({});

        if (
            !formValues.fullName ||
            !formValues.email ||
            !formValues.password ||
            !formValues.passwordConfirmation
        ) {
            return setErrors({ prinfError: "Vui lòng nhập thông tin đầy đủ" });
        }

        const [firstName, lastName] = getName(formValues.fullName);

        if (formValues.password !== formValues.passwordConfirmation) {
            return setErrors({
                prinfError: "Mật khẩu xác nhận không chính xác",
            });
        }

        const formData = {
            firstName,
            lastName,
            email: formValues.email,
            password: formValues.password,
            password_confirmation: formValues.passwordConfirmation,
        };

        fetch("https://api01.f8team.dev/api/auth/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        })
            .then((res) => {
                if (!res.ok) throw res;
                return res.json();
            })
            .then((data) => {
                if (data.error) {
                    return setErrors(data.error);
                }
                alert("Đăng ký thành công");
                localStorage.setItem("token", data.access_token);
                navigate("/");
            })
            .catch((error) => {
                const errorMessage = error.error || error.message || "";

                if (error.errors) {
                    setErrors(error.errors);
                } else if (errorMessage.includes("users_email_unique")) {
                    setErrors({ email: "Email này đã được sử dụng." });
                } else if (errorMessage.includes("users_username_unique")) {
                    setErrors({
                        fullname:
                            "Tên người dùng đã được sử dụng. Vui lòng chọn tên khác.",
                    });
                } else {
                    setErrors({
                        prinfError: "Có lỗi xảy ra. Vui lòng thử lại sau.",
                    });
                }
            });
    };

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="">Họ Và tên</label>
                    <input
                        type="text"
                        value={formValues.fullName}
                        name="fullName"
                        onChange={setFieldValue}
                    />
                </div>
                <div>
                    <label htmlFor="">Email</label>
                    <input
                        type="email"
                        value={formValues.email}
                        name="email"
                        onChange={setFieldValue}
                    />
                </div>
                <div>
                    <label htmlFor="">Mật khẩu</label>
                    <input
                        type="password"
                        value={formValues.password}
                        name="password"
                        onChange={setFieldValue}
                    />
                </div>
                <div>
                    <label htmlFor="">Nhập lại mật khẩu</label>
                    <input
                        type="password"
                        value={formValues.passwordConfirmation}
                        name="passwordConfirmation"
                        onChange={setFieldValue}
                    />
                </div>

                <button type="submit">Đăng ký</button>
                {errors.prinfError && <p>{errors.prinfError}</p>}
                {errors.fullname && <p className="error">{errors.fullname}</p>}
                {errors.email && <p className="error">{errors.email}</p>}
                {errors.password && <p className="error">{errors.password}</p>}
                {errors.confirmPassword && (
                    <p className="error">{errors.confirmPassword}</p>
                )}
            </form>
        </div>
    );
};

export default Register;
