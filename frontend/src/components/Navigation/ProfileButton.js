import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import * as sessionActions from '../../store/session';


import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import PropertyFormModal from '../Property/PropertyFormModal';

function ProfileButton({isLoaded}) {
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  
  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };
  
  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);
  
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };


  let sessionLinks;
  sessionLinks = sessionUser ? (
    <>
      <li><PropertyFormModal /></li>
      <li><button onClick={logout}>Log Out</button></li>
    </>
  ) : (
    <>
      <li><LoginFormModal /></li>
      <li><SignupFormModal /></li>
    </>
  );

  return (
    <>
      <button onClick={openMenu}>
        <i className="far fa-user" />
      </button>
      {showMenu && (
        <ul className="profile-dropdown">
          {sessionLinks}
        </ul>
      )}
    </>
  );
}

export default ProfileButton;