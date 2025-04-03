import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch((err) => setErrors(err))
            .finally(() => setIsLoading(false));
    }, [url]);

    return [data, isLoading, errors];
};

export default useFetch;
