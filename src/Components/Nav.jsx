import React from "react";
import "../index.css"
import join from "../Assets/j1.avif";
import know from "../Assets/k.jpg"
import { Link } from "react-router-dom";
function Nav (){
    return(

        <>
            <div id="Nav">
                    <h1>S-F-STORE</h1>
                    <div id="nav1i"><p id="p1">Products</p> <p id="p2">Categories</p></div>
                    <div id="nav2i"> <p id="p3">Search</p></div>
                    <img id="join" src={join} alt="join"></img>
                    <img id="know" src={know} alt="knowMore"></img>
                    <Link to="/login"><button id="loginbutton">Login</button></Link>
            </div>
        </>
    )
}
export default Nav;