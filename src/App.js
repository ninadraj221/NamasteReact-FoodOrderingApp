import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body/Body";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import Error from "./components/Error";
import ContactUs from "./components/ContactUs";
import RestaurantDetails from "./components/Body/Restaurant/RestaurantDetails";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

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
      <Outlet />
      <Footer />
    </>
  );
};

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/restaurant/:resto_id",
        element: <RestaurantDetails />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={AppRouter} />);
