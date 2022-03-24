import axios from "axios";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import "./Rentals.css";

export const Rentals = () => {

  const [houseData,setHouse] = useState([])
  console.log('houseData', houseData);
  let [count,Setcount] = useState(0)
  useEffect(()=>{
    axios.get("http://localhost:8080/houses",)
    .then(function (response) {
      setHouse(response.data)
    })
  },[count])

  return (
    <div className="rentalContainer">
      <div className="sortingButtons">
        <button className="sortById" onClick={() =>{
          let sort = houseData.sort((a,b)=>{
            return a.form.id-b.form.id
          })
          setHouse(sort)
          Setcount(1)
        }}>Sort by ID</button>
        <button className="sortByRentAsc" onClick={() =>{
          let sort = houseData.sort((a,b)=>{
            return a.form.rent-b.form.rent
          })
          console.log('sort', sort);
          setHouse(sort)
          Setcount(1)
        }}>Rent Low to high</button>
        <button className="sortByRentDesc" onClick={() =>{
          let sort = houseData.sort((a,b)=>{
            return b.form.rent-a.form.rent
          })
          console.log('sort', sort);
          setHouse(sort)
          Setcount(1)
        }}>Rent High to low</button>
        <button className="sortByAreaAsc" onClick={() =>{
          let sort = houseData.sort((a,b)=>{
            return a.form.adress-b.form.adress
          })
          // console.log('sort', sort);
          setHouse(sort)
          Setcount(1)
        }}>Area Low to high</button>
        <button className="sortByAreaDesc" onClick={() =>{
          let sort = houseData.sort((a,b)=>{
            return b.form.adress-a.form.adress
          })
          // console.log('sort', sort);
          setHouse(sort)
          Setcount(1)
        }}>Area High to Low</button>
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
          {houseData.map((house,i) => {
            // console.log(house.form)
            
            return (
              <tr key={uuidv4()} className="houseDetails">
                <td className="houseId">{i+1}</td>
                <td className="houseName">{house.form.name} </td>
                <td className="ownersName">{house.form.OwnerName}</td>
                <td className="address">{house.form.adress}</td>
                <td className="areaCode">{house.form.pincode}</td>
                <td className="rent">{house.form.rent}</td>
                <td className="preferredTenants">
                  {house.form.checkbox2?"Married":"bachelor"}
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
