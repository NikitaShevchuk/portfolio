import { useEffect, useState } from "react";

const scrollWindowTemporary = () => {
    setTimeout(() => {
        window.scrollTo({
            left: 0,
            top: 200,
            behavior: "smooth",
        });
    }, 1000);
    setTimeout(() => {
        window.scrollTo({
            left: 0,
            top: 0,
            behavior: "smooth",
        });
    }, 1500);
};

export const useOnPageOpened = () => {
    useEffect(() => {
        scrollWindowTemporary();
    }, []);
    const [tipIsShown, setIsTipShown] = useState(true);
    setTimeout(() => setIsTipShown(false), 5000);
    return tipIsShown;
};
