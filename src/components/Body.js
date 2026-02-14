import restaurantList from "../utils/mockData";
import { CLOUDINARY_BASE_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const FoodTemplate = ({name,cuisine,avgRating,imageId,cloudinaryBaseUrl,}) => {
  return (
    <div className="restaurantCard">
      <img src={cloudinaryBaseUrl + imageId} alt={name} />
      <h3>{name}</h3>
      <h3>Cuisine: {cuisine.join(", ")}</h3>
      <h4>Rating: {avgRating}</h4>
    </div>
  );
};

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");

  // Simulate API call
  useEffect(() => {
    const timer = setTimeout(() => {
      setListOfRestaurants(restaurantList);
      setFilteredRestaurants(restaurantList);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const filtered = listOfRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(filtered);
  }, [searchText, listOfRestaurants]);

  const handleTopRated = () => {
    const filtered = listOfRestaurants.filter(
      (res) => res.info.avgRating > 4
    );
    setFilteredRestaurants(filtered);
  };

  return loading ? (  <Shimmer />) : (
    <div className="body">
      <div className="filter">
        <input
          type="text"
          placeholder="Search for restaurants..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <button className="filter-btn" onClick={handleTopRated}>
          Top Rated Restaurants
        </button>
      </div>

      <div className="container">
        {filteredRestaurants.map((item) => (
          <FoodTemplate
            key={item.info.id}
            name={item.info.name}
            cuisine={item.info.cuisines}
            avgRating={item.info.avgRating}
            imageId={item.info.cloudinaryImageId}
            cloudinaryBaseUrl={CLOUDINARY_BASE_URL}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
