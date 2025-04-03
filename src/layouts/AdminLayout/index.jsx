import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const AdminLayout = () => {
    return (
        <div>
            <h1>AdminLayout</h1>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/products">Products</NavLink>
                    </li>
                </ul>
            </nav>
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default AdminLayout;
