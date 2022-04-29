import { useEffect, useState } from "react";
import ClockCard from "./ClockCard";
import "./flipping-clock.scss";

function FlippingClock() {
  const [second, setSecond] = useState(9);
  const [tenSecond, setTenSecond] = useState(5);

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

  return (
    <div className="holder" onClick={() => setSecond((prev) => prev + 1)}>
      <ClockCard newNumber={tenSecond} />
      <ClockCard newNumber={second} />
    </div>
  );
}

export default FlippingClock;
