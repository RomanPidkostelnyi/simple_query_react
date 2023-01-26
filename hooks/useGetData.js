import React, {useEffect, useState} from 'react';
import client from "../utils/client";

const useGetData = (url) => {
    const [data, setData] = useState();
    const [errorData, setErrorData] = useState();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        client(url)
            .then(r => setData(r))
            .catch(err => setErrorData(err))
            .finally(() => setIsLoading(false))
    }, []);

    return {
        isSuccess: Boolean(data),
        isError: Boolean(errorData),
        isLoading,
        data,
        errorData
    }

};

export default useGetData;
