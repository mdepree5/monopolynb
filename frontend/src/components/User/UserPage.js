import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPropertiesByUserId } from '../../store/property';
import PropertyCard from '../Property/PropertyCard';
import {useParams} from 'react-router-dom';




const UserPage = () => {
  const dispatch = useDispatch();
  const {userId} = useParams();

  const properties = useSelector(state => state.property.listOfProperties);

  useEffect(() => {
    dispatch(getPropertiesByUserId(userId));
  }, [dispatch, userId]);
  


  return (
    <div>
      <h2>User Page</h2>
      <div>{`Hello user ${userId}`}</div>
      <br />
      <div>My Listings</div>
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
