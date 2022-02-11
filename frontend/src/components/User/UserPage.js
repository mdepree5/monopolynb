import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProperties } from '../../store/property';
import PropertyCard from '../Property/PropertyCard';
import {useParams} from 'react-router-dom';




const UserPage = () => {
  const {userId} = useParams();

  const dispatch = useDispatch();

  const properties = useSelector(state => state.property.listOfProperties);

  const userProperties = properties.filter(property => {
    console.log('property', property?.hostId === userId)
    return property?.hostId === userId
    });

    console.log(userId)
    console.log('userProperties', userProperties);

  useEffect(() => {
    dispatch(getProperties());
  }, [dispatch]);
  


  return (
    <div>
      <h2>User Page</h2>
      <div>{`Hello user ${userId}`}</div>
      <br />
      <ul className='explore-all-properties'>
      {
        properties.map(property => (
        <PropertyCard
          key={property.id}
          id={`property-${property.id}`}
          title={property.title}
          property={property}
        />
      ))
      }
    </ul>
    </div>
  );
};

// onCLick={() => setCurrProperty(property)}
export default UserPage;
