import InputText from "@/components/InputText";
import editSchema from "@/schema/editSchema";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const Edit = () => {
    const {
        register,
        trigger,
        handleSubmit,
        setError,
        watch,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(editSchema),
    });

    const onSubmit = () => {};
    return (
        <div>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="">First Name</label>
                    <InputText
                        type="text"
                        name="firstName"
                        register={register}
                    />
                </div>
                <div>
                    <label htmlFor="">Last Name</label>
                    <InputText
                        type="text"
                        name="lastName"
                        register={register}
                    />
                </div>
                <div>
                    <label htmlFor="">Tuổi</label>
                    <InputText type="text" name="age" register={register} />
                </div>
                <div>
                    <label htmlFor="">Giới tính</label>
                    <InputText type="text" name="gender" register={register} />
                </div>
                <div>
                    <label htmlFor="">Email</label>
                    <InputText type="email" name="email" register={register} />
                </div>
                <div>
                    <label htmlFor="">Số điện thoại</label>
                    <InputText type="phone" name="phone" register={register} />
                </div>
                <div>
                    <label htmlFor="">User Name</label>
                    <InputText
                        type="text"
                        name="username"
                        register={register}
                    />
                </div>
                <div>
                    <label htmlFor="">Ngày sinh</label>
                    <InputText
                        type="date"
                        name="birthDate"
                        register={register}
                    />
                </div>

                <div>
                    <label htmlFor="">Trạng thái</label>
                    <InputText
                        type="text"
                        name="emailVerifiedAt"
                        register={register}
                    />
                </div>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default Edit;
