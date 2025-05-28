import { useEffect, useState } from 'react'

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
