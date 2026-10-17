import { useState, useEffect } from "react";
import Child from "./Child";

function Timer() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => prev + 1);
      console.log("Timer updated!");
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6 border-2 border-blue-400 rounded-xl max-w-md mx-auto text-center mt-10 bg-white">
      <h2 className="text-2xl font-bold">Timer: {time}</h2>
      <Child staticValue={100} />
    </div>
  );
}

export default Timer;