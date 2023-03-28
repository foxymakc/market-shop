import { useState, useEffect } from 'react';

export const useResize = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = (event) => {
      setWidth(event.target.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {
    width,
    isScreenMobile: width <= 700,
    isScreenX: width <= 767,
    isScreenS: width >= 768 && width <= 953,
    isScreenM: width >= 954 && width <= 1139,
    isScreenL: width >= 1140 && width <= 1325,
    isScreenXL: width > 1325,
  };
};