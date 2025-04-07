import authService from "@/services/authService";
import { PropTypes } from "prop-types";
import React, { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        const fetchUser = async () => {
            try {
                const data = await authService.getCurrentUser();
                setUser(data.data);
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchUser();
    }, []);

    const values = {
        user,
        isLoading,
    };

    return (
        <UserContext.Provider value={values}>{children}</UserContext.Provider>
    );
};

// export default {
//     UserContext,
//     UserProvider,
// };

UserProvider.propTypes = {
    children: PropTypes.element,
};
