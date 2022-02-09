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
    <div className={`nav-bar ${navStatus}`}>
      <div className='left-nav'>
        <NavLink exact to="/">Home</NavLink>
      </div>
      <div className='right-nav'>
        <ProfileButton isLoaded={isLoaded} />
      </div>
    </div>
  );
}


export default Navigation;