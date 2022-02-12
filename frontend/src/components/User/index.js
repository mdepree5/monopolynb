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

  // const sessionUser = useSelector(state => state.session.user);
  // console.log(sessionUser);
  const currentUser = useSelector(state => state.session.user);
  console.log(currentUser);

  useEffect(() => {dispatch(getUserById(userId))}, [dispatch, userId]);

  return (
    <div className='center-body'>
      <ul className='user-splash'>
        <li><h2>User Page</h2></li>
        <li>{`Hello user ${userId}`}</li>
        <li><div>My Listings</div></li>
      </ul>
      <PropertyList userId={userId} />
    </div>
  );
};

export default UserPage;
