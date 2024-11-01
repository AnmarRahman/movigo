import { useEffect, useState } from "react";
import CountdownSquare from "./CountdownSquare";

const Countdown = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTargetDate = () => {
      const now = new Date();
      now.setDate(now.getDate() + 45);
      return now;
    };

    const countdownInterval = setInterval(() => {
      const now = new Date();
      const targetDate = calculateTargetDate();
      const timeDifference = targetDate - now;

      if (timeDifference > 0) {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        setCountdown({ days, hours, minutes, seconds });
      } else {
        clearInterval(countdownInterval);
      }
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  return (
    <div className="flex justify-center items-center space-x-6">
      <CountdownSquare value={countdown.days} label="D" />
      <CountdownSquare value={countdown.hours} label="H" />
      <CountdownSquare value={countdown.minutes} label="M" />
      <CountdownSquare value={countdown.seconds} label="S" />
    </div>
  );
};

export default Countdown;
