import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMAGE_CDN_URL } from "../../../Constants";
import NoDataFound from "../NoDataFound";
import useRestaurant from "../../../Utils/useRestaurant";

const RestaurantDetails = () => {
  const { resto_id } = useParams();

  const restaurantData = useRestaurant(resto_id);

  console.log(restaurantData, "Rest Data");

  // Doing Early Return till the API is called

  if (!restaurantData) {
    return <NoDataFound />;
  }

  return (
    <div>
      <h1>Restaurant Id : {resto_id} </h1>
      <h1>Restaurant Name : {restaurantData?.name}</h1>
      <img src={IMAGE_CDN_URL + "/" + restaurantData?.cloudinaryImageId} />
    </div>
  );
};

export default RestaurantDetails;
