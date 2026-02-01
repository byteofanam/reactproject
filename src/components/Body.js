import restaurantList from "../utils/mockData";
import {CLOUDINARY_BASE_URL} from "../utils/constants";
import {useState} from "react";
const FoodTemplate =({name,cuisine,avgRating,imageId,cloudinaryBaseUrl })=>{
    return(
        <div className="restaurantCard">
            <img src={cloudinaryBaseUrl+imageId}/>
            <h3>{name}</h3>
            <h3>Cuisine: {cuisine.join(", ")}</h3>
            <h4>Rating: {avgRating}</h4>
        </div>
    );
};
const Body=()=>{
    //local state variable
    let [listofRestaurants, setListofRestaurants]= useState(restaurantList);
    return(
        <div className="body">
            <div className="filter">
                <button className="filter-btn" 
                onClick={()=>{
                    const filteredList = listofRestaurants.filter(
                        (item)=>item.avgRating>4
                    );
                    setListofRestaurants(filteredList);
                }}
                >Top Rated Restaurants</button>
            </div>
            <div className="container">
            {listofRestaurants.map((item)=>(
                <FoodTemplate
                  key={item.id}
                  name={item.name}
                  cuisine={item.cuisines}
                  avgRating={item.avgRating}
                  imageId={item.cloudinaryImageId}
                  cloudinaryBaseUrl={CLOUDINARY_BASE_URL}
                />
            ))}
        </div>
        </div>
    );
};
export default Body;