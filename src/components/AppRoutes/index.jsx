import DefaultLayout from "@/layouts/DefaultLayout";
import NoLayout from "@/layouts/NoLayout";
import routes from "@/routes";
import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute";

const AppRoutes = () => {
    return (
        <Routes>
            {routes.map((route) => {
                const Layout =
                    route.layout === undefined
                        ? DefaultLayout
                        : route.layout || NoLayout;
                const Component = route.component;
                const RouteWrapper = route.protected
                    ? ProtectedRoute
                    : Fragment;
                return (
                    <Route key={route.path} element={<Layout />}>
                        <Route
                            path={route.path}
                            element={
                                <RouteWrapper>
                                    <Component />
                                </RouteWrapper>
                            }
                        />
                    </Route>
                );
            })}
        </Routes>
    );
};

export default AppRoutes;
