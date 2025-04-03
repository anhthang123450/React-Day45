import Button from "@/components/Button";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "./Home.module.scss";
import config from "@/config";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
    return (
        <div>
            <Button
                icon={faFacebook}
                className={styles.btnHome}
                size="small"
                to={config.routes.introduce}
            >
                Click me 1!
            </Button>
            <Button
                icon={faSpinner}
                primary
                size="medium"
                disabled
                loading
                onClick={() => {
                    alert("Hi");
                }}
            >
                CLick me 2!
            </Button>
            <Button icon={faFacebook} secondary size="large">
                Click me 3!
            </Button>
            <Button icon={faFacebook} rounded>
                Click me 4!
            </Button>
        </div>
    );
};

export default Home;
