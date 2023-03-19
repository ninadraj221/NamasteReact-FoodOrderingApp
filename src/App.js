import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body/Body";
import Footer from "./components/Footer";

//This is how we add styles and class to a functional Component
// const Heading = () => {
//   return (
//     <h1
//       style={{
//         backgroundColor: "blue",
//       }}
//       className="h1Class"
//     >
//       Hello World
//     </h1>
//   );
// };

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
