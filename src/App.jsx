import { useEffect, useState } from 'react';
import './App.css';
import { useDebounce, useWindowSize } from './myHook';

function App() {
  const winSize = useWindowSize();
  const debouncedWinSize = useDebounce(winSize, 100);
  const [paraText, setParaText] = useState('윈도우 크기');

  useEffect(() => {
    setParaText('너비: ' + winSize.width + ', 높이: ' + winSize.height);
  }, [debouncedWinSize]);

  return (
    <>
      <h1>윈도우 크기</h1>
      <div className="card">
        <p>{paraText}</p>
      </div>
    </>
  )
}

export default App
