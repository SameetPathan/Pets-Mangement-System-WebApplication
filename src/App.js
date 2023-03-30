import './App.css';
import Navbarcomponent from './components/Navbarcomponent';
import FooterComponent from './components/FooterComponent';
import ForceLogin from './components/ForceLogin';
import React,{useState,useEffect} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Loader from './components/Loader';

import Cookies from 'js-cookie';
import AdminHome from './components/AdminHome';
import UserHome from './components/UserHome';
import ShelterHome from './components/ShelterHome';
import ChatComponent from './components/ChatComponent';


function App() {

  const [currentAccount, setCurrentAccount] = useState("");
  const [currentusertype, setCurrentusertype] = useState("");

  useEffect(() => {
    const cookieUsername = Cookies.get('aadhar');
    const cookieUsertype = Cookies.get('usertype')
    if (cookieUsername) {
      setCurrentAccount(cookieUsername);
      setCurrentusertype(cookieUsertype)
    }
  }, []);

  return (
    <div className="App">
    <Loader></Loader>
      {currentAccount?
      <Router>
          <Navbarcomponent setCurrentAccount={setCurrentAccount} currentusertype={currentusertype}  currentAccount={currentAccount}></Navbarcomponent>
          <>

            <Routes>
              {Cookies.get('usertype') === 'admin' && (
                <Route exact path="/" element={<AdminHome></AdminHome>} />
              )}
              {Cookies.get('usertype') ==='user' && (
                <>
                  <Route exact path="/" element={<UserHome></UserHome>} />
                  <Route exact path="/chat" element={<ChatComponent></ChatComponent>} />
                </>
              )}
              {Cookies.get('usertype') ==='shelter' && (
                <>
                <Route exact path="/" element={<ShelterHome></ShelterHome>} />
                <Route exact path="/chat" element={<ChatComponent></ChatComponent>} />
                </>
              )}

            </Routes>
          </>
            <FooterComponent></FooterComponent>
      </Router>
      :
      <Router>
          <Navbarcomponent setCurrentAccount={setCurrentAccount} currentAccount={currentAccount} ></Navbarcomponent>
          
          <>
            <Routes> 
              <Route exact path='/' element={<ForceLogin></ForceLogin>}></Route>
              <Route exact path='*' element={<ForceLogin></ForceLogin>}></Route>
            </Routes>
          </>
            <FooterComponent></FooterComponent>
      </Router> 
    }
    </div>
  );
}

export default App;
