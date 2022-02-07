import { useEffect } from 'react';
import {NavLink} from 'react-router-dom';
import {useParams} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProperty } from '../../store/property';

// import Review from '../Review';


const PropertyPage = () => {
  const dispatch = useDispatch();
  const {propertyId} = useParams();


  console.log('debugger-component')
  
  const state = useSelector(state => state.property);
  const property = useSelector(state => state.property[propertyId]);

  console.log(state)
  console.log(property);
  
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
        <div>Put Review Component Here</div>
      </li>
    </>
  );
}

{/* <Review propertyId={propertyId}/> */}

// const PropertyPage = () => (
//   <div>Property Page</div>
// )


export default PropertyPage;


