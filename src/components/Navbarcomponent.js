import React,{useState} from 'react';
import Loader from './Loader';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import Cookies from 'js-cookie';


function Navbarcomponent(props) {

  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const [email, setemail] = useState('');
  const [address, setaddress] = useState('');
  const [city, setcity] = useState('');
  const [phone, setphone] = useState('');
  const [aadhar, setaadhar] = useState('');
  const [usertype, setusertype] = useState('');

  const [className, setClassName] = useState("modal fade");

 

  const logout=async()=>{
		try {
			props.setCurrentAccount("");
      Cookies.remove('aadhar');
      Cookies.remove('usertype');
      <Loader></Loader>
		  } catch (err) {
			console.log(err);
		  }
	  }

    function login(){
      if(aadhar && password && usertype){
        props.setCurrentAccount(aadhar);
        Cookies.set('aadhar', aadhar);
        Cookies.set('usertype', usertype);
        setClassName(className + " hide");
      }else
      {
        alert("Failed To login")
      }
    }

    function register(){
      if(aadhar && password && usertype){
      alert("Register Success")
      }else{
        alert("Failed to register")
      }
    }


  return (
    <>
  <Loader></Loader>
  <div className='sticky-top'>

      <nav className="navbar navbar-expand-lg navbar-dark bgd">
      
        <div className="logo-holder logo-3 mr-3">
          <a>
            <h3>Pets Management</h3>
            <p>Pet shelter Help and seller</p>
          </a>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse mr-3"
          id="navbarSupportedContent"
        >

      <ul className="navbar-nav mr-auto">

      </ul>

            {props.currentAccount ? <> 
        <Link class="nav-link" to="/">Home </Link>
        <button className="btn btn-outline-success my-2 my-sm-0" onClick={logout} >Logout</button></>
            :
            <div className="form-inline">
                <button className="btn btn-outline-success my-2 my-sm-0" data-toggle="modal" data-target="#register
                "  >Register</button>
                <button className="btn btn-outline-success my-2 my-sm-0 ml-3" data-toggle="modal" data-target="#login"
                  >Login</button>
            </div>}

        </div>
      </nav>
    </div>


<div className="modal fade" id="register" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">

   

        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Register</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
        <form>

        <div className="form-check form-check-inline">
        <input className="form-check-input" type="radio" value="user" onChange={(e) => setusertype(e.target.value)} name="inlineRadioOptions" id="inlineRadio1" />
        <label className="form-check-label" for="inlineRadio1">User</label>
      </div>

      <div className="form-check form-check-inline">
        <input className="form-check-input" value="shelter" onChange={(e) => setusertype(e.target.value)} type="radio" name="inlineRadioOptions" id="shelter" />
        <label className="form-check-label" for="inlineRadio1">Shelter</label>
      </div>


          <div className="form-group">
            <label for="username" className="col-form-label">Full Name :</label>
            <input type="text" value={username} onChange={(e) => setusername(e.target.value)} className="form-control" id="username"/>
          </div>
          <div className="form-group">
            <label for="phone" className="col-form-label">Phone Number :</label>
            <input type="text" value={phone} onChange={(e) => setphone(e.target.value)} className="form-control" id="phone"/>
          </div>
          <div className="form-group">
            <label for="email" className="col-form-label">Email :</label>
            <input type="text" value={email} onChange={(e) => setemail(e.target.value)}  className="form-control" id="email"/>
          </div>

          <div className="form-group">
            <label for="aadhar" className="col-form-label">Aadharcard Number :</label>
            <input type="text" value={aadhar} onChange={(e) => setaadhar(e.target.value)}  className="form-control" id="aadhar"/>
          </div>

          <div className="form-group">
            <label for="address" className="col-form-label">Full Address :</label>
            <textarea type="text" value={address} onChange={(e) => setaddress(e.target.value)}  className="form-control" id="address"/>
          </div>

          <div className="form-group">
            <label for="city" className="col-form-label">City :</label>
            <input type="text" value={city} onChange={(e) => setcity(e.target.value)}  className="form-control" id="city"/>
          </div>

          <div className="form-group">
            <label for="password" className="col-form-label">Password :</label>
            <input type="password" value={password} onChange={(e) => setpassword(e.target.value)}  className="form-control" id="password"/>
          </div>
     
        </form>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" onClick={register} className="btn btn-primary">Register</button>
        </div>
      </div>
    </div>
  </div>

  <div className={className} id="login" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Login</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
        <form>

        <div className="form-check form-check-inline">
        <input className="form-check-input" value="user" onChange={(e) => setusertype(e.target.value)} type="radio" name="inlineRadioOptions" id="inlineRadio1" />
        <label className="form-check-label" for="inlineRadio1">User</label>
      </div>

      <div className="form-check form-check-inline">
        <input className="form-check-input" value="shelter" onChange={(e) => setusertype(e.target.value)} type="radio" name="inlineRadioOptions" id="inlineRadio1" />
        <label className="form-check-label" for="inlineRadio1">Shelter</label>
      </div>


      <div className="form-check form-check-inline">
        <input className="form-check-input" value="admin" onChange={(e) => setusertype(e.target.value)} type="radio" name="inlineRadioOptions" id="inlineRadio2" />
        <label className="form-check-label" for="inlineRadio2">Admin</label>
      </div>
          
          <div className="form-group">
            <label for="aadhar" className="col-form-label">Aadharcard Number :</label>
            <input type="text" value={aadhar} onChange={(e) => setaadhar(e.target.value)}  className="form-control" id="aadhar"/>
          </div>
          <div className="form-group">
            <label for="password" className="col-form-label">Password :</label>
            <input type="password" value={password} onChange={(e) => setpassword(e.target.value)}  className="form-control" id="password"/>
          </div>
     
        </form>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" onClick={login} className="btn btn-primary">Login</button>
        </div>
      </div>
    </div>
  </div>


  
    </>
  );
}

export default Navbarcomponent