import { useEffect, useState } from "react";

const useGetRestaurantList = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);

  console.log("Render useRest");

  async function getRestauranList() {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0970737&lng=73.0117476&page_type=DESKTOP_WEB_LISTING"
      );

      const json = await data.json();

      if (json?.statusCode === 0) {
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    console.log("useEffect useRest");
    getRestauranList();
  }, []);

  return allRestaurants;
};

export default useGetRestaurantList;
