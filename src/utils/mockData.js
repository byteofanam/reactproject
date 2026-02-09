const restaurantList = [
  {
    info: {
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
  },
  {
    info: {
      id: "150602",
      name: "Raimens Cafe 79",
      cloudinaryImageId: "eohdm5sdnq6e2u46xeux",
      locality: "Teacher's Colony",
      areaName: "VIP Road",
      costForTwo: "₹250 for two",
      cuisines: ["Bakery", "Pizzas", "Snacks", "Beverages"],
      avgRating: 4.3,
    },
  },
  {
    info: {
      id: "151656",
      name: "Dev International",
      cloudinaryImageId: "enj3srsnhbltbom2ovvh",
      locality: "khajri road",
      areaName: "Mohan Nagar",
      costForTwo: "₹100 for two",
      cuisines: ["Chinese", "Fast Food", "Beverages"],
      avgRating: 4.1,
    },
  },
  {
    info: {
      id: "234875",
      name: "Adil Hotel",
      cloudinaryImageId: "gp1ityra6utvzqn6ghnv",
      locality: "Rautha Wada",
      areaName: "Chhindwara Locality",
      costForTwo: "₹150 for two",
      cuisines: ["Biryani", "Tandoor"],
      avgRating: 4.4,
    },
  },
  {
    info: {
      id: "1316369",
      name: "Epic Bite",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2026/1/25/f88bbe31-53a9-459d-8477-1c622f89cb3b_1316369.jpg",
      locality: "Chhindwara City",
      areaName: "Chhindwara City",
      costForTwo: "₹389 for two",
      cuisines: ["Biryani", "North Indian", "Mughlai"],
      avgRating: 4.1,
    },
  },
  {
    info: {
      id: "618037",
      name: "Jai Ganesh Bhojnalaya",
      cloudinaryImageId: "yzgqriufpzmloogcn2vl",
      locality: "Railway Colony",
      areaName: "Bus stand",
      costForTwo: "₹200 for two",
      cuisines: ["South Indian", "Indian", "Chinese"],
      avgRating: 4.1,
    },
  },
  {
    info: {
      id: "151518",
      name: "Bakery World",
      cloudinaryImageId: "mt2aggiscfl3yviatwng",
      locality: "Parasia Road",
      areaName: "Parasia Road",
      costForTwo: "₹250 for two",
      cuisines: ["Bakery", "Ice Cream", "Snacks", "Beverages"],
      avgRating: 4.4,
    },
  },
  {
    info: {
      id: "1271089",
      name: "City Restaurant",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/11/24/3b0f677b-9852-4177-b7c0-852d459e3024_1271089.jpg",
      locality: "Chhindwara City",
      areaName: "Chhindwara City",
      costForTwo: "₹300 for two",
      cuisines: ["North Indian"],
      avgRating: 3.3,
    },
  },
  {
    info: {
      id: "1098358",
      name: "Top N Town Ice Cream",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/19/06c32af7-790f-4e83-a0e0-a6341560f3c8_1098358.jpg",
      locality: "NARSINGHPUR ROAD",
      areaName: "Chhindwara City",
      costForTwo: "₹300 for two",
      cuisines: ["Desserts", "Ice Cream"],
      avgRating: 4.2,
    },
  },
  {
    info: {
      id: "1211364",
      name: "Pizza Wala",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/20/49ae89fa-5a3c-4177-828b-bc0469cfb6b3_1211364.jpg",
      locality: "Chhindwara City",
      areaName: "Chhindwara City",
      costForTwo: "₹219 for two",
      cuisines: ["Italian", "French", "Snacks", "Pizzas", "Fast Food", "Burgers"],
      avgRating: 4.5,
    },
  },
  {
    info: {
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
  },
  {
    info: {
      id: "151648",
      name: "Mr. Gurung Momo & Chinese Corner",
      cloudinaryImageId: "h7oibtpm7kqks8cqz3gh",
      locality: "Teacher's Colony",
      areaName: "Mohan Nagar",
      costForTwo: "₹150 for two",
      cuisines: ["Momos", "Chinese", "Fast Food"],
      avgRating: 4.4,
    },
  },
  {
    info: {
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
  },
  {
    info: {
      id: "256341",
      name: "Burger King",
      cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
      locality: "Mall Road",
      areaName: "Chhindwara City",
      costForTwo: "₹350 for two",
      cuisines: ["Burgers", "American", "Fast Food"],
      avgRating: 4.5,
    },
  },
  {
    info: {
      id: "956234",
      name: "Subway",
      cloudinaryImageId: "63178e3e64d503a479f2a2048a474552",
      locality: "Civil Lines",
      areaName: "South Civil Line",
      costForTwo: "₹350 for two",
      cuisines: ["Healthy Food", "Salads", "Snacks", "Desserts", "Beverages"],
      avgRating: 4.1,
    },
  },
  {
    info: {
      id: "478923",
      name: "Domino's Pizza",
      cloudinaryImageId: "d0450ce1a6ba19ea60cd724471ed54a8",
      locality: "Station Road",
      areaName: "Chhindwara Locality",
      costForTwo: "₹400 for two",
      cuisines: ["Pizzas", "Italian", "Fast Food"],
      avgRating: 4.4,
    },
  },
  {
    info: {
      id: "512789",
      name: "Cafe Coffee Day",
      cloudinaryImageId: "b70c7d23d197251b7b315b7e4d8173ae",
      locality: "VIP Road",
      areaName: "Chhindwara City",
      costForTwo: "₹300 for two",
      cuisines: ["Cafe", "Beverages", "Desserts", "Snacks"],
      avgRating: 3.9,
    },
  },
  {
    info: {
      id: "1209158",
      name: "Trio Cafe",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/19/e4cb0c0c-1a8d-471e-b354-c98880f73389_1209158.jpg",
      locality: "Chhindwara City",
      areaName: "Chhindwara City",
      costForTwo: "₹200 for two",
      cuisines: ["Cafe"],
      avgRating: 3.3,
    },
  },
  {
    info: {
      id: "734512",
      name: "Chinese Wok",
      cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",
      locality: "Khajri Road",
      areaName: "Mohan Nagar",
      costForTwo: "₹250 for two",
      cuisines: ["Chinese", "Asian", "Tibetan"],
      avgRating: 4.2,
    },
  },
  {
    info: {
      id: "845623",
      name: "KFC",
      cloudinaryImageId: "f01666ac73626461d7455d9c24005cd4",
      locality: "Mall Road",
      areaName: "Chhindwara City",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
      avgRating: 4.3,
    },
  },
];
export default restaurantList;