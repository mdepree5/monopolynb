import React from 'react';
import { NavLink } from 'react-router-dom';
import ProfileButton from './ProfileButton';
import PropertyFormModal from '../Property/PropertyFormModal';

import './Navigation.css';



function Navigation({ isLoaded }){

  return (
    <>
      <ul className='left-nav'>
        <NavLink exact to="/">Home</NavLink>
      </ul>
      <ul className='right-nav'>
        <PropertyFormModal />
        <ProfileButton isLoaded={isLoaded} />
      </ul>
    </>
  );
}


export default Navigation;