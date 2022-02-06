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
    <>
      <li>
        <div>{`Hello ${sessionUser.firstName}`}</div>
      </li>
      <li>
        <ProfileButton user={sessionUser} />
      </li>
    </>
  ) : (
    <>
      <LoginFormModal />
      <SignupFormModal />
    </>
  );

  return (
    <>
      <ul className='left-nav'>
          <NavLink exact to="/">Home</NavLink>
      </ul>
      <ul className='right-nav'>
        {isLoaded && sessionLinks}
      </ul>
    </>
  );
}


export default Navigation;