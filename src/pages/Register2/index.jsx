import InputText from "@/components/InputText";
import config from "@/config";
import useDebounce from "@/hooks/useBounce";
import { registerSchema } from "@/schema/registerSchema";
import authService from "@/services/authService";
import httpRequest from "@/utils/httpRequest";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

let timer;
const Register2 = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        watch,
        setError,
        trigger,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(registerSchema),
    });

    const onSubmit = async (data) => {
        const [firstName, lastName] = getName(data.fullName);

        const formData = {
            firstName,
            lastName,
            email: data.email,
            password: data.password,
            password_confirmation: data.password_confirmation,
        };

        try {
            const response = await authService.register(formData);
            alert("Đăng ký thành công");
            httpRequest.setToken(response.access_token);
            navigate(config.routes.login2);
        } catch (errors) {
            console.log(errors);
            setError("password_confirmation", {
                type: "manual",
                message: "Đăng ký thất bại",
            });
        }
    };

    const emailValue = watch("email");
    const debounceValue = useDebounce(emailValue, 800);

    useEffect(() => {
        if (!debounceValue) return;

        const inValidEmail = async () => {
            const isValid = await trigger("email");

            if (isValid) {
                const exists = await authService.checkEmail(debounceValue);
                console.log(exists);

                if (exists) {
                    setError("email", {
                        type: "manual",
                        message: "Email đã tồn tại",
                    });
                }
            }
        };
        inValidEmail();
    }, [debounceValue, trigger, setError]);

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

    return (
        <div>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="">Họ Và tên</label>
                    <InputText name="fullName" register={register} />
                </div>
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
                <div>
                    <label htmlFor="">Password Confirmation</label>
                    <InputText
                        type="password"
                        name="password_confirmation"
                        register={register}
                        message={errors.password_confirmation?.message}
                    />
                </div>
                <button>Register2</button>
            </form>
        </div>
    );
};

export default Register2;
