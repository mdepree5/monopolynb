import {NavLink, useHistory} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// todo ——————————————————————————————————————————————————————————————————————————————————
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import PropertyFormModal from '../Property/PropertyModal';
import DemoLogin from '../LoginFormModal/DemoLogin';
// todo ——————————————————————————————————————————————————————————————————————————————————
import * as sessionActions from '../../store/session';
import './Navigation.css';
// todo ——————————————————————————————————————————————————————————————————————————————————

const Navigation = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  
  const [navStatus, setNavStatus] = useState('nav-top');
  const sessionUser = useSelector(state => state.session.user);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setNavStatus((window.scrollY > 0) ? 'nav-not-top' : 'nav-top')
    })
  }, [])


  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    return history.replace('/');
  };

  const sessionLinks = sessionUser ? (
    <>
      <PropertyFormModal />
      •
      <NavLink to={`/users/${sessionUser.id}`}>My Page</NavLink>
      •
      <button onClick={logout}>Log Out</button>
    </>
  ) : (
    <>
      <DemoLogin/>
      •
      <LoginFormModal />
      •
      <SignupFormModal />
    </>
  );

  return (
    <nav className={`nav-bar ${navStatus} row-list`}>
      <div className='row-list' id='left-nav'>
        <NavLink className='row-list' exact to="/">
          <img id='home-icon' src='https://monopolynb.s3.amazonaws.com/favicon.png' alt='home-icon' />
          Monopolynb
        </NavLink>
      </div>

      <div className='row-list' id='mid-nav'>
        {navStatus === 'nav-top' ? (
          <NavLink className='explore' style={{color:'#3efa57'}} exact to="/properties">Explore</NavLink>
        ) : (
          <NavLink className='explore' exact to="/properties">Explore</NavLink>
        )}
      </div>

      <div className='row-list' id='right-nav'>
        <div className='session-links'>{sessionLinks}</div>
      </div>
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