import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

require('./Nav.css')

function Nav({onSearch}) {
  return (
  <div className='Barras'>
    <nav className="navbar navbar-light">
      <div className='responsive'>
        <a className="navbar-brand" href="#!">
          <img src={Logo} alt="Henry"/>
        </a>
        <p>Weather App</p>
      </div>
      <div className='izquierda'>
      <a className="navbar-brand" href="#!">
          <img src={Logo} alt="Henry"/>
        </a>
      </div>
      <div className='medio'>
       <SearchBar onSearch={onSearch}/>
      </div> 
      <div className='derecha'>
      <p>Henry - Weather App</p>
      </div>
    </nav>
  </div>
  );
};

export default Nav;
