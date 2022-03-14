import axios from "axios";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import "./Rentals.css";

export const Rentals = () => {

  const [houseData,setHouse] = useState([])
  useEffect(()=>{
    axios.get("http://localhost:8080/houses",)
    .then(function (response) {
      setHouse(response.data)
    })
  },[])

  return (
    <div className="rentalContainer">
      <div className="sortingButtons">
        <button className="sortById">Sort by ID</button>
        <button className="sortByRentAsc">Rent Low to high</button>
        <button className="sortByRentDesc">Rent High to low</button>
        <button className="sortByAreaAsc">Area Low to high</button>
        <button className="sortByAreaDesc">Area High to Low</button>
      </div>
      <input
        className="searchAddress"
        type="text"
        placeholder="Search Address"
      />
      <table className="table" border="1">
        <thead>
          <tr>
            <th>Sl.no.</th>
            <th>Name</th>
            <th>Owner Name</th>
            <th>Address</th>
            <th>Area Code</th>
            <th>Rent</th>
            <th>Available For</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {houseData.map((house) => {
            console.log(house.form)
            
            return (
              <tr key={uuidv4()} className="houseDetails">
                <td className="houseId">{house.form.id}</td>
                <td className="houseName">{house.form.name} </td>
                <td className="ownersName">{house.form.OwnerName}</td>
                <td className="address">{house.form.adress}</td>
                <td className="areaCode">{house.form.pincode}</td>
                <td className="rent">{house.form.rent}</td>
                <td className="preferredTenants">
                  {     }
                </td>
                <td className="houseImage">
                  <img src={house.form.image} alt="house" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
