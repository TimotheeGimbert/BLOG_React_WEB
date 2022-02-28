import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';


const Header = () => {
  return (
    <div className='Header'>
      <Link to='/'><h1>React + Rails = API REST CRUD Blog</h1></Link>
    </div>
  );
};

export default Header;