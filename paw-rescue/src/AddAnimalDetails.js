import React , {useState }from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./Home.css";
import logoandname8 from "./logoandname8.png";
//import './Login.css';
import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom";
function AddAnimalDetails() {
  const navigate=useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);
 const { register1, handleSubmit, formState: { errors } } = useForm();
  const [register, setRegister] = useState([
    {
        name:"",
        location:"",
        phoneNumber:"",
        address:"",
        image:"",
    },
  ]);

  function changeDetails(e) {
    let value = e.target.value;

    setRegister({ ...register, [e.target.name]: value });
  }

  const insertAction = async (e) => {
    await axios.post(
      "http://localhost:8080/api/auth/animals",
      register
    ).then(
      (response) => {
          
          console.log(response);
          if (response.status==200) {
              console.log("navigating");
              setIsSubmitted(true);
              navigate('/Option')
              alert("Pet Registered")
          }
      });
  };
  return (
    <div>
        <NavBar/>
      {/* <nav class="navbar background1">
        <ul class="nav-list">
          <div class="logo">
            <img src={logoandname8} />
          </div>
          <div class="tagline">
            <h1  styel="font-family:bold">PAW RESCUE</h1>
          </div>
        </ul>
        <div class="rightNav">
          <ul class="ul_list">    
          <div class="secondhead">
               

                <a href="Display">
                  <button class="btn btn-sm">Adopt</button>
                </a>
                <a href="Donate">
                  <button class="btn btn-sm">Donate</button>
                </a>
              </div>

            <Link to="/Aboutus">About us</Link>
            <button className="button"><a href="/Aboutus"><h1>About us</h1></a></button>
            &ensp; &ensp;
            <Link to="/Login">Login</Link>
            <button className="button"><a href="/Login"><h1>Login</h1></a></button>
            &ensp; &ensp;
            <Link to="/Register">Register</Link>
            <button className="button"><a href="/Register"><h1>Register</h1></a></button>
            &ensp; &ensp;
          </ul>
        </div>
      </nav> */}
   
    <div class="register-wrapper bg_pet">
    <form action="" class="form">
      <h2   >Add pet details</h2>
      <div class="input-group">
       <input type="text" name="name" id="name" required  value={register.name} 
       onChange={(e) => changeDetails(e)} />
        <label for="name">Pet</label>
      </div>
      <div class="input-group">
       <input type="text" name="location" id="location" required  onChange={(e) => changeDetails(e)} />
        <label for="location">Location </label>
      </div>
      <div class="input-group">
       <input type="text" name="phoneNumber" id="phoneNumber" required  onChange={(e) => changeDetails(e)}  />
        <label for="phoneNumber">volunteer number </label>
      </div>
      <div class="input-group">
       <input type="text" name="address" id="address" required   onChange={(e) => changeDetails(e)}/>
        <label for="address">Complete Address </label>
      </div>
      <div class="input-group">
       <input type="text" name="image" id="image" required   onChange={(e) => changeDetails(e)}/>
        <label for="address">Images </label>
      </div>
      
     

      <input type="submit" value="Add" class="submit-btn" onClick={(e) => insertAction(e)}/>
    </form>
  </div>
  </div>
  );
}
export default AddAnimalDetails;

