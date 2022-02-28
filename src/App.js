import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Header from './components/pages/Header';
import Home from './pages/Home';
import Article from './pages/Article';

const App = () => {
  return (
    <Router>

      <header>
        <Header />
      </header>

      <main>
        <Routes>
          <Route path='/' element= { <Home /> } />
          <Route path='/articles/:id' element= { <Article /> } />
        </Routes>
      </main>

    </Router>
  );
}

export default App;