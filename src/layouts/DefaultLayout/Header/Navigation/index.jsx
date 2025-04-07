import config from "@/config";
import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <NavLink to={config.routes.home}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={config.routes.products}>Products</NavLink>
                    </li>
                    <li>
                        <NavLink to={config.routes.register2}>
                            Register2
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={config.routes.login2}>Login2</NavLink>
                    </li>
                    <li>
                        <NavLink to={config.routes.users}>User</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navigation;
