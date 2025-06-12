import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const startValue: number = 1;
  const endValue: number = 147;
  const duration: number = 3000;
  const [count, setCount] = useState(startValue);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const startTime = performance.now();
    let animationId: number;

    const countUp = () => {
      const elapsed = performance.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const currentValue = Math.floor(
        startValue + (endValue - startValue) * progress
      );
      setCount(currentValue);

      if (progress < 1) {
        animationId = requestAnimationFrame(countUp);
      } else {
        setCount(endValue);
        setFinished(true);
      }
    };

    animationId = requestAnimationFrame(countUp);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div>
      <div className="logo tagline">
        <img src="../public/icon.png" alt="Lemonews logo" width="30px" />
        <span>Lemonews</span>
      </div>
      <div className="container">
        <p className="tagline">Fresh News. Squeezed into bites.</p>
        <p className="countup">
          {count}
          {finished && "M"}
        </p>
        <p>subscribers</p>
        <p>
          Join {endValue}M+ subscribers getting their weekly dose of Lemonews
          dropped straight into your inbox.
        </p>
        <div className="button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#000"
            viewBox="0 0 24 24"
            strokeWidth="0.5"
            stroke="#fff"
            style={{ width: "25px" }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            />
          </svg>{" "}
          Subscribe Now
        </div>
      </div>
    </div>
  );
}

export default App;
