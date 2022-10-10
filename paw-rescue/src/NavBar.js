import React from "react";
import greenlogo from "./greenlogo.PNG";
import bg1 from "./bg1.jfif";
import strayanimals from "./strayanimals.jpg";
 import "./Home.css";
import "./Option.css";
import logoandname8 from "./logoandname8.png";
import adoptdog from "./adoptdog.jpg";
import Button from "./components/Button";
import {Outlet,Link} from "react-router-dom";

function NavBar() {
  const username=sessionStorage.getItem("username");
  const getCookie = (cname) => {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}


const signoutHandler = () => {
    console.log("logout")
    console.log(window.location);
    document.cookie = "accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    localStorage.clear();
    // window.history.forward(); 
    // window.onunload = function () { null };  
    window.location.href = '/';

}
// function noBack() {
//   window.history.forward();
// }
// setTimeout("preventBack()", 0);  
// window.onunload = function () { null };  


  return (
    
    <div>
      <div>
      <nav class="navbar background">
      
        {
                    getCookie("accessToken") &&
                    <div className='nav-list'>
                      <div className="namedisplay">
          <h5 > Welcome {username}</h5>
          </div>
                        {/* <a href='/Home'><Button text='Home' /></a>
                        <a href='/About'><Button text='About us' /></a> */}
                       {/* <a href="Donate"><button class="btn btn-sm">Donate</button></a> */}
                       {/* <a href='/Donate'><Button text='DONATE' /></a> */}
                       <a href="AddAnimalDetails"><button class="btn btn-sm">ADD-PET</button></a>
                       <a href="Display"><button class="btn btn-sm">ADOPT</button></a>
                       <a href="Donate"><button class="btn btn-sm">DONATE</button></a>
                        <Link to="/" onClick={signoutHandler} > <Button text='LOGOUT' /> </Link>
                    </div>
                }
                {
                    !(getCookie("accessToken")) &&
                    <div className='login-register'>
                        {/* <div className="namedisplay">
          <label >Hii {username}</label>
          </div> */}
                        <a href='/login'><Button text='LOGIN' /></a>
                        <a href='/register'><Button text='REGISTER' /></a>
                        {/* <a href="Donate"><button class="btn btn-sm">Donate</button></a> */}
                    </div>
                }
      </nav>
    </div>


    </div>
  );
}

export default NavBar;
