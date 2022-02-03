import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';

import './Navigation.css';



function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  sessionLinks = sessionUser ? (
    <ProfileButton user={sessionUser} />
  ) : (
    <>
      <LoginFormModal />
      <SignupFormModal />
    </>
  );

  return (
    <nav>
      <ul className='left-nav'>
          <NavLink exact to="/">Home</NavLink>
      </ul>
      <ul className='right-nav'>
        <li>
          {isLoaded && sessionLinks}
        </li>
      </ul>
    </nav>
  );
}


export default Navigation;