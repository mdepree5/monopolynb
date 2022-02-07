import { useEffect } from 'react';
import {useParams, NavLink} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { getProperty } from '../../store/property'

import Review from '../Review';

const PropertyPage = () => {
  const {propertyId} = useParams();

  const dispatch = useDispatch();

  const property = useSelector(state => state.property.listOfProperties[propertyId]);
  
  console.log('debugger');
  console.log(property);
  // console.log('debugger-component');
  // console.log(properties);
  // console.log('debugger-component');

  useEffect(() => {
    dispatch(getProperty(propertyId));
  }, [dispatch, propertyId]);


  return (
    <>
      <div>Property Page</div>
      <li>
        <div className='property-info'>
            <div className='property-host'> 
              <NavLink to={`/users/${property.hostId}`}/>
            </div>
          <div className='property-title'>{property.title}</div>
          <div className='property-description'>{property.description}</div>
          <div className='property-number-of-beds'>{property.numberOfBeds}</div>
          <div className='property-price'>{property.price}</div>
          <div className='property-location'>{`${property.city}, ${property.state}`}</div>
        </div>
      </li>
      
      <Review propertyId={propertyId}/>
    </>
  );
}

export default PropertyPage;


