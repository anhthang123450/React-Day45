import userService from "@/services/userService";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function User() {
    const [users, setUser] = useState([]);

    useEffect(() => {
        (async () => {
            const users = await userService.getAll();
            setUser(users.data);
        })();
    }, []);

    return (
        <>
            <h1>User Page</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <Link to={`/profile/${user.id}`}>
                            {`${user.firstName} ${user.lastName}`}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default User;
