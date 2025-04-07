import InputText from "@/components/InputText";
import editSchema from "@/schema/editSchema";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import authService from "@/services/authService";
import { useNavigate, useParams } from "react-router-dom";
import userService from "@/services/userService";
import { checkPhone } from "./../../services/authService";
import config from "@/config";
import useDebounce from "@/hooks/useBounce";

let timer;
const Edit = () => {
    const { id } = useParams();
    const [preview, setPreview] = useState(null);
    const [avatar, setAvatar] = useState(null);

    const navigate = useNavigate();

    const {
        register,
        trigger,
        handleSubmit,
        setError,
        watch,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(editSchema),
    });

    const setFieldImg = (e) => {
        setPreview(URL.createObjectURL(e.target.files[0]));
    };

    useEffect(() => {
        const handle = async () => {
            const response = await authService.getCurrentUser();
            setAvatar(response.data.image);
            reset(response.data);
        };
        handle();
    }, []);

    // Check email
    const emailValue = watch("email");
    const debounceEmail = useDebounce(emailValue, 800);

    useEffect(() => {
        if (!debounceEmail) return;

        const inValidEmail = async () => {
            const isValid = await trigger("email");
            if (isValid) {
                const exists = await authService.checkEmail(debounceEmail);
                if (exists) {
                    setError("email", {
                        type: "manual",
                        message: "Email đã tồn tại",
                    });
                }
            }
        };
        if (debounceEmail) {
            inValidEmail();
        }
    }, [debounceEmail, trigger, setError]);

    // Check phone
    const phoneValue = watch("phone");
    const debouncePhone = (phoneValue, 800);

    useEffect(() => {
        if (!debouncePhone) return;
        const inValidPhone = async () => {
            const isValid = await trigger("phone");
            if (isValid) {
                const exists = await authService.checkEmail(debouncePhone, id);
                if (exists) {
                    setError("phone", {
                        type: "manual",
                        message: "Số điện thoại đã tồn tại",
                    });
                }
            }
        };
        if (debouncePhone) {
            inValidPhone();
        }
    }, [debouncePhone, trigger, setError]);

    // Check Username
    const usernameValue = watch("username");
    const debounceUsername = useDebounce(usernameValue, 800);
    useEffect(() => {
        if (!debounceUsername) return;
        const inValidPhone = async () => {
            const isValid = await trigger("phone");
            if (isValid) {
                const exists = await authService.checkUsername(
                    debounceUsername,
                    id
                );
                if (exists) {
                    setError("username", {
                        type: "manual",
                        message: "Username đã tồn tại",
                    });
                }
            }
        };
        inValidPhone();
    }, [debounceUsername, trigger, setError]);

    const onSubmit = async (data) => {
        const date = new Date(data.birthDate);
        const month = date.getMonth() + 1;
        data.birthDate =
            date.getFullYear() + "-" + month + "-" + date.getDate();

        const formData = new FormData();
        Object.entries(data).forEach(([key, value]) => {
            if (key === "image") {
                formData.append(key, value[0]);
            } else {
                formData.append(key, value);
            }
        });
        const response = await userService.update(id, formData);
        console.log(response);
        alert("Thêm dữ liệu thành công");
        navigate(config.routes.profile);
    };

    return (
        <div>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <img
                        src={preview || avatar}
                        alt=""
                        width={100}
                        height={100}
                    />
                </div>
                <div>
                    <label htmlFor="">Avatar</label>
                    <InputText
                        type="file"
                        name="image"
                        register={register}
                        accept="image/*"
                        onChange={setFieldImg}
                        message={errors.image?.message}
                    />
                </div>
                <div>
                    <label htmlFor="">First Name</label>
                    <InputText
                        type="text"
                        name="firstName"
                        register={register}
                        message={errors.firstName?.message}
                    />
                </div>
                <div>
                    <label htmlFor="">Last Name</label>
                    <InputText
                        type="text"
                        name="lastName"
                        register={register}
                        message={errors.lastName?.message}
                    />
                </div>
                <div>
                    <label htmlFor="">Tuổi</label>
                    <InputText
                        type="number"
                        name="age"
                        register={register}
                        message={errors.age?.message}
                    />
                </div>
                <div>
                    <label htmlFor="">Giới tính</label>
                    <p>Nữ</p>
                    <InputText
                        type="radio"
                        value="female"
                        name="gender"
                        register={register}
                        message={errors.gender?.message}
                    />
                    <span>Nam</span>
                    <InputText
                        type="radio"
                        value="male"
                        name="gender"
                        register={register}
                        message={errors.gender?.message}
                    />
                </div>
                <div>
                    <label htmlFor="">Email</label>
                    <InputText
                        type="email"
                        name="email"
                        register={register}
                        message={errors.email?.message}
                    />
                </div>
                <div>
                    <label htmlFor="">Số điện thoại</label>
                    <InputText
                        type="phone"
                        name="phone"
                        register={register}
                        message={errors.phone?.message}
                    />
                </div>
                <div>
                    <label htmlFor="">User Name</label>
                    <InputText
                        type="text"
                        name="username"
                        register={register}
                        message={errors.username?.message}
                    />
                </div>
                <div>
                    <label htmlFor="">Ngày sinh</label>
                    <InputText
                        type="date"
                        name="birthDate"
                        register={register}
                        message={errors.birthDate?.message}
                    />
                </div>

                <div>
                    <label htmlFor="">Trạng thái</label>
                    <InputText
                        type="text"
                        name="emailVerifiedAt"
                        register={register}
                        message={errors.emailVerifiedAt?.message}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Edit;
