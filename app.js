import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Heading = () => {
  return (
    <h1
      style={{
        backgroundColor: "blue",
      }}
      className="h1Class"
    >
      Hello World
    </h1>
  );
};

root.render(<Heading />);
