import { useEffect, useState } from 'react';
import {useParams, NavLink} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// todo ——————————————————————————————————————————————————————————————————————————————————
import { getProperty } from '../../store/property';
import PropertyEditModal from './PropertyEditModal';
import PropertyDeleteButton from './PropertyDeleteButton';
// todo ——————————————————————————————————————————————————————————————————————————————————
import Review from '../Review';
import Image from '../Image';
import './Property.css';
// todo ——————————————————————————————————————————————————————————————————————————————————

const PropertyPage = () => {
  const dispatch = useDispatch();

  const {propertyId} = useParams();
  useEffect(() => {
    dispatch(getProperty(propertyId))
  }, [dispatch, propertyId]);

  const [belongsToUser, setBelongsToUser] = useState(false);
 
  const property = useSelector(state => state?.property[propertyId]);
  const sessionUser = useSelector(state => state?.session?.user);

  console.log('PROPERTY!!!!!!!!!', property)


  useEffect(() => {    
    if(sessionUser?.id === property?.hostId) setBelongsToUser(true);
    else setBelongsToUser(false);
  }, [sessionUser, property])



  // useEffect(() => {dispatch(getUserById(property?.hostId))}, [dispatch]);

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

      <div className='property-host'> <NavLink to={`/users/${property?.hostId}`}>{`Hosted by ${property?.User?.firstName}`}</NavLink></div>
      <div className='property-number-of-beds'>{`${property?.numberOfBeds} Bed${property?.numberOfBeds === 1 ? '' : 's'}`}</div>
      <div className='property-price'>{`$${property?.price} / night`}</div>
      
{/*       
      <Image images={property?.Images}/>
      <br />
      <Review reviews={property?.Reviews} /> */}
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