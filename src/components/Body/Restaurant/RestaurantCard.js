import { IMAGE_CDN_URL } from "../../../Constants";

//Test restaurant list
// const restaurantList = {
//   name: "Good Flippin Burgers",
//   image_id: "c3ba5f77ce2ce09b1aa34d7af539bd64",
//   cusines: ["Burgers", "American", "Fast Food"],
//   rating: 4.2,
// };

// console.log(swiggy_data);

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  lastMileTravelString,
}) => {
  return (
    <div className="restaurant-card">
      <img
        alt="restaurant-image"
        src={IMAGE_CDN_URL + "/" + cloudinaryImageId}
      ></img>
      <h2> {name}</h2>
      <h3> {cuisines.join(", ")} </h3>
      <h4>Distance : '{lastMileTravelString}'</h4>
    </div>
  );
};

export default RestaurantCard;
