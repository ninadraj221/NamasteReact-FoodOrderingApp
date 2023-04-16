import { useEffect, useState } from "react";

const useRestaurant = (resto_id) => {
  const [restaurantData, setRestaurantData] = useState(null);

  console.log("Inside useRest hook Render");

  //Fetch Rest Data from API

  useEffect(() => {
    getRestaurantInfo(resto_id);
  }, []);

  async function getRestaurantInfo(resto_id) {
    try {
      const restaurant = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0970737&lng=73.0117476&restaurantId=${resto_id}&submitAction=ENTER`
      );

      const json = await restaurant.json();

      console.log(
        "Inside useRest useEffect hook ",
        json?.data?.cards[0]?.card?.card?.info
      );

      setRestaurantData(json?.data?.cards[0]?.card?.card?.info);
    } catch (e) {
      console.log(e);
    }
  }
  //Return Rest data

  return restaurantData;
};

export default useRestaurant;
