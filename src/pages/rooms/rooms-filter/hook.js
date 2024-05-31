import dayjs from "dayjs";
import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";

export const useForm = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const formState = useMemo(() => Object.fromEntries(searchParams.entries()), [searchParams]);

    const changeFormState = (name, newValue, { isDate = false } = {}) => {
        if (newValue) {
            searchParams.set(name, isDate ? dayjs(newValue).format('DD/MM/YYYY') : newValue);
        } else {
            searchParams.delete(name);
        }
        
        setSearchParams(searchParams);
    };

    const clearFormState = () => {
        const keys = Object.keys(formState);
        keys.forEach((key) => searchParams.delete(key));
        setSearchParams(searchParams);
    };

    return [
        formState,
        changeFormState,
        { clearFormState }
    ];
};