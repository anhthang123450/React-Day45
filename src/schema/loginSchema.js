import * as yup from "yup";
export const login2Shema = yup
    .object({
        email: yup
            .string()
            .email("Vui lòng nhập đúng định dạng email")
            .required("Trường này là bắt buộc"),
        password: yup
            .string()
            .min(8, "Mật khẩu có ít nhất 8 ký tự")
            .required("Trường này là bắt buộc"),
    })
    .required();
