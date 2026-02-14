import {LOGO_URL} from "../utils/constants";
import { useState, useEffect } from "react";
const Header=()=>{
    const [btnName, setBtnName] = useState("Log In");
    return(
        <div className="header">
        <div className="logo">
            <img src={LOGO_URL}/>
        </div>    
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
                <button onClick={()=>{
                    btnName==="Log In" ? setBtnName("Log Out") : setBtnName("Log In")
                }}>{btnName}</button>
            </ul>
        </div>
    </div>
    );
};
export default Header;