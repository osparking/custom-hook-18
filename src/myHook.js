import { useEffect, useState } from 'react'

export function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    
    return () => {
      console.log("리턴 호출됨 - 언마운트된 것임.");      
      clearTimeout(timer);
    };
  }, [value, delay]);
  
  return debouncedValue;
}

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const changeWinSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
    changeWinSize();
    window.addEventListener("resize", changeWinSize);
    return () => window.removeEventListener("resize", changeWinSize);
  }, []);

  return windowSize;
}
