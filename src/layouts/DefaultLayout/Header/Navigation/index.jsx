import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/products">Products</NavLink>
                    </li>
                    <li>
                        <NavLink to="/register2">Register2</NavLink>
                    </li>
                    <li>
                        <NavLink to="/login2">Login2</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">Contact</NavLink>
                    </li>
                    <li>
                        <NavLink to="/introduce">Introduce</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navigation;
