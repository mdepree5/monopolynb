import React from 'react';
import { NavLink } from 'react-router-dom';
import ProfileButton from './ProfileButton';

import './Navigation.css';



function Navigation({ isLoaded }){

  const handleCLick = () => window.scroll(0, 0);

  return (
    <div className='nav-bar'>
      <div className='left-nav'>
        <NavLink exact to="/">Home</NavLink>
        <div onClick={handleCLick}>CLICK ME</div>
      </div>
      <div className='right-nav'>
        <ProfileButton isLoaded={isLoaded} />
      </div>
    </div>
  );
}


export default Navigation;