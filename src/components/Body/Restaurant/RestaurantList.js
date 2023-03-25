import RestaurantCard from "./RestaurantCard";
import swiggy_data from "../../../../json_data/swiggy_data.json";
import { useState, useEffect } from "react";
import Shimmer_RestoList from "../../Shimmer/Shimmer_RestoList";
import NoDataFound from "../NoDataFound";

import { Link } from "react-router-dom";

const restaurantList = swiggy_data?.data?.cards;

function filterData(searchedText, restoList) {
  const filteredData = restoList.filter((resto) =>
    resto?.data?.name?.toLowerCase().includes(searchedText.toLowerCase())
  );

  return filteredData;
}

const RestaurantList = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);

  async function getRestauranList() {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0970737&lng=73.0117476&page_type=DESKTOP_WEB_LISTING"
      );

      const json = await data.json();

      if (json?.statusCode === 0) {
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    //Here it is not returning only calling this function as a result we aren't getting any errors
    getRestauranList();
  }, []);

  return allRestaurants.length === 0 ? (
    <Shimmer_RestoList />
  ) : (
    <div className="body-content container">
      <div className="search-container">
        <input
          className="search-input"
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>

        <button
          onClick={() => {
            const filtereData = filterData(searchText, allRestaurants);
            setFilteredRestaurants(filtereData);
          }}
        >
          Search
        </button>
      </div>

      {/* <h1>{searchText}</h1> */}

      {filteredRestaurants.length === 0 ? (
        <NoDataFound />
      ) : (
        <div className="restaurant-list">
          {filteredRestaurants.map((restaurant, index) => {
            return (
              <Link
                to={"restaurant/" + restaurant?.data?.id}
                key={restaurant?.data?.id}
              >
                <RestaurantCard
                  {...restaurant?.data}
                  // key={restaurant?.data?.id}
                />
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default RestaurantList;
