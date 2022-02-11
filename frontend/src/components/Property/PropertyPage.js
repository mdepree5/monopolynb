import { useEffect, useState } from 'react';
import {useHistory, NavLink, useParams} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProperty } from '../../store/property';
// import Review from '../Review';
import PropertyEditModal from './PropertyEditModal';
import PropertyDeleteButton from './PropertyDeleteButton';
import ReviewFormModal from '../Review/ReviewFormModal';

import Review from '../Review/';

import './Property.css';


const PropertyPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  
  const {propertyId} = useParams();
  const [belongsToUser, setBelongsToUser] = useState(false);

  const property = useSelector(state => state.property[propertyId]);
  const sessionUser = useSelector(state => state.session.user);

  useEffect(() => {    
    if(sessionUser?.id === property?.hostId) setBelongsToUser(true);
    else setBelongsToUser(false);
  }, [sessionUser, property])

  useEffect(() => {
    dispatch(getProperty(propertyId));
  }, [dispatch, propertyId]);


  useEffect(() => window.scroll({top: 0, left: 0}));

  // if(property === null) alert('HEY') 
  // history.push(`/page-not-found`);
  return (
    <>
    <div className='property-page centered-body'>
      <div className='property-info'>
        <h3 className='property-title'>{property?.title}</h3>
        <div className='property-location'>{`${property?.city}, ${property?.state}`}</div>
      <ul>
        {belongsToUser &&( 
          <>
          <li><PropertyEditModal property={property} /></li>
          <li><PropertyDeleteButton propertyId={propertyId} /></li>
          </>)
        }
      </ul>
    </div>

      <ReviewFormModal/>

      {/* <div className='property-host'> <NavLink to={`/users/${property?.hostId}`}>Host</NavLink></div>
      <div className='property-number-of-beds'>{`${property?.numberOfBeds} Bed${property?.numberOfBeds === 1 ? '' : 's'}`}</div>
      <div className='property-price'>{`$${property?.price} / night`}</div> */}
      
      <br />
      <Review id={propertyId} belongsToUser={belongsToUser} />
      <br />
      <div className='filler-box' />
    </div>
    {/* <Review /> */}
    </>
  );
}



export default PropertyPage;




/* 
<div className='img-container'>
            <div className='img-placeholder-main'>IMG</div>
            <div className='img-placeholder'>IMG</div>
            <div className='img-placeholder'>IMG</div>
            <div className='img-placeholder'>IMG</div>
          </div>


          <div className='mainDetails'>
            <div>Entire Home</div>
            <div>Enhanced Clean</div>
            <div>Self check-in</div>
            <div>Free cancellation before Mar 25</div>
          </div>
*/