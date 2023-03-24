import React from 'react'
import { useState } from 'react';
// import './css/SearchForm.css';
    

const FormPost = () => {
  const [title, setTitle] = useState("");
  const [category,setCategory] = useState("");
  const [author,setAuthor] = useState("");
//   const [purchaseDate,setPurchaseDate] = useState("");
//   const [insuranceCompany,setInsuranceCompany] = useState("");
//   const [insuranceExpiryDate,setInsuranceExpiryDate] = useState("");
//   const [roadWorthyExpiryDate,setRoadWorthyExpiryDate] = useState("");
//   const [capacity,setCapacity] = useState("");
//   const [isAvailable,setIsAvailable] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
       fetch("http://localhost:8080/create_book", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title : title,
          category : category,
          author : author,
        //   purchaseDate:purchaseDate,
        //   insuranceCompany:insuranceCompany,
        //   insuranceExpiryDate:insuranceExpiryDate,
        //   roadWorthyExpiryDate:roadWorthyExpiryDate,
        //   capacity:capacity,
        //   isAvailable:isAvailable,
        //   busesAvailable:{}
        }),
      });
    } catch (err) {
      console.log(err);
    }
  };

  

  return (
    <form className="search-form" onSubmit={handleSubmit} >
      <label>
        Book Title:
        <input type="text" value ={title} name="title" onChange={(e) => setTitle(e.target.value)} required/>
      </label>
      <label>
        Book Category:
        <input type="text" value={category} name="category"  onChange={(e) => setCategory(e.target.value)} required/>
      </label>
      <label>
        Book Author:
        <input type="text" value={author} name="author" onChange={(e) => setAuthor(e.target.value)} required/>
      </label>
      {/* <label>
        Purchase Date:
        <input type="date" value={purchaseDate} name="purchaseDate" onChange={(e) => setPurchaseDate(e.target.value)} />
      </label>
      <label>
      Insurance Company:
        <input type="text" value={insuranceCompany} name="insuranceCompany" onChange={(e) => setInsuranceCompany(e.target.value)} />
      </label>
      <label>
      Insurance Expiry Date:
        <input type="date" value={insuranceExpiryDate} name="insuranceExpiryDate" onChange={(e) => setInsuranceExpiryDate(e.target.value)} />
      </label>
      <label>
      Road Worthy Expiry Date:
        <input type="date" value={roadWorthyExpiryDate} name="roadWorthyExpiryDate" onChange={(e) => setRoadWorthyExpiryDate(e.target.value)} />
      </label>
      <label>
      Capacity:
        <input type="number" value={capacity} name="capacity" onChange={(e) => setCapacity(e.target.value)} />
      </label>
      <label>
      is Available
        <input type="text" value={isAvailable} name="isAvailable" onChange={(e) => setIsAvailable(e.target.value)}/>
      </label> */}

      <button class="search-button"type="submit">Add Book</button>
    </form>
  );
};

export default FormPost;
