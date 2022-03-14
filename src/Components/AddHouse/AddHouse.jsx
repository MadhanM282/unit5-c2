import { useState } from "react";
import axios from "axios";

export const AddHouse = () => {

  const [form,setForm] = useState({
    name:"",
    OwnerName:"",
    adress:'',
    pincode:"",
    rent:"",
    image:"",

  })

  const formData = (e)=>{
    const {id,value}= e.target
    // console.log(value)
    setForm({
      ...form,
      [id]: value
    })
    
  }
  return (
    <div className="addHouseContainer">
      <form >
        <label>name</label>
        <input onChange={formData} id='name' type="text" className="name"  required />
        <br />
        <label>ownerName</label>
        <input onChange={formData} id = "OwnerName"  type="text" className="ownerName" required />
        <br />
        <label>address</label>
        <input onChange={formData} id="adress"   type="text" className="address" required />
        <br />
        <label>areaCode</label>
        <input onChange={formData} id = "pincode"  type="text" className="areaCode" required />
        <br />
        <label>rent</label>
        <input onChange={formData} id = "rent"  type="text" className="rent" required />
        <br />
        <label>preferredTenant</label>
        <br />
        <label>bachelor</label>
        <input onChange={formData} id = "checkbox1" checked={form.bachelor} type="checkbox" className="bachelor" />
        <br />
        <label>married</label>
        <input onChange={formData} id = "checkbox2" checked={form.married} type="checkbox" className="married" />
        <br />
        <label>image</label>
        <input onChange={formData} id="image"  type="text" className="image" required />
        <br />
        <input className="submitBtn" type="submit" onClick={(e)=>{
          // e.preventDefault()

          axios.post('http://localhost:8080/houses', {form}).then(function (response) {console.log(response);})}}/>
      </form>
    </div>
  );
};
