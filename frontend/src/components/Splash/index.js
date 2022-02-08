import {Route} from 'react-router-dom';
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

  // console.log('debugger-splash-component');
  // console.log('properties', properties);
  // console.log('debugger-splash-component');
  
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
      <Route path="/properties/:propertyId">
        <PropertyPage />
      </Route>
    </>
  );
}


export default Splash;