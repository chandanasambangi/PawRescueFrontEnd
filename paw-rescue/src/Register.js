//import React , {useState }from "react";
import { useForm } from "react-hook-form";
//import axios from "axios";
import "./Home.css";
import logoandname8 from "./logoandname8.png";
// import "./Login.css";
import './RegistrationForm.css';
import NavBar from "./NavBar";

import axios from "axios";
import React, { useState, useEffect } from "react";
//import './Register.css';
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

// import axios from 'axios';
// import React, { useState,useEffect } from "react";
// import './register.css';
// import { useNavigate } from "react-router-dom";
// import Header from './header';
// import Footer from './footer';

function Register(){

  const navigate=useNavigate();
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [username,setUserName] = useState("");
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const [password,setPassword] = useState("");
    const [email,setEmail] = useState("");

    const errors = {
      pass: "invalid password",
      noerr: ""
    };

  const data={
    "username":username,
    "password":password
  };


  const Validate = (values) => {
    const error = {};
    if (!values.username) {
      error.username = "Username is required!";
    
    }
    if (!email) {
      error.email = "Email is required!";
    } else if (!regex.test(email)) {
      error.email = "This is not a valid email format!";
    }
    if (!values.password) {
      error.password = "Password is required";
    } else if (values.password.length < 4) {
      error.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      error.password = "Password cannot exceed more than 10 characters";
    }
    return error;
  };

  const onInputChangeUsername = event => {
    setUserName(event.target.value)
}

const onInputChangePassword = event => {
    setPassword(event.target.value)
}
const onInputChangeEmail= event => {
  setEmail(event.target.value)
}

const onChangePassword = event => {
  let value=event.target.value;
  if(value!=password){
     setErrorMessages({ name: "pass", message: errors.pass });
  }
  else{
    setErrorMessages({name: "noerr",message: errors.noerr})
  }
}
  const insertAction= async(e)=>{   
    e.preventDefault();
    if(!data.username || !data.password || !email || !regex.test(email)){ 
    setFormErrors(Validate(data));}
   else{
   await axios.post('http://localhost:8080/api/auth/signup',data).then(
    (response) => { 
        console.log(response);
        if (response.status==200) {
          setIsSubmitted(true);
          navigate('/Login')
            alert("Registration successful"); 
        }
    }, (error) => {
      alert("Operation failed");
    }
);
   }
    
     };

     const renderErrorMessage = (name) =>
    name!=password && (
      <div className="error">{errorMessages.message}</div>
    ) ;

     const renderForm = (<div class="register-wrapper bg_register">
     <form action="" class="form form_register">
       <h2>Register</h2>
       <div class="input-group">
        <input type="text" name="username" id="username" value={username} onChange={e => onInputChangeUsername(e)} required />
         <label for="username">User Name</label>
       </div>
       <p className='error'>{formErrors.username}</p>

       <div class="input-group">
         <input
           type="password"
           name="password"
           id="password" 
           value={password} onChange={e => onInputChangePassword(e)}
           required
         />
         <label for="password">Password</label>
       </div>
       <p className='error'>{formErrors.password}</p>
       <div class="input-group">
         <input
           type="password"
           name="retypepassword"
           id="retypepassword"
           onChange={e => onChangePassword(e)}
           required
         />
         <label for="loginPassword">Retype Password</label>
       </div>
       {renderErrorMessage("retypepassword")}

       <div class="input-group">
        <input type="text" name="email" id="email" onChange={e => onInputChangeEmail(e)} required />
         <label for="email">Email </label>
       </div>
       <p className='error'>{formErrors.email}</p>

       <input type="submit" value="Register" class="submit-btn" onClick={(e)=>insertAction(e)}  />
     </form>
   </div>);

    return(
      <div>
       <NavBar/>
      {isSubmitted ? navigate("/login") : renderForm}
      <Footer/>
      </div>
    
    );
}
    export default Register;