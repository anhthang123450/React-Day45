import * as httpRequest from "@/utils/httpRequest";

export const getCurrentUser = async () => {
    const response = await httpRequest.get("/auth/me");
    return response;
};

export const register = async (data) => {
    const response = await httpRequest.post("auth/register", data);
    return response;
};

export const login = async (data) => {
    const response = await httpRequest.post("auth/login", data);
    return response;
};

export const checkEmail = async (email) => {
    const response = await httpRequest.get("auth/check-email", {
        params: {
            email,
        },
    });
    return response.exists;
};

export default {
    register,
    login,
    getCurrentUser,
    checkEmail,
};
