import { useEffect, useState } from 'react';
import {NavLink, useParams} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProperty } from '../../store/property';
// import Review from '../Review';
import PropertyEditModal from './PropertyEditModal';
import PropertyDeleteButton from './PropertyDeleteButton';

import './Property.css';


const PropertyPage = () => {
  const dispatch = useDispatch();
  const {propertyId} = useParams();

  const property = useSelector(state => state.property[propertyId]);
  const state = useSelector(state => state);
  // const sessionUser = useSelector(state => state.session.user);
  
  const [belongsToUser, setBelongsToUser] = useState(false);
  
  console.log('debugger-property-page');
  console.log(state);
  // console.log(sessionUser);

  // if(sessionUser?.id === property?.hostId) setBelongsToUser(true);

  useEffect(() => {
    dispatch(getProperty(propertyId));
  }, [dispatch, propertyId]);

  return (
    <>
    <div className='property-page'>
      <div>Property Page</div>
        {belongsToUser &&( 
          <>
            <PropertyEditModal property={property} />
            <PropertyDeleteButton propertyId={propertyId} />
          </>
          )
        }
      <li>
        <div className='property-info'>
            <div className='property-host'> 
              <NavLink to={`/users/${property?.hostId}`}>Host</NavLink>
            </div>
          <h3 className='property-title'>{property?.title}</h3>
          <div className='property-location'>{`${property?.city}, ${property?.state}`}</div>
          <div className='property-description'>Description: {property?.description}</div>
          <div className='property-number-of-beds'>{`${property?.numberOfBeds} Bed${property?.numberOfBeds === 1 ? '' : 's'}`}</div>
          <div className='property-price'>{`$${property?.price} / night`}</div>
        </div>
      </li>
      <br />
    </div>
    {/* <Review /> */}
    </>
  );
}



export default PropertyPage;


