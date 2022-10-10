import React from "react";
import greenlogo from "./greenlogo.PNG";
import bg1 from "./bg1.jfif";
import dogpic from "./dogpic.jpeg";
import "./Contactus.css";
import "./Home.css";
//import NavBar from "./NavBar";

import logoandname8 from "./logoandname8.png";
import adoptdog from "./adoptdog.jpg";
import NavBar from "./NavBar";
function Contactus() {
  return (
    
    <div>
      <NavBar/>
      <div>
      <nav class="navbar background">

        {/* <div class="rightNav">
          <ul class="ul_list">
          <div class="secondhead">
              <a href="Login">
                <button class="btn btn-sm">Login</button>
              </a>
              <a href="Register">
                <button class="btn btn-sm">Register</button>
              </a>
              <a href="Donate">
                <button class="btn btn-sm">Donate</button>
              </a>
            </div>
          </ul>
        </div> */}
      </nav>
    </div>
      <body>
      <div class="abouth">
        <div><h3>Any Querries - Contact us</h3></div>
      {/* </div>   */}
      </div>
        <div class="flex-container">
        <div class="flex0"/>
        <div class="flex1ac"> </div>
        <div class="flex2ac">
          <div class="fpb">
            <h3>Contact Number : 040-505060</h3> 
            <h3>Email Address  : pawrescue@gmail.com</h3>
            <h3></h3>
            <h3>Location       : </h3>
            <h3>W33R+C96         </h3>
            <h3>   Bhagtanpur Abidpur Urf Ibrahim </h3>
            <h3>    Uttarakhand 249404 </h3>
            </div> 
        </div>
        <div class="flex3b"></div>
        <div class="flex0"/>
        </div>
        <div class="aboutbox">
       
        </div>
      </body>
    </div>
  );
}

export default Contactus;
