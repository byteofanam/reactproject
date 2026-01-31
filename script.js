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
const Body=()=>{
    return(
        <Header/>
    )
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Body/>);