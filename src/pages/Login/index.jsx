import config from "@/config";
import useQuery from "@/hooks/useQuery";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const query = useQuery();
    const navigate = useNavigate();
    const [formValues, setFormValues] = useState({
        email: "",
        password: "",
    });
    const [hasError, setHasError] = useState(false);

    const setFieldValue = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
        });
        setHasError(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            email: formValues.email,
            password: formValues.password,
        };
        fetch("https://api01.f8team.dev/api/auth/login", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(formData),
        })
            .then((res) => {
                if (!res.ok) throw res;
                return res.json();
            })
            .then((data) => {
                alert("Đăng nhập thành công");
                localStorage.setItem("token", data.access_token);
                navigate(query.get("continue") || config.routes.home);
            })
            .catch(() => {
                setHasError(true);
            });
    };

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
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
                    <label htmlFor="">Password</label>
                    <input
                        type="password"
                        value={formValues.password}
                        name="password"
                        onChange={setFieldValue}
                    />
                </div>
                <button>Đăng nhập</button>
            </form>
        </div>
    );
};

export default Login;
