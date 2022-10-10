import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './Home';
import Login from './Login';
import  Register from './Register';
//import './RegistrationForm.css';
import Header from './Header';
import Footer from './Footer';
import { BrowserRouter } from 'react-router-dom';
import About from './About';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
<React.StrictMode>

<Header/>  

<App/>
{/* <About/> */}
<Footer/>
 
</React.StrictMode>
</BrowserRouter>  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
