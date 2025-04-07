import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import config from "@/config";
import { UserContext } from "@/contexts/UserContext";

const ProtectedRoute = ({ children }) => {
    const location = useLocation();

    const { user, isLoading } = useContext(UserContext);

    if (isLoading) {
        return <div>...Loading</div>;
    }

    if (!user) {
        const path = encodeURIComponent(location.pathname);
        return (
            <Navigate
                to={`${config.routes.login}${path ? `?continue=${path}` : ""}`}
            />
        );
    }

    return children;
};

ProtectedRoute.propTypes = {
    children: PropTypes.element,
};

export default ProtectedRoute;
