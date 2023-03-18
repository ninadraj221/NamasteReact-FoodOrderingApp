import React from "react";
import ReactDOM from "react-dom/client";
import swiggy_data from "./json_data/swiggy_data.json";

const root = ReactDOM.createRoot(document.getElementById("root"));

const title = (
  <img
    className="logo"
    src="https://yt3.googleusercontent.com/ytc/AL5GRJWluou2i4IdCvRkeGEZGj2WY2VevwTjpif4LA2f=s900-c-k-c0x00ffffff-no-rj"
  ></img>
);

const Header = () => {
  return (
    <div className="header container">
      {title}
      <ul className="nav-list">
        <li className="list-item">
          <a href="/" tabIndex={-1}>
            Home
          </a>
        </li>
        <li className="list-item">
          <a href="/" tabIndex={-1}>
            About Us
          </a>
        </li>
        <li className="list-item">
          <a href="/" tabIndex={-1}>
            Contact Us
          </a>
        </li>
        <li className="list-item">
          <a href="/" tabIndex={-1}>
            Cart
          </a>
        </li>
      </ul>
    </div>
  );
};

const url =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill";

//Test restaurant list
// const restaurantList = {
//   name: "Good Flippin Burgers",
//   image_id: "c3ba5f77ce2ce09b1aa34d7af539bd64",
//   cusines: ["Burgers", "American", "Fast Food"],
//   rating: 4.2,
// };

// console.log(swiggy_data);

const restaurantList = swiggy_data?.data?.cards;

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  lastMileTravelString,
}) => {
  return (
    <div className="restaurant-card">
      <img alt="restaurant-image" src={url + "/" + cloudinaryImageId}></img>
      <h2> {name}</h2>
      <h3> {cuisines.join(", ")} </h3>
      <h4>Rating : '{lastMileTravelString}' stars</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body-content container">
      {restaurantList.map((restaurant, index) => {
        return (
          <RestaurantCard {...restaurant?.data} key={restaurant?.data?.id} />
        );
      })}
      {/* <RestaurantCard {...restaurantList["0"]?.data} />
      <RestaurantCard {...restaurantList["1"]?.data} />
      <RestaurantCard {...restaurantList["2"]?.data} />
      <RestaurantCard {...restaurantList["3"]?.data} />
      <RestaurantCard {...restaurantList["4"]?.data} />
      <RestaurantCard {...restaurantList["5"]?.data} />
      <RestaurantCard {...restaurantList["6"]?.data} />
      <RestaurantCard {...restaurantList["7"]?.data} />
      <RestaurantCard {...restaurantList["8"]?.data} />
      <RestaurantCard {...restaurantList["9"]?.data} /> */}
    </div>
  );
};

const Footer = () => {
  return <h1>Footer</h1>;
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

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

root.render(<AppLayout />);
