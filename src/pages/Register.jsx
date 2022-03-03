import React, { useState } from 'react';
import APIManager from 'services/axiosMethods';
import Cookies from 'js-cookie';

const Register = () => {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      "user": {
        "email": email,
        "password": password
      }
    }
    const token = await APIManager.register(payload)
    Cookies.set("token", token)
  }

  return (
    <div className='Register'>
      <h2>Register</h2>
      <form onSubmit={(e) => handleSubmit(e) }>
        <label htmlFor="email"><b>Email</b></label>
        <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Enter an email" name="email" required />
        <label htmlFor="password"><b>Password</b></label>
        <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Choose a Password" name="password" required />
        <button type="submit">Register</button>
      </form>    
    </div>
  );
};

export default Register;