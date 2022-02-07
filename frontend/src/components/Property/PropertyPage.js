// import { useEffect } from 'react';
import {useProperty} from '../../context/Property';
// import {useParams} from 'react-router-dom';

// import { useDispatch, useSelector } from 'react-redux';
// import { getProperty } from '../../store/property'

// import Review from '../Review';



const PropertyPage = () => {
  const {currProperty} = useProperty();

  // const sign = horoscopeObj[currSign];

  return (
    <div className="details">
      <div>Property Page</div>
      <div>{currProperty}</div>
    </div>
  )
}



/* 
const PropertyPage = () => {
  const {propertyId} = useParams();
  const dispatch = useDispatch();

  console.log('property-page-debugger');
  console.log(propertyId);

  const property = useSelector(state => state.property.listOfProperties[propertyId]);
  
  console.log('debugger-component');
  console.log(properties);
  console.log('debugger-component');

  useEffect(() => {
    dispatch(getProperty(propertyId));
  }, [dispatch, propertyId]);




  return (
    <div>
      <div>Property Page</div>
      <div>{propertyId}</div>
    </div>
  )

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
      
    </>
  );
}
//<Review propertyId={propertyId}/>
 */

export default PropertyPage;


