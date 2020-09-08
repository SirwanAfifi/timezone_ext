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
    <div className="max-w-md mx-auto flex p-6 bg-gray-100 mt-10 rounded-lg shadow-xl">
      <div className="ml-6 pt-1">
        <h1 className="text-2xl text-blue-700 leading-tight">
          {new Intl.DateTimeFormat("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
          }).format(time)}
        </h1>
      </div>
    </div>
  );
};
