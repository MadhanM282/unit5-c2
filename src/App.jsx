import "./App.css";
import { Rentals } from "./Components/Rentals/Rentals";
import { AddHouse } from "./Components/AddHouse/AddHouse";
import { useState } from "react";

function App() {
  const [show,setShow] =useState(false);
  return (
    <div className="App">
      

      
      <button className="toggleForm" onClick = {()=>{
        setShow(!show);
      }}>

        {show?"Rental":"ADDhouse"}
        {/* Show text Add House or Show Rentals based on state */}
      </button>
      {/* Show component based on state */}
      {show?<AddHouse/>:<Rentals/>}
      <br />
    </div>
  );
}

export default App;
