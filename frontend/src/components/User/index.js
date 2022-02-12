import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPropertiesByUserId } from '../../store/property';
import PropertyCard from '../Property/PropertyCard';
import {useParams} from 'react-router-dom';

import './User.css';


const UserPage = () => {
  const dispatch = useDispatch();
  const {userId} = useParams();

  const properties = useSelector(state => state.property.listOfProperties);
  // const properties = useSelector(state => state.property.listOfProperties);

  useEffect(() => {
    dispatch(getPropertiesByUserId(userId));
  }, [dispatch, userId]);



  return (
    <div className='center-body'>
      <ul className='user-splash'>
        <li><h2>User Page</h2></li>
        <li>{`Hello user ${userId}`}</li>
        <li><div>My Listings</div></li>
      </ul>
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
