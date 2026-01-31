import React from "react";
import ReactDOM from "react-dom/client";
const Header=()=>{
    return(
        <div className="header">
        <div className="logo">
            <img src="https://imgs.search.brave.com/xTREUlVhua-yApI7zfSiGOJEzIxM08tp9bvDAH6FV_g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c2h1dHRlcnN0b2Nr/LmNvbS9pbWFnZS12/ZWN0b3IvZnJlc2gt/Zm9vZC1sb2dvLWRl/c2lnbi10ZW1wbGF0/ZS0yNjBudy0xMDY5/NDQ5Mjc4LmpwZw"></img>
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
    )
}
const FoodTemplate =({name,cuisine,avgRating,imageId,cloudinaryBaseUrl})=>{
    return(
        <div className="restaurantCard">
            <img src={cloudinaryBaseUrl+imageId}/>
            <h3>{name}</h3>
            <h3>Cuisine: {cuisine}</h3>
            <h4>Rating: {avgRating}</h4>
        </div>
    )
}
const restaurantList = [
  {
    id: "1003414",
      name: "Pizza Hut",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/bd7954b5-a431-4726-b2da-4670ceba472d_1003414.JPG",
      locality: "Chhindwara",
      areaName: "Chhindwara City",
      costForTwo: "₹350 for two",
      cuisines: ["Pizzas"],
      avgRating: 4.3,
  },
  {
    id: "150602",
    name: "Raimens Cafe 79",
      cloudinaryImageId: "eohdm5sdnq6e2u46xeux",
      locality: "Teacher's Colony",
      areaName: "VIP Road",
      costForTwo: "₹250 for two",
      cuisines: ["Bakery", "Pizzas", "Snacks", "Beverages"],
      avgRating: 4.4,
  },
  {
    id: "151656",
    name: "Dev International",
      cloudinaryImageId: "enj3srsnhbltbom2ovvh",
      locality: "khajri road",
      areaName: "Mohan Nagar",
      costForTwo: "₹100 for two",
      cuisines: ["Chinese", "Fast Food", "Beverages"],
      avgRating: 4.2,
  },
  {
    id: "912754",
    name: "Urban Cafe",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/21/dbe91f1f-b400-4f4b-a78d-c6b99bdc61c5_912754.JPG",
    locality: "SOUTH CIVIL LINE",
    areaName: "Chhindwara City",
    costForTwo: "₹300 for two",
    cuisines: [
        "Snacks",
        "Pizzas",
        "Pastas",
        "Fast Food",
        "Burgers",
        "Cafe",
      ],
      avgRating: 4.1,
  },
  {
    id: "151649",
    name: "Hotel Sai Nath & Sai Restaurant",
      cloudinaryImageId: "vkhcohhmqfczycw9vsar",
      locality: "railway station",
      areaName: "Chhindwara Locality",
      costForTwo: "₹200 for two",
      cuisines: [
        "North Indian",
        "South Indian",
        "Chinese",
        "Beverages",
        "Fast Food",
        "Desserts",
      ],
      avgRating: 4.3,
  },
  {
    id: "234875",
    name: "Adil Hotel",
      cloudinaryImageId: "gp1ityra6utvzqn6ghnv",
      locality: "Rautha Wada",
      areaName: "Chhindwara Locality",
      costForTwo: "₹150 for two",
      cuisines: ["Biryani", "Tandoor"],
      avgRating: 4.4,
  },
  {
    id: "151518",
    name: "Bakery World",
      cloudinaryImageId: "mt2aggiscfl3yviatwng",
      locality: "Parasia Road",
      areaName: "Parasia Road",
      id: "151518",
      name: "Bakery World",
      cloudinaryImageId: "mt2aggiscfl3yviatwng",
      locality: "Parasia Road",
      areaName: "Parasia Road",
      costForTwo: "₹250 for two",
      cuisines: ["Bakery", "Ice Cream", "Snacks", "Beverages"],
      avgRating: 4.3,
      isOpen: true,
  },
  {
    id: "1209158",
      name: "Trio Cafe",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/19/e4cb0c0c-1a8d-471e-b354-c98880f73389_1209158.jpg",
      locality: "Chhindwara City",
      areaName: "Chhindwara City",
      costForTwo: "₹200 for two",
      cuisines: ["Cafe"],
      avgRating: 3.3,
      isOpen: true,
      
  },
];
const cloudinaryBaseUrl = "https://media-assets.swiggy.com/swiggy/image/upload/";
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
                  cloudinaryBaseUrl={cloudinaryBaseUrl}
                />
            ))}
        </div>
    )
}
const App = () => {
  return (
    <>
      <Header />
      <Body />
    </>
  );
};

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);