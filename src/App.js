import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Header from './components/Header'
import Home from './pages/Home'
import Article from './pages/Article'
import Register from 'pages/Register'
import Login from 'pages/Login'

const App = () => {
  return (
    <Router>

      <header>
        <Header />
      </header>

      <main>
        <Routes>
          <Route path='/' element= { <Home /> } />
          <Route path='/register' element= { <Register /> } />
          <Route path='/login' element= { <Login /> } />
          <Route path='/articles/:id' element= { <Article /> } />
        </Routes>
      </main>

    </Router>
  );
}

export default App;