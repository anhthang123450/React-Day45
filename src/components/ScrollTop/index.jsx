import React, { use, useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollTop = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return null;
};

export default ScrollTop;
