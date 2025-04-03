import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Button.module.scss";
import clsx from "clsx";
import { href, Link } from "react-router-dom";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Button = ({
    type = "button",
    children,
    icon,
    className = "",
    primary = false,
    secondary = false,
    rounded = false,
    size = "",
    to = "",
    href = "",
    disabled = false,
    onClick,
    loading = false,
}) => {
    let Component = type;
    const passProps = {};

    if (to) {
        Component = Link;
        passProps.to = to;
    }

    if (href) {
        Component = "a";
        passProps.href = href;
    }

    const handleClick = () => {
        if (disabled || loading) return;
        onClick();
    };

    return (
        <Component
            {...passProps}
            className={clsx(styles.wrapper, className, styles[size], {
                [styles.primary]: primary,
                [styles.secondary]: secondary,
                [styles.rounded]: rounded,
                [styles.disabled]: disabled || loading,
            })}
            onClick={handleClick}
        >
            {loading ? (
                <FontAwesomeIcon icon={faSpinner} spin />
            ) : (
                <div>
                    {icon && <FontAwesomeIcon icon={icon} />}
                    <span>{children}</span>
                </div>
            )}
        </Component>
    );
};

Button.PropTypes = {
    type: PropTypes.string,
    children: PropTypes.node.isRequired,
    icon: PropTypes.object,
    className: PropTypes.string,
    primary: PropTypes.bool,
    secondary: PropTypes.bool,
    rounded: PropTypes.bool,
    loading: PropTypes.bool,
    size: PropTypes.oneOf(["small", "medium", "large"]),
    to: PropTypes.string,
    href: PropTypes.string,
    onClick: PropTypes.func,
};

export default Button;
