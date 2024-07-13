import { useEffect, useState } from 'react';

const scrollWindowTemporary = () => {
  let hasScrolled = false;

  setTimeout(() => {
    if (window.scrollY > 0) {
      return;
    }

    window.scrollTo({
      left: 0,
      top: 100,
      behavior: 'smooth'
    });
    hasScrolled = true;
  }, 1000);
  setTimeout(() => {
    if (!hasScrolled) {
      return;
    }
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: 'smooth'
    });
  }, 1500);
};

export const useOnPageOpened = () => {
  useEffect(() => {
    scrollWindowTemporary();
  }, []);
  const [tipIsShown, setIsTipShown] = useState(true);
  setTimeout(() => {
    setIsTipShown(false);
  }, 5000);
  return tipIsShown;
};
