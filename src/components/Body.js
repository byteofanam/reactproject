import restaurantList from "../utils/mockData";
import {CLOUDINARY_BASE_URL} from "../utils/constants";
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
    return(
        <div className="container">
            {restaurantList.map((item)=>(
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
    );
};
export default Body;