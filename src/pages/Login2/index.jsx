import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { login2Shema } from "@/schema/loginSchema";
import authService from "@/services/authService";

import InputText from "@/components/InputText";
import { useNavigate } from "react-router-dom";
import config from "@/config";
import useQuery from "@/hooks/useQuery";
import httpRequest from "@/utils/httpRequest";

let timer;
const Login2 = () => {
    const query = useQuery();
    const navigate = useNavigate();
    const {
        register,
        trigger,
        handleSubmit,
        setError,
        watch,
        formState: { errors },
    } = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
        resolver: yupResolver(login2Shema),
    });

    const onSubmit = async (data) => {
        try {
            const response = await authService.login(data);
            alert("Đăng nhập thành công");
            console.log(response);
            httpRequest.setToken(response.data.access_token);
            navigate(query.get("continue") || config.routes.home);
            return response;
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="">Email</label>
                    <InputText
                        name="email"
                        register={register}
                        message={errors.email?.message}
                    />
                </div>
                <div>
                    <label htmlFor="">Password</label>
                    <InputText
                        type="password"
                        name="password"
                        register={register}
                        message={errors.password?.message}
                    />
                </div>

                <button>Login2</button>
            </form>
        </div>
    );
};

export default Login2;
