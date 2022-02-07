import { useEffect } from 'react';
import {NavLink} from 'react-router-dom';
import {useParams} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProperty } from '../../store/property';
import Review from '../Review';

import './Property.css';
// import Review from '../Review';


const PropertyPage = () => {
  const dispatch = useDispatch();
  const {propertyId} = useParams();

  // console.log('debugger-component');
  // const state = useSelector(state => state.property);
  // console.log('state', state)
  // console.log('property', property);

  const property = useSelector(state => state.property[propertyId]);
  
  
  useEffect(() => {
    dispatch(getProperty(propertyId));
  }, [dispatch, propertyId]);
  
  

  return (
    <div className='property-page'>
      <div>Property Page</div>
      <li>
        <div className='property-info'>
            <div className='property-host'> 
              <NavLink to={`/users/${property?.hostId}`}/>
            </div>
          <h3 className='property-title'>{property?.title}</h3>
          <div className='property-location'>{`${property?.city}, ${property?.state}`}</div>
          <div className='property-description'>Description: {property?.description}</div>
          <div className='property-number-of-beds'>{`${property?.numberOfBeds} Bed${property?.numberOfBeds === 1 ? '' : 's'}`}</div>
          <div className='property-price'>{`$${property?.price} / night`}</div>
        </div>
      </li>
      <br />
      {/* <Review property={property} /> */}
    </div>
  );
}


export default PropertyPage;


