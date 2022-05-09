import {NavLink, useHistory} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Squash as Hamburger } from 'hamburger-react'
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
  
  const [dropdown, toggleDropdown] = useState(false)
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
    toggleDropdown(false);
    return history.replace('/');
  };

  const closeDropdown = e => {
    e.stopPropagation();
    return toggleDropdown(false);
  }

  const sessionLinks = sessionUser ? (
    <>
      <PropertyFormModal toggleDropdown={toggleDropdown} />
      <NavLink to={`/users/${sessionUser.id}`} onClick={closeDropdown}>My Page</NavLink>
      <button onClick={logout}>Log Out</button>
      
    </>
  ) : (
    <>
      <DemoLogin toggleDropdown={()=>toggleDropdown(false)} />
      <LoginFormModal toggleDropdown={()=>toggleDropdown(false)} />
      <SignupFormModal toggleDropdown={()=>toggleDropdown(false)} />
    </>
  );

  return (
    <nav className={`nav-bar ${navStatus}`}>
      <div id='left-nav'>
        <NavLink className='row-list' exact to="/">
          <img id='home-icon' src='https://monopolynb.s3.amazonaws.com/favicon.png' alt='home-icon' />
          <div>Monopolynb</div>
        </NavLink>
      </div>

      <div id='mid-nav'>
        {navStatus === 'nav-top' ? (
          <NavLink className='explore' style={{color:'#3efa57'}} exact to="/properties">Explore</NavLink>
        ) : (
          <NavLink className='explore' exact to="/properties">Explore</NavLink>
        )}
      </div>

      <div id='right-nav'>
        <Hamburger toggled={dropdown} toggle={toggleDropdown} />
        {dropdown && 
          <div className={`dropdown-content dropdown-${navStatus}`} >
            {sessionLinks}
          </div>
        }
      </div>
    </nav>
  );
}

export default Navigation;