import * as yup from "yup";

const editSchema = yup.object({
    firstName: yup.string().required(" Trường này không được để trống"),
    lastName: yup.string().required(" Trường này không được để trống"),
    email: yup
        .string()
        .email("Trường này không được để trống")
        .required(" Trường này không được để trống"),
    gender: yup.string().required(" Trường này không được để trống"),
    phone: yup.string().required(" Trường này không được để trống"),
    birthDate: yup.date().required(" Trường này không được để trống"),
    username: yup.string().required(" Trường này không được để trống"),
    username: yup.string().required(" Trường này không được để trống"),
    emailVerifiedAt: yup
        .mixed()
        .transform((value) =>
            value ? "Tài khoản đã được xác minh" : "Tài khoản chưa xác minh"
        ),
});

export default editSchema;
