import { useParams } from "react-router-dom";
import { menuMockData } from "../utils/menuMockData";

const RestaurantMenu = () => {
    const { resID } = useParams();

    const resData = menuMockData.find((res) => res.id === resID);

    if (!resData) {
        return <h2>Menu not found for ID: {resID}</h2>;
    }

    return (
        <div className="restaurant-menu">
            <h1>{resData.name}</h1>
            <h3>Cuisines: {resData.cuisines.join(", ")}</h3>
            <ul>
                {resData.menu.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default RestaurantMenu;