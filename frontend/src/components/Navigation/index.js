import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import ProfileButton from './ProfileButton';

import './Navigation.css';



function Navigation({ isLoaded }){
  const [navStatus, setNavStatus] = useState('top');
  
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setNavStatus((window.scrollY > 0) ? 'not-top' : 'top')
    })
  }, [])

  return (
    <div id='nav-bar' className={navStatus}>
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