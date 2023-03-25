import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMAGE_CDN_URL } from "../../../Constants";
import NoDataFound from "../NoDataFound";

const RestaurantDetails = () => {
  const { resto_id } = useParams();
  const [restaurantData, setRestaurantData] = useState(null);

  useEffect(() => {
    getRestaurantInfo(resto_id);
  }, []);

  async function getRestaurantInfo(resto_id) {
    try {
      const restaurant = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0970737&lng=73.0117476&restaurantId=${resto_id}&submitAction=ENTER`
      );

      const json = await restaurant.json();

      console.log(json?.data?.cards[0]?.card?.card?.info);

      setRestaurantData(json?.data?.cards[0]?.card?.card?.info);
    } catch (e) {
      console.log(e);
    }
  }

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
