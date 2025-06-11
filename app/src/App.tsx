import { useEffect, useState } from "react";
import "./App.css";

function App() {
  let current: number = 0;
  const end: number = 147;
  const duration: number = 3000; // 3 seconds
  const intervalTime: number = duration / end;
  const [count, setCount] = useState(current);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const countUp = setInterval(() => {
      if (current < end) {
        current++;
        setCount(current);
      } else {
        setCount(end);
        setFinished(true);
        clearInterval(countUp);
      }
    }, intervalTime);
  }, [current, intervalTime]);

  return (
    <div>
      <h1>
        {count}
        {finished && "M"}
      </h1>
    </div>
  );
}

export default App;
