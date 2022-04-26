import { useEffect } from 'react';
import {useParams} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUserById } from '../../store/user';
// todo ——————————————————————————————————————————————————————————————————————————————————
import PropertyList from '../Property/PropertyList';
import PropertyFormModal from '../Property/PropertyModal';
import './User.css';
// todo ——————————————————————————————————————————————————————————————————————————————————

const UserPage = () => {
  const {userId} = useParams();

  const dispatch = useDispatch();

  const sessionUser = useSelector(state => state.session.user);
  const pageUser = useSelector(state => state.user[userId]);

  useEffect(() => {dispatch(getUserById(userId))}, [dispatch, userId]);

  return  (
    <div className='user-page col-list center-body'>
      <div className='user-splash col-list'>
        {sessionUser?.id === pageUser?.id ?
          (<>
            <h1 style={{marginBottom:'10px'}}>{`Welcome back, ${pageUser?.firstName} `}<i className="far fa-user" /></h1>
            {/* <h3 style={{marginBottom:'10px'}} >Your Properties</h3> */}
            <PropertyFormModal />
          </>)
          : 
          (<>
            <h2>{`${pageUser?.firstName} ${pageUser?.lastName.slice(0, 1)}`} </h2>
            <h3>{`${pageUser?.firstName}
              ${pageUser?.lastName.slice(0, 1)}${pageUser?.lastName.slice(0, 1).endsWith('s') ? '\'' : '\'s'} Listings`}
            </h3>
          </>)
        }
      </div>

      <div style={{width:'40%', marginBottom: '10px'}} className="line"></div>
      <PropertyList userId={userId} />
      <div className='filler-box' style={{backgroundColor:'white'}}/>
    </div>
    )
};





export default UserPage;

/* 
 */