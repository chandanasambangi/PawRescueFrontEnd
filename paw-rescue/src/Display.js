import React, { useState, useEffect } from "react";
import "./Display.css";
import AnimalService from "./AnimalService";
import DeleteAnimal from "./DeleteAnimal";
//import strayanimals from './strayanimals.jpg';
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";

function Display() {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/api/auth/animals")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log("called get items");
          console.log(result);
          setItems(result);
        },

        (error) => {
          setError(error);
        }
      );
  }, []);
  const getAnimalById = (Id) => {
    AnimalService.getAnimalById(Id)
      .then((response) => {
        setItems(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const getAllAnimals = () => {
    AnimalService.getAllAnimals()
      .then((response) => {
        setItems(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const deleteAnimal = (Id) => {
    alert(" Adoption successfull");
    //useNavigate('/KnowAdopter');
    // const navigate=useNavigate();
    // getAnimalById(Id);
    AnimalService.deleteAnimal(Id)
      .then((response) => {
        getAllAnimals();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
        <NavBar/>
      {/* <nav class="navbar background1">
        <ul class="nav-list"></ul>
        <div class="rightNav">
          <ul class="ul_list">
            <div class="secondhead">
              <a href="Donate">
                <button class="btn btn-sm">Donate</button>
              </a>
            </div>
          </ul>
        </div>
      </nav> */}
      {/* <h2 className="text-center">Pets List</h2> */}
      <body className="bdy">
        <div class="abouth">
          <div>
            <h2>Pet's List :</h2>
          </div>
        </div>
        <br></br>
        <div className="row">
          <div className="all-products-contain">
            {items &&
              items.map((item) => (
                <div key={item.id}>
                  <div className="product-container">
                    <div className="product-image-container">
                      <img
                        src={item.image}
                        width="200px"
                        height="200px"
                        className="img-fluid"
                        alt="Sample"
                      />
                    </div>
                    <div className="product-details-container">
                      <h4> Pet              : {item.name} </h4>
                      <p> Location         : {item.location}</p>
                      <p> Volunteer Ph     : {item.phoneNumber}</p>
                      {/* <h4> Complete Address : {item.address}</h4> */}
                    {/* </div> */}
                    <div className="btnName">
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteAnimal(item.id)}
                      style={{ marginLeft: "10px" }}
                    >
                      Adopt
                    </button>
                    </div>
                    </div>
                    {/* <button
                      className="btn btn-danger"
                      // <Todos todos={todos}/>
                      onClick={<DeleteAnimal id={item} />}
                      style={{ marginLeft: "10px" }}
                    >
                      Adopt
                    </button> */}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </body>
    </div>
  );
}

export default Display;
