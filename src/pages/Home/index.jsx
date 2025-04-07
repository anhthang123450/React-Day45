import Button from "@/components/Button";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import React, { useContext, useEffect, useState } from "react";
import styles from "./Home.module.scss";
import config from "@/config";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import useDebounce from "@/hooks/useBounce";
import useUser from "@/hooks/useUser";

const Home = () => {
    const [searchValue, setSearchValue] = useState("");
    const [avatar, setAvatar] = useState(null);
    const [preview, setPreview] = useState(null);
    const debounceValue = useDebounce(searchValue, 800);

    const user = useUser();

    const setField = (e) => {
        return setSearchValue(e.target.value);
    };

    useEffect(() => {
        if (debounceValue) {
            console.log(`Call API ${debounceValue}`);
        }
    }, [debounceValue]);

    useEffect(() => {
        return () => {
            URL.revokeObjectURL(preview);
        };
    }, [preview]);

    const handleFilesChange = (e) => {
        const files = e.target.files[0];
        setAvatar(files);
        setPreview(URL.createObjectURL(files));
    };

    return (
        <div>
            <h1>Home</h1>
            {user && <div>Xin chào {user.firstName}</div>}
            <form action="">
                <input type="text" value={searchValue} onChange={setField} />

                <label htmlFor="">
                    <input type="file" onChange={handleFilesChange} />
                    <img src={preview} alt="" />
                </label>
            </form>

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
