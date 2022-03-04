import React from 'react';
import { Link } from 'react-router-dom';
import APIManager from 'services/axiosMethods';
import Cookies from 'js-cookie';
import './Header.scss';


const Header = () => {

  const handleDisconnect = async () => {
    await APIManager.logOut()
    Cookies.remove('token')
  }

  return (
    <div className='Header'>
      <Link to='/'><h1>Blog</h1></Link>
      <div>
        <Link to='/register'><button>Register</button></Link>
        <Link to='/login'><button>Login</button></Link>
        <button onClick={() => handleDisconnect()}>Disconnect</button>
        <button onClick={() => console.log(Cookies.get("token"))}>See cookies</button>
        <button onClick={() => Cookies.remove("token")}>Remove cookies</button>
      </div>
    </div>
  );
};

export default Header;