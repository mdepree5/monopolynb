import {Route} from 'react-router-dom';

import PropertyPage from '../Property/PropertyPage';
import ColorDisplay from './colorDisplay';
import PropertyList from '../Property/PropertyList';

import './Splash.css';

const Splash = () => (
  <>
    <ColorDisplay />
    <PropertyList />
    <Route path="/properties/:propertyId">
      <PropertyPage />
    </Route>
  </>
)


export default Splash;