import { useEffect, useState } from 'react';
import {useParams, NavLink, useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// todo ——————————————————————————————————————————————————————————————————————————————————
import { getProperty } from '../../store/property';
import { getUserById } from '../../store/user';
import PropertyEditModal from './PropertyEditModal';
import PropertyDeleteButton from './PropertyDeleteButton';
// todo ——————————————————————————————————————————————————————————————————————————————————
import Review from '../Review';
import Image from '../Image';
import './Property.css';
// todo ——————————————————————————————————————————————————————————————————————————————————

const PropertyPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const {propertyId} = useParams();
  const [belongsToUser, setBelongsToUser] = useState(false);

  const property = useSelector(state => state.property[propertyId]);
  const sessionUser = useSelector(state => state.session.user);
  const propertyOwner = useSelector(state => state.user.currentUser);

  if(!sessionUser) {
    history.replace('/');
  };

  useEffect(() => {    
    if(sessionUser?.id === property?.hostId) setBelongsToUser(true);
    else setBelongsToUser(false);
  }, [sessionUser, property])

  useEffect(() => {
    dispatch(getProperty(propertyId));
  }, [dispatch, propertyId]);

  useEffect(() => {dispatch(getUserById(property?.hostId))}, [dispatch]);

  useEffect(() => window.scroll({top: 0, left: 0}));

  return (
    <div className='property-page'>
      <ul className='property-info'>
        <li><h3 className='property-title'>{property?.title}</h3></li>
        <li><div className='property-location'>{`${property?.city}, ${property?.state}`}</div></li>
        <li> {belongsToUser &&( <ul>
          <li><PropertyEditModal property={property} /></li>
          <li><PropertyDeleteButton propertyId={propertyId} /></li>
        </ul> )}</li>
      </ul>

      <div className='property-host'> <NavLink to={`/users/${propertyOwner?.hostId}`}>{`Hosted by ${propertyOwner?.firstName}`}</NavLink></div>
      <div className='property-number-of-beds'>{`${property?.numberOfBeds} Bed${property?.numberOfBeds === 1 ? '' : 's'}`}</div>
      <div className='property-price'>{`$${property?.price} / night`}</div>
      
      
      <Image propertyId={propertyId}/>

      <br />
      <Review propertyId={propertyId} />
    </div>
  );
}


export default PropertyPage;




/* 
  <div className='mainDetails'>
    <div>Entire Home</div>
    <div>Enhanced Clean</div>
    <div>Self check-in</div>
    <div>Free cancellation before Mar 25</div>
  </div>
*/