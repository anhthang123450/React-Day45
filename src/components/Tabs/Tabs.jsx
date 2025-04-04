import React from "react";
import { Children } from "react";

const Tabs = ({ Children }) => {
    const tabs = Children.toArray(Children).map((child) => ({
        title: child.props.title,
    }));

    return <div></div>;
};

export default Tabs;
