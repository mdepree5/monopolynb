import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProperties, getPropertiesByUserId } from '../../store/property';
import PropertyFormModal from './PropertyFormModal';
import PropertyCard from './PropertyCard';
// todo ——————————————————————————————————————————————————————————————————————————————————

const PropertyList = ({userId = null}) => {
  const dispatch = useDispatch();

  const properties = useSelector(state => state.property.listOfProperties);

  const thunk = userId ? getPropertiesByUserId(userId) : getProperties();

  useEffect(() => {dispatch(thunk)}, [dispatch]);

  return properties.length > 0 ? (
    <div className='properties-container'>
      {properties.map(property => (
        <PropertyCard
          key={property.id}
          id={`property-${property.id}`}
          title={property.title}
          property={property}
        />
      ))}
    </div>
  ) : (
    <ul>
      <li><h4>No Listings yet... why not start now?</h4></li>
      <li><PropertyFormModal /></li>
    </ul>
  );
};

export default PropertyList;
