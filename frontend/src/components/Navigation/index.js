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
      <li><img id='home-icon' src='https://monopolynb.s3.amazonaws.com/favicon.png' alt='home-icon' /></li>
        <li><NavLink exact to="/">Monopolynb</NavLink></li>
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
      <div id='right-nav'>
        <ul id='right-nav-nested'>{sessionLinks}</ul>
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