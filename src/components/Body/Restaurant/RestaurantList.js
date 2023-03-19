import RestaurantCard from "./RestaurantCard";
import swiggy_data from "../../../../json_data/swiggy_data.json";

const restaurantList = swiggy_data?.data?.cards;

const RestaurantList = (props) => {
  console.log(props);

  return (
    <div className="restaurant-list">
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

export default RestaurantList;
