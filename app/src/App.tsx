import { useEffect, useState } from "react";

function App() {
  const startValue: number = 1;
  const endValue: number = 147;
  const duration: number = 3000;
  const [count, setCount] = useState(startValue);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const startTime = performance.now();
    let counter: number;

    const countUp = () => {
      const elapsed = performance.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const currentValue = Math.floor(
        startValue + (endValue - startValue) * progress
      );
      setCount(currentValue);

      if (progress < 1) {
        counter = requestAnimationFrame(countUp);
      } else {
        setFinished(true);
      }
    };

    counter = requestAnimationFrame(countUp);

    return () => {
      cancelAnimationFrame(counter);
    };
  }, []);

  return (
    <div>
      <a href="/" className="logo">
        <img src="/icon.png" alt="Lemonews logo" width="30px" />
        <span>Lemonews</span>
      </a>
      <main className="container">
        <h1 className="tagline">
          <span className="underline">Fresh News.</span> Squeezed into Bites.
        </h1>
        <div className="countup">
          <p className="number">
            {count}
            {finished && "M"}
          </p>
          <p className="text">subscribers</p>
        </div>
        <p className="description">
          Join {endValue}M+ subscribers getting their weekly dose of Lemonews
          dropped into your inbox.
        </p>
        <form className="registration">
          <input type="email" placeholder="Input your email"></input>
          <button>Subscribe </button>
        </form>
      </main>
    </div>
  );
}

export default App;
