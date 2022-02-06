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
      <div>{`Hello ${sessionUser.username}`}</div>
      <div>{`Hello ${sessionUser.firstName}`}</div>
      <ProfileButton user={sessionUser} />
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
        <li>
          {isLoaded && sessionLinks}
        </li>
      </ul>
    </>
  );
}


export default Navigation;