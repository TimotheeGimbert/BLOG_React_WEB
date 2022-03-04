import React, { useState } from 'react'
import APIManager from 'services/axiosMethods'
import Cookies from 'js-cookie';


const Login = () => {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = {
      "user": {
        "email": email,
        "password": password
      }
    }
    fetch("http://localhost:3000/users/sign_in", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }).then((res) => {
      if (res.ok) {
        const token = res.headers.get("Authorization");
        Cookies.set("token", token.split(' ')[1]);
        console.log(res);
      } else {
        throw new Error(res);
      }
    });
  }

  return (
    <div className='Login'>
      <h2>Login</h2>
      <form onSubmit={(e) => handleSubmit(e) }>
        <label htmlFor="email"><b>Email</b></label>
        <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Enter an email" name="email" required />
        <label htmlFor="password"><b>Password</b></label>
        <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Choose a Password" name="password" required />
        <button type="submit">Log In</button>
      </form>    
    </div>
  );
};

export default Login;