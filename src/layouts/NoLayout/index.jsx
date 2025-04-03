import React from "react";
import { Outlet } from "react-router-dom";

const NoLayout = () => {
    return (
        <main>
            <Outlet />
        </main>
    );
};

export default NoLayout;
