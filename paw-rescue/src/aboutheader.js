import React from "react";
import "./Home.css";
import greenlogo from "./greenlogo.PNG";
import strayanimals from "./strayanimals.jpg";
import logoandname8 from "./logoandname8.png";
import {Outlet,Link} from "react-router-dom";
function aboutheader() {
  
  return (
    <div>
       {/* <nav class="navbar background">
       
        <div class="rightNav">
          <ul class="ul_list">
             <div class="secondhead">
              <a href="Login">
                <button class="btn btn-sm">Login</button>
              </a>
              <a href="Login">
                <button class="btn btn-sm">Donate</button>
              </a>
            </div>
          </ul>
        </div>
      </nav> */}
    </div>
  );
}

export default aboutheader;
