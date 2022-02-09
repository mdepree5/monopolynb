import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import ProfileButton from './ProfileButton';

import './Navigation.css';



function Navigation({ isLoaded }){
  const [navStatus, setNavStatus] = useState('nav-top');
  
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setNavStatus((window.scrollY > 0) ? 'nav-not-top' : 'nav-top')
    })
  }, [])


  return (
    <nav className={`nav-bar ${navStatus}`}>
      <ul className='left-nav'>
        <li><NavLink exact to="/">Home</NavLink></li>
      </ul>
      <ul>
        <li>
        {navStatus === 'nav-top' ? (
          <div>Good</div>
        ) : (
          <div>Morning</div>
        )}
        </li>
      </ul>
      <ul className='right-nav'>
        <li><ProfileButton isLoaded={isLoaded} /></li>
      </ul>
    </nav>
  );
}


export default Navigation;

/* 
import PropertySearchBar from '../PropertySearchBar';
<PropertySearchBar placeholderText='Search for Properties'/>
*/