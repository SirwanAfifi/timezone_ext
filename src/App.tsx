import React, { useState, useEffect } from "react";
import "./tailwind.output.css";

export const App = () => {
  const [time, setTime] = useState<number>();
  useEffect(() => {
    let timer: any;
    timer = setInterval(() => {
      setTime(new Date().getTime());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="max-w-md mx-auto flex p-6 bg-teal-400">
      <h1 className="text-2xl text-white leading-tight">
        {new Intl.DateTimeFormat("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit"
        }).format(time)}
      </h1>
    </div>
  );
};
