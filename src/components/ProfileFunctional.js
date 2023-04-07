import { useState, useEffect } from "react";

const ProfileFunctional = (props) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    //API call

    const timer = setInterval(() => {
      console.log("Hello Ninad");
    }, 1000);

    //clean-up function (Called upon unmounting i.e. leaving the page)

    return () => {
      clearInterval(timer);
      console.log("useEffect return");
    };
  }, []);

  return (
    <div>
      <h1>Profile Functional Component</h1>
      <h1>Count : {count}</h1>
      <button
        onClick={() => {
          setCount(1);
        }}
      >
        Increase Count
      </button>
    </div>
  );
};

export default ProfileFunctional;
