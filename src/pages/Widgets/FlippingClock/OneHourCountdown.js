import { useEffect, useState } from "react";
import ClockCard from "./ClockCard";

function OneHourCountdown(props) {
  const [totalSeconds, setTotalSeconds] = useState(props.totalSeconds);
  const [second, setSecond] = useState(0);
  const [tenSecond, setTenSecond] = useState(0);
  const [minute, setMinute] = useState(0);
  const [tenMinute, setTenMinute] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (totalSeconds === 0) {
        return clearInterval(interval);
      }
      setTotalSeconds((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const tenMinute = Math.floor(totalSeconds / 600);
    const oneMinute = Math.floor(totalSeconds / 60) % 10;
    const tenSeconds = Math.floor((totalSeconds % 60) / 10);
    const second = totalSeconds % 10;
    setTenMinute(tenMinute);
    setMinute(oneMinute);
    setTenSecond(tenSeconds);
    setSecond(second);
  }, [totalSeconds]);

  return (
    <div>
      <ClockCard newNumber={tenMinute} />
      <ClockCard newNumber={minute} />
      <span>:</span>
      <ClockCard newNumber={tenSecond} />
      <ClockCard newNumber={second} />
    </div>
  );
}

export default OneHourCountdown;
