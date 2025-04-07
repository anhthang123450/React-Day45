import authService from "@/services/authService";
import userService from "@/services/userService";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Profile = () => {
    const { id } = useParams();
    const [profile, setProfile] = useState({});
    const [currentUser, setCurrentUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            try {
                const user = await userService.getOne(id);
                setProfile(user.data);
            } catch (errors) {
                console.log(errors);
            }
        })();
    }, [id]);

    useEffect(() => {
        (async () => {
            try {
                const data = await authService.getCurrentUser();
                setCurrentUser(data.data);
            } catch (error) {
                console.error(error);
            }
        })();
    }, []);

    if (!currentUser) return <p>Loading....</p>;

    return (
        <div>
            <>
                <h1>User Profile</h1>
                <p>
                    Họ và tên: {profile.firstName} {profile.lastName}
                </p>
                <div>
                    <img src={profile.image} />
                </div>
                <p>Email: {profile.email}</p>
                <p>Giới tính: {profile.gender || "Chưa cập nhật"}</p>
                <p>Tuổi: {profile.age || "Chưa cập nhật"}</p>
                <p>Số điện thoại: {profile.phone || "Chưa cập nhật"}</p>
                <p>Ngày sinh: {profile.birthDate || "Chưa cập nhật"}</p>
                <p>
                    Trạng thái:
                    {profile.emailVerifiedAt
                        ? "Tài khoản đã được xác minh"
                        : "Tài khoản chưa xác minh"}
                </p>
                {profile.username === currentUser.username && (
                    <button
                        onClick={() => navigate(`/profile/${profile.id}/edit`)}
                    >
                        Chỉnh sửa
                    </button>
                )}
            </>
        </div>
    );
};

export default Profile;
