import React from "react";
import "./Home.css";
import "./Home1.css";
import logoandname8 from "./logoandname8.png";
import adoptdog from "./adoptdog.jpg";
import img2 from "./img2.jpg";
import Aboutus1 from "./Aboutus1";
import NavBar from "./NavBar";
function Home() {
  return (
    <div>
      <NavBar/>
      <div>
       
      </div>
      <body>
        <div class="mat">
        <div class="quote"> <h1>ADOPT DON'T BUY</h1></div> 
        </div>
        {/* <div class="flex-container">
          
        <div class="flex1">  </div>
        <div class="flex2">
          <div class="fp"></div> 
        </div>
        <div class="flex3"></div>
    </div> */}
      <Aboutus1 />
        {/* <img src="https://static.alphacoders.com/thumbs_categories/2.jpg" width="1400px" height="600px"></img> */}
        {/* <img src={adoptdog} width="1400px" height="700px" >ADOPT dog</img> */}
        {/* <img src='https://ichef.bbci.co.uk/news/640/cpsprodpb/EADF/production/_125872106_girldog2.png' width="100%" height="350px"  className='img-fluid' alt='Sample' /> */}
      </body>
    </div>
  );
}

export default Home;
