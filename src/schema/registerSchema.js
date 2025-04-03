import * as yup from "yup";
export const registerSchema = yup
    .object({
        fullName: yup.string().required("Trường này là bắt buộc"),
        email: yup
            .string()
            .email("Vui lòng nhập đúng định dạng email")
            .required("Trường này là bắt buộc"),
        password: yup
            .string()
            .min(8, "Mật khẩu có ít nhất 8 ký tự")
            .required("Trường này là bắt buộc"),

        password_confirmation: yup
            .string()
            .oneOf([yup.ref("password")], "Mật khẩu không khớp")
            .required("Trường này là bắt buộc"),
    })
    .required();
