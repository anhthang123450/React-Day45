import React from "react";
import { Outlet } from "react-router-dom";

const NoHeaderLayout = () => {
    return (
        <div>
            <Outlet />
            <footer>Footer</footer>
        </div>
    );
};

export default NoHeaderLayout;
