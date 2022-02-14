import {NavLink, useHistory} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// todo ——————————————————————————————————————————————————————————————————————————————————
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import PropertyFormModal from '../Property/PropertyFormModal';
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
      <div className='dot'>·</div>
      <NavLink to={`/users/${sessionUser.id}`}>My Page</NavLink>
      <div className='dot'>·</div>
      <button onClick={logout}>Log Out</button>
    </>
  ) : (
    <>
      <DemoLogin/>
      <div className='dot'>·</div>
      <LoginFormModal />
      <li className='dot'>·</li>
      <SignupFormModal />
    </>
  );

  return (
    <nav className={`nav-bar ${navStatus}`}>
      <div id='left-nav'>
        <img id='home-icon' src='https://monopolynb.s3.amazonaws.com/favicon.png' alt='home-icon' />
        <NavLink exact to="/">Monopolynb</NavLink>
      </div>
      <div id='mid-nav'>
        {navStatus === 'nav-top' ? (
          <NavLink style={{color:'#3efa57', boxShadow:'0 3px 8px 0 green'}} exact to="/properties">Explore</NavLink>
        ) : (
          <NavLink exact to="/properties">Explore</NavLink>
        )}
      </div>
      <div id='right-nav'>
        <div id='right-nav-nested'>{sessionLinks}</div>
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