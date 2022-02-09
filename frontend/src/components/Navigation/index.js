import React from 'react';
import { NavLink } from 'react-router-dom';
import ProfileButton from './ProfileButton';

import './Navigation.css';



function Navigation({ isLoaded }){

  return (
    <div className='nav-bar'>
      <ul className='left-nav'>
        <NavLink exact to="/">Home</NavLink>
      </ul>
      <ul className='right-nav'>
        <ProfileButton isLoaded={isLoaded} />
      </ul>
    </div>
  );
}


export default Navigation;