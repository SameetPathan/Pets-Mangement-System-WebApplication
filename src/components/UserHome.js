import React,{useState} from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';


function UserHome() {

  const [cityFilter, setCityFilter] = useState("");

 

  let whole=[
    { id:"1",name: "Buddy1",breed:"german",age:"6",gender:"male",shelyteraadhar:"212121",imageurl:"dog.png",price: "5000", city: "Pune" },
    { id:"2",name: "Buddy2",breed:"german",age:"6",gender:"male",shelyteraadhar:"212121",imageurl:"dog.png",price: "5000", city: "Mumbai" },
    { id:"3",name: "Buddy3",breed:"german",age:"6",gender:"male",shelyteraadhar:"212121",imageurl:"dog.png",price: "5000", city: "sangli" },
    { id:"4",name: "Buddy4",breed:"german",age:"6",gender:"male",shelyteraadhar:"212121",imageurl:"dog.png",price: "5000", city: "Pune" },
    { id:"5",name: "Buddy5",breed:"german",age:"6",gender:"male",shelyteraadhar:"212121",imageurl:"dog.png",price: "5000", city: "Sangli" },
    { id:"6",name: "Buddy6",breed:"german",age:"6",gender:"male",shelyteraadhar:"212121",imageurl:"dog.png",price: "5000", city: "Mumbai" },
    { id:"7",name: "Buddy7",breed:"german",age:"6",gender:"male",shelyteraadhar:"212121",imageurl:"dog.png",price: "5000", city: "sangli" },
    { id:"8",name: "Buddy8",breed:"german",age:"6",gender:"male",shelyteraadhar:"212121",imageurl:"dog.png",price: "5000", city: "Pune" },
    { id:"9",name: "Buddy9",breed:"german",age:"6",gender:"male",shelyteraadhar:"212121",imageurl:"dog.png",price: "5000", city: "Mumbai" },

  ];

  const handleCityFilterChange = (event) => {
    setCityFilter(event.target.value);
  };

  const filteredPets = whole.filter((pet) =>
    pet.city.toLowerCase().includes(cityFilter.toLowerCase())
  );


  return (
    <>
    <div className='container'  style={{width:"400px"}}>
      <div className="form-group">
          <label htmlFor="cityFilter" style={{marginLeft:"100px"}}>Filter by city</label>
          <input
            type="text"
            className="form-control"
            id="cityFilter"
            value={cityFilter}
            onChange={handleCityFilterChange}
          />
        </div>
      </div>

      <div className="d-flex flex-wrap justify-content-center">
      {filteredPets.map((pet) => (
        <div class="card m-3 form-bg form-container">
       
            <span class="badge badge-success p-2" >{pet.name}</span> 
            <img
              src={pet.imageurl}
              class="card-img-top p-1 rounded-circle"
              width="100px"
              height="200px"
            ></img>

          <span class="badge badge-info p-2 m-2" >Breed : {pet.breed}</span>
          <span class="badge badge-info p-2 m-2" >City : {pet.city} , price : {pet.price} </span>
          <span class="badge badge-info p-2 m-2" >Gender : {pet.gender} , Age: {pet.age}  </span>


			<div class="d-flex justify-content-around">
			  <h5 class="card-title text-center"> 
          <Link to="/chat" className="btn btn-success" >Chat For Enquiry</Link>
        </h5>

        <h5 class="card-title text-center">
          <button className="btn btn-danger">Report</button>
        </h5>
		  </div>

        </div>
      ))}

    </div>
    </>
  );
}

export default UserHome