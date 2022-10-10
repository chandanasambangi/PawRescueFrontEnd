import React from "react";
import greenlogo from "./greenlogo.PNG";
import bg1 from "./bg1.jfif";
import strayanimals from "./strayanimals.jpg";
// import "./Home.css";
import "./Option.css";
import logoandname8 from "./logoandname8.png";
import adoptdog from "./adoptdog.jpg";
import Button from "./components/Button";
import {Outlet,Link} from "react-router-dom";
import NavBar from "./NavBar";

function Option() {
//   const getCookie = (cname) => {
//     let name = cname + "=";
//     let decodedCookie = decodeURIComponent(document.cookie);
//     let ca = decodedCookie.split(';');
//     for (let i = 0; i < ca.length; i++) {
//         let c = ca[i];
//         while (c.charAt(0) == ' ') {
//             c = c.substring(1);
//         }
//         if (c.indexOf(name) == 0) {
//             return c.substring(name.length, c.length);
//         }
//     }
//     return "";
// }


// const signoutHandler = () => {
//     console.log("logout")
//     console.log(window.location);
//     document.cookie = "accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
//     window.location.href = '/';
// }


  return (
    
    <div>
     <NavBar/>
      <div>
      {/* <nav class="navbar background">
        
        {
                    getCookie("accessToken") &&
                    <div className='login-register'>
                       
                       <a href="Donate"><button class="btn btn-sm">Donate</button></a>
                        <Link to="/" onClick={signoutHandler} > <Button text='Logout' /> </Link>
                    </div>
                }
                {
                    !(getCookie("accessToken")) &&
                    <div className='login-register'>

                        <a href='/login'><Button text='LOGIN' /></a>
                        <a href='/register'><Button text='REGISTER' /></a>
                    </div>
                }
      </nav> */}
    </div>
      <body>
      <div >
        <div className="upperflex"></div>
        < div class ="vf">
            <div class="flex0"></div>
            <div class="flex1"></div> 
             <div class="flex2"></div> 
              <div class="flex0"></div>
        </div>
        < div class ="vf">
              
            <div class="flex0"></div>
            <div class="flex11"><a href="AddAnimalDetails"><button class="btnn btn-smn">Volunteer </button></a></div> 
             <div class="flex21"><a href="Display"><button class="btnn btn-smn">Adopter </button></a></div> 
              <div class="flex0"></div>
        </div>
        
     </div>
  {/* <div class="flex-item-left"> <a href="AddAnimalDetails"><button class="btn btn-sm">Volunteer </button></a></div>
  <div class="flex-item-right"><a href="Display"><button class="btn btn-sm">Adopter </button></a></div> */}

{/* </div> */}
 
      </body>
    </div>
  );
}

export default Option;
