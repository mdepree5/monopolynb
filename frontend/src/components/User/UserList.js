// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getPropertiesByUserId } from '../../store/property';
// import PropertyCard from './PropertyCard';


// const UserList = () => {
//   const dispatch = useDispatch();

//   const properties = useSelector(state => state.property.listOfProperties);

//   useEffect(() => {
//     dispatch(getPropertiesByUserId());
//   }, [dispatch]);

//   return (
//     <div>
//       <ul className='property-list-container'>
//         {
//           properties.map(property => (
//           <PropertyCard
//             key={property.id}
//             id={`property-${property.id}`}
//             title={property.title}
//             property={property}
//           />
//         ))
//         }
//       </ul>
//     </div>
//   );
// };

// export default UserList;