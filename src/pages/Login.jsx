import React, { useState } from 'react'
import APIManager from 'services/axiosMethods'


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
    await APIManager.logIn(payload)
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