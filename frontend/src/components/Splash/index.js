import {Route} from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProperties } from '../../store/property';
import PropertyPage from '../Property/PropertyPage';
import ColorDisplay from './colorDisplay';
import PropertyList from '../Property/PropertyList';

// import './Splash.css';

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
      <PropertyList />
      <Route path="/properties/:propertyId">
        <PropertyPage />
      </Route>
    </>
  );
}


export default Splash;