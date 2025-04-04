import * as yup from "yup";

const FILE_SIZE = 5 * 1024 * 1024;
const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];

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
    image: yup
        .mixed()
        .test("fileSize", "Ảnh quá lớn (tối đa 5MB)", (value) => {
            if (!value.length) return true;
            return value[0].size <= FILE_SIZE;
        })
        .test("fileType", "Định dạng ảnh không hợp lệ", (value) => {
            if (!value.length) return true;
            return SUPPORTED_FORMATS.includes(value[0].type);
        }),
    emailVerifiedAt: yup
        .mixed()
        .transform((value) =>
            value ? "Tài khoản đã được xác minh" : "Tài khoản chưa xác minh"
        ),
});

export default editSchema;
