import React, { useState } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { useNavigate } from "react-router-dom";

import axios from 'axios';
import "./Login2.css";
import "./Home.css";
import logoandname8 from "./logoandname8.png";
import NavBar from "./NavBar";
function Login(){
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [username,setUserName] = useState("");
    const [password,setPassword] = useState("");

  const navigate=useNavigate();

 const loginData = {
        "username": username,
        "password": password
    }
  const errors = {
    pass: "invalid username/password"
  };

  const userLogin = (e) => {
    e.preventDefault();
    authenticateUser(loginData)
}
const setCookie= (cname, cvalue, exdays) => {

  const d = new Date();

  d.setTime(d.getTime() + (exdays*24*60*60*1000));

  let expires = "expires="+ d.toUTCString();

  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";

}
const authenticateUser = (data) => {
    console.log(data);
    axios.post("http://localhost:8080/api/auth/signin", data).then(
        (response) => {
            
            console.log(response);
            if (response.status==200) {

              setCookie("accessToken",response.data.accessToken,1);
                sessionStorage.setItem("username",response.data.username)
                console.log("navigating");
                navigate('/Option')
                setIsSubmitted(true);
                alert("Login successfull");
                
            }
        }, (error) => {
          setErrorMessages({ name: "pass", message: errors.pass });
        }
    );
}

const onInputChangeUsername = event => {
    setUserName(event.target.value)
}

const onInputChangePassword = event => {
    setPassword(event.target.value)
}


  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const renderForm = (
    <div>
        <NavBar/>
    {/* <nav class="navbar background1">
      
      <div class="rightNav">
      <div class="secondhead">
      <ul class="ul_list">
                <a href="Register">
                  <button class="btn btn-sm">Register</button>
                </a>

      </ul>         
              </div>
              </div>
    </nav> */}
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
      
  
    <div className="login-wrapper bg_login">
      <div className="loginbg"></div>
      <form class="form" >
      <h2>Login</h2>
        <div className="input-group">
          <input type="text" name="uname" value={username} onChange={e => onInputChangeUsername(e)} required />
          <label for="loginUser">User Name</label>
          {renderErrorMessage("uname")}
        </div>
        <div className="input-group">
          <input type="password" name="pass" value={password} onChange={e => onInputChangePassword(e)} required />
          <label for="loginPassword">Password</label>
          {renderErrorMessage("pass")}
        </div>
          <input type="submit" class="submit-btn" value="Login" onClick={e => userLogin(e)} />
      </form>
    </div>
    </div>
  );

 
    return(
        <div>
        {isSubmitted ? navigate("/") : renderForm}
        </div>
    );
}

export default Login;