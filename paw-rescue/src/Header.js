import React from "react";
import "./Home.css";
import greenlogo from "./greenlogo.PNG";
import strayanimals from "./strayanimals.jpg";
import logoandname8 from "./logoandname8.png";
import {Outlet,Link} from "react-router-dom";
function Header() {
  const username=sessionStorage.getItem("username");
  return (
    <div>
      <nav class="navbar background">
        <ul class="nav-list">
          <div class="logo">
            <img src={logoandname8} />
          </div>
          <h1 class="title">PAW RESCUE</h1>
          {/* <div class="tagline">
            <h1  styel="font-family:bold">PAW RESCUE</h1>
          </div> */}
        </ul>
        <div className="namedisplay">
          {/* <label >Hii {username}</label> */}
          </div>
        <div class="rightNav">
         
        <a href="Home"><button class="btn btn-sm">Home</button></a>
        <a href="About"><button class="btn btn-sm">AboutUs</button></a>
        <a href="Contactus"><button class="btn btn-sm">ContactUs</button></a>
          {/* <ul class="ul_list">
            <Link to="/Aboutus">About us</Link>
            <button className="button"><a href="/Aboutus"><h1>About us</h1></a></button>
            &ensp; &ensp;
             <Link to="/Login">Login</Link> 
            <button className="button"><a href="/Login"><h1>Login</h1></a></button>
            &ensp; &ensp;
             <Link to="/Register">Register</Link> 
            <button className="button"><a href="/Register"><h1>Register</h1></a></button>
            &ensp; &ensp;
          </ul> */}
        </div>
      </nav>
    </div>
  );
}

export default Header;
