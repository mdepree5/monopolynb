import { useEffect } from 'react';
import {useParams} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUserById } from '../../store/user';
// todo ——————————————————————————————————————————————————————————————————————————————————
import PropertyList from '../Property/PropertyList';
import './User.css';
// todo ——————————————————————————————————————————————————————————————————————————————————

const UserPage = () => {
  const {userId} = useParams();

  const dispatch = useDispatch();

  const sessionUser = useSelector(state => state.session.user);
  const pageUser = useSelector(state => state.user.currentUser);

  useEffect(() => {dispatch(getUserById(userId))}, [dispatch, userId]);


  return sessionUser === pageUser ? (
    <div className='center-body'>
      <ul className='user-splash'>
        <li><h2>{`Welcome Back, ${pageUser?.firstName}`}</h2></li>
        <li><h3>Your Properties</h3></li>
      </ul>
      <PropertyList userId={userId} />
    </div>
    ) : (
    <div className='center-body'>
      <ul className='user-splash'>
        <li><h2>{`${pageUser?.firstName}
          ${pageUser?.lastName.slice(0, 1)}`}
        </h2></li>
        <li><h3>{`${pageUser?.firstName}
          ${pageUser?.lastName.slice(0, 1)}${pageUser?.lastName.slice(0, 1).endsWith('s') ? '\'' : '\'s'} Listings`}
        </h3></li>
        
      </ul>
      <PropertyList userId={userId} />
    </div>
    )
};





export default UserPage;

/* 
 */