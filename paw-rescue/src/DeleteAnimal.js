import React, { useState, useEffect } from "react";
import "./Display.css";
import AnimalService from "./AnimalService";
import { useNavigate } from "react-router-dom"
function DeleteAnimal(props){
    return(
        
        <div className="product-details-container">
            <h1>Hii</h1>
        
      </div>
    )
 }
 export default DeleteAnimal;
// export default DeleteAnimal;
// import React, { useState, useEffect } from "react";
// import "./Display.css";
// import AnimalService from "./AnimalService";
// import { useNavigate } from "react-router-dom"

// function DeleteAnimal(props) {
//   const [items, setItems] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch("http://localhost:8080/api/auth/animals")
//       .then((res) => res.json())
//       .then(
//         (result) => {
//           console.log("called get items");
//           console.log(result);
//           setItems(result);
//         },

//         (error) => {
//           setError(error);
//         }
//       );
//   }, []);
//   const getAnimalById = (Id) => {
//     AnimalService.getAnimalById(Id)
//       .then((response) => {
//         setItems(response.data);
//         console.log(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
//   const getAllAnimals = () => {
//     AnimalService.getAllAnimals()
//       .then((response) => {
//         setItems(response.data);
//         console.log(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
//   const deleteAnimal = (Id) => {
//     alert(" Adoption successfull");
//     //useNavigate('/KnowAdopter');
//     // const navigate=useNavigate();
//     // getAnimalById(Id);
//     AnimalService.deleteAnimal(Id)
//       .then((response) => {
//         getAllAnimals();
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
//   return (
//     <div>
//       <nav class="navbar background1">

//         <div class="rightNav">
//           <ul class="ul_list">
//             <div class="secondhead">
//               <a href="Donate">
//                 <button class="btn btn-sm">Donate</button>
//               </a>
//             </div>
//           </ul>
//         </div>
//       </nav>
    
//       <body className="bdy">
//         <div class="abouth">
//           <div>
//             <h2>Pet's List :</h2>
//           </div>
//         </div>
//         <br></br>
//         <div className="row">
//           <div className="all-products-contain">
//             {items &&
//               items.map((item) => (
//                 <div key={item.id}>
//                   <div className="product-container">
//                     <div className="product-image-container">
//                       <img
//                         src={item.image}
//                         width="150px"
//                         height="150px"
//                         className="img-fluid"
//                         alt="Sample"
//                       />
//                     </div>
//                     <div className="product-details-container">
//                       <h3> {item.name} </h3>
//                       <h4> {item.location}</h4>
//                       <h4> {item.phoneNumber}</h4>
//                       <h4> {item.address}</h4>
//                     </div>

                   
//                   </div>
//                 </div>
//               ))}
//           </div>
//         </div>
//       </body>
//     </div>
//   );
// }


