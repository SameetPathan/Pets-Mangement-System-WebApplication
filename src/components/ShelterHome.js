import React, { useState, useEffect } from "react";

import { addpets } from '../firebaseConfig';
import { getDatabase, ref, onValue } from 'firebase/database';

function ShelterHome() {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [shelterAadhar, setShelterAadhar] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [price, setPrice] = useState("");
  const [city, setCity] = useState("");
  const [phonenumber, setPhone] = useState("");


  const [cityFilter, setCityFilter] = useState("");
  const [pets, setPets] = useState([]);

  const handleCityFilterChange = (event) => {
    setCityFilter(event.target.value);
  };

  const filteredPets = pets.filter((pet) =>
    pet.city.toLowerCase().includes(cityFilter.toLowerCase())
  );


  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }


  function add(){
    addpets(getRandomInt(1,500),name,breed,age,gender,shelterAadhar,phonenumber,imageUrl,price,city)
  }

  useEffect(() => {
    const dbb = getDatabase();
    const petsRef = ref(dbb, 'users/pets');

    const unsubscribe = onValue(petsRef, (snapshot) => {
      const petsData = snapshot.val();
      const petsArray = petsData ? Object.entries(petsData).map(([id, pet]) => ({ id, ...pet })) : [];
      setPets(petsArray);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <><div className='container'  style={{width:"400px"}}>
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

      <button
       style={{marginLeft:"150px"}}
        type="button"
        class="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModal"
        data-whatever="@getbootstrap"
      >
        Add Pets
      </button>
    </div>

    <div className="d-flex flex-wrap justify-content-center">
    {filteredPets.map((pet) => (
      <div class="card m-3 form-bg form-container">
        { pet.report? <span class="badge badge-danger" style={{width:"60px",marginBottom:"10px"}}>Reported</span>:""}
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

      </div>
    ))}

  </div>
    <div className="container">
    

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Add Pets
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="breed" className="form-label">
                    Breed
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="breed"
                    value={breed}
                    onChange={(event) => setBreed(event.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="age" className="form-label">
                    Age
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="age"
                    value={age}
                    onChange={(event) => setAge(event.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="gender" className="form-label">
                    Gender
                  </label>
                  <select
                    className="form-control"
                    id="gender"
                    value={gender}
                    onChange={(event) => setGender(event.target.value)}
                    required
                  >
                    <option value="">Select gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="shelterAadhar" className="form-label">
                    Shelter Aadhar
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="shelterAadhar"
                    value={shelterAadhar}
                    onChange={(event) => setShelterAadhar(event.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="shelterAadhar" className="form-label">
                    Shelter Phone Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="shelterAadhar"
                    value={phonenumber}
                    onChange={(event) => setPhone(event.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="imageUrl" className="form-label">
                    Image URL
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="imageUrl"
                    value={imageUrl}
                    onChange={(event) => setImageUrl(event.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="price" className="form-label">
                    Price
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="price"
                    value={price}
                    onChange={(event) => setPrice(event.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="city" className="form-label">
                    City
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="city"
                    value={city}
                    onChange={(event) => setCity(event.target.value)}
                    required
                  />
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button className="btn btn-outline-success my-2 my-sm-0 ml-3" data-dismiss="modal" onClick={add} >Add</button>
         
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default ShelterHome;
