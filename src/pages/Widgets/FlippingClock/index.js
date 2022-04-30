import { useEffect, useState } from "react";
import ClockCard from "./ClockCard";
import OneHourCountdown from "./OneHourCountdown";
import "./flipping-clock.scss";

function FlippingClock() {
  const [second, setSecond] = useState(9);
  const [tenSecond, setTenSecond] = useState(5);
  const [countDownSecond, setCountDownSecond] = useState(3020);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      let nextSecond = second - 1;
      if (nextSecond < 0) {
        if (tenSecond == 0) {
          clearInterval(interval);
          return;
        }
        nextSecond = 9;
        setTenSecond((prev) => prev - 1);
      }
      setSecond(() => nextSecond);
    }, 1000);
    return () => clearInterval(interval);
  });

  const handleClick = () => {
    setCountDownSecond(parseInt(inputValue));
  };

  return (
    <>
      <div className="holder" onClick={() => setSecond((prev) => prev + 1)}>
        <ClockCard newNumber={tenSecond} />
        <ClockCard newNumber={second} />
      </div>
      <br />
      <br />
      <div className="holder">
        <OneHourCountdown totalSeconds={countDownSecond} />
      </div>
      <div className="holder">
        <input
          style={{ width: "200px" }}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleClick}>Set</button>
      </div>
    </>
  );
}

export default FlippingClock;
