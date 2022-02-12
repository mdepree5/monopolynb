import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import PropertyFormModal from '../Property/PropertyFormModal';
import DemoLogin from '../LoginFormModal/DemoLogin';

import * as sessionActions from '../../store/session';


import './Navigation.css';



function Navigation({ isLoaded }){
  const [navStatus, setNavStatus] = useState('nav-top');
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setNavStatus((window.scrollY > 0) ? 'nav-not-top' : 'nav-top')
    })
  }, [])


  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  let sessionLinks;
  sessionLinks = sessionUser ? (
    <>
      <li><PropertyFormModal /></li>
      <li className='dot'>·</li>
      <li><NavLink to={`/users/${sessionUser.id}`}>My Page</NavLink></li>
      <li className='dot'>·</li>
      <li><button onClick={logout}>Log Out</button></li>
    </>
  ) : (
    <>
      <li><DemoLogin/></li>
      <li className='dot'>·</li>
      <li><LoginFormModal /></li>
      <li className='dot'>·</li>
      <li><SignupFormModal /></li>
    </>
  );

  return (
    <nav className={`nav-bar ${navStatus}`}>
      <ul id='left-nav'>
        <li><NavLink exact to="/">Home</NavLink></li>
      </ul>
      <ul id='mid-nav'>
        <li>
        {navStatus === 'nav-top' ? (
          <NavLink exact to="/properties">Explore</NavLink>
        ) : (
          <NavLink exact to="/properties">Explore</NavLink>
        )}
        </li>
      </ul>
      <ul id='right-nav'>
        {sessionLinks}
      </ul>
    </nav>
  );
}


export default Navigation;

/* 
import PropertySearchBar from '../PropertySearchBar';
<PropertySearchBar placeholderText='Search for Properties'/>
*/

/* 
import ProfileButton from './ProfileButton';
<li><ProfileButton isLoaded={isLoaded} /></li>
 */