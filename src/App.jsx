import './App.css';
import { useWindowSize } from './myHook';

function App() {
  const winSize = useWindowSize();

  return (
    <>
      <h1>윈도우 크기</h1>
      <div className="card">
        <p>
          너비: {winSize.width}, 높이: {winSize.height}
        </p>
      </div>
    </>
  )
}

export default App
