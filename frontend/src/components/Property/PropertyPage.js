// import { useEffect } from 'react';
import {useParams} from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { getProperty } from '../../store/property';

// import Review from '../Review';

// import {useProperty} from '../../context/Property';
// const PropertyPage = () => {
  //   const {currProperty} = useProperty();

//   // const sign = horoscopeObj[currSign];

//   return (
//     <div className="details">
//       <div>Property Page</div>
//       <div>{currProperty}</div>
//     </div>
//   )
// }


const PropertyPage = () => {
  // const dispatch = useDispatch();
  const {propertyId} = useParams();

  // const property = useSelector(state => state.property.listOfProperties[propertyId]);
  // console.log(property);
  
  // useEffect(() => {
  //   dispatch(getProperty(propertyId));
  // }, [dispatch, propertyId]);

  return (
    <div>
      <div>Property Page {propertyId}</div>
    </div>
  )

  // return (
  //   <>
  //     <div>Property Page</div>
  //     <li>
  //       <div className='property-info'>
  //           <div className='property-host'> 
  //             <NavLink to={`/users/${property.hostId}`}/>
  //           </div>
  //         <div className='property-title'>{property.title}</div>
  //         <div className='property-description'>{property.description}</div>
  //         <div className='property-number-of-beds'>{property.numberOfBeds}</div>
  //         <div className='property-price'>{property.price}</div>
  //         <div className='property-location'>{`${property.city}, ${property.state}`}</div>
  //       </div>
  //     </li>
  //     <Review propertyId={propertyId}/>
  //   </>
  // );
}

export default PropertyPage;


