import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "./Login";
import About from "./About";
import Register from "./Register";
import Home from "./Home";
import React from "react";
import Option from "./Option";
import Display from "./Display";
import AddAnimalDetails from "./AddAnimalDetails";
import DeleteAnimal from "./DeleteAnimal";
import ContactUs from "./Contactus";
import Donate from "./Donate";
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Login" element={<Login />} />
        
        <Route path="/Register" element={<Register />} />
        <Route path="/Option" element={<Option />} />
        <Route path="/Display" element={<Display />} />
        <Route path="/AddAnimalDetails" element={<AddAnimalDetails />} />
        <Route path="/DeleteAnimal" element={<DeleteAnimal />} />
        <Route path="/Contactus" element={<ContactUs />} />
        <Route path="/Donate" element={<Donate />} />
      </Routes>

      
    );
  }
}

export default App;
