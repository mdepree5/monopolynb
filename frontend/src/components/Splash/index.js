import {Switch, Route} from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProperties } from '../../store/property';
import {NavLink} from 'react-router-dom';
import PropertyPage from '../Property/PropertyPage';
import ColorDisplay from './colorDisplay';

import './Splash.css';

const Splash = () => {
  const dispatch = useDispatch();

  const properties = useSelector(state => state.property.listOfProperties);

  useEffect(() => {
    dispatch(getProperties());
  }, [dispatch]);
  
  return (
    <>
      <ColorDisplay />
      <ul className='property-list-container'>
        {properties.map(property => (
          <li className='property-card' key={property.id}>
            <div>box</div>
            <NavLink to={`/properties/${property.id}`}>{property.title}</NavLink>
          </li>
        ))
        }
      </ul>
      <div>
      <Route path="/properties/:propertyId">
        <PropertyPage />
      </Route>
      </div>
    </>
  );
}

// import Meter from '../../context/Meter';
// <Meter rating={80}/>
// import PropertyList from '../Property/PropertyList';
// <div>
//   <PropertyList />
// </div>

export default Splash;