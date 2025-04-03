import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./Header/Navigation";
import HandleLogout from "./Header/HandleLogout";

const DefaultLayout = () => {
    return (
        <div>
            <h1>DefaultLayout</h1>
            <Navigation />
            <HandleLogout />
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default DefaultLayout;
