// Testing
// From same account

import { useState, useEffect } from "react";

const Test = () => {
  const [count, setCount] = useState(0);

  console.log("Render : ", count);

  useEffect(() => {
    // const timer = setInterval(() => {
    //   setCount(1);
    //   console.log("Timer", count);
    // }, 1000);
    setCount(1);
    console.log("useEffect setCount : ", count);

    // return () => {
    //   console.log("Timer cleared");
    //   clearInterval(timer);
    // };
  }, [count]);

  return (
    <>
      {count}
      <h1>From Test</h1>
    </>
  );
};

export default Test;
