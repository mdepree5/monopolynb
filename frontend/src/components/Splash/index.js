import {Route} from 'react-router-dom';

import PropertyPage from '../Property/PropertyPage';
import PropertyList from '../Property/PropertyList';

import './Splash.css';

const Splash = () => (
  <>
    <div className='splash-container'>
      <div className='splash-image'>hello</div>
    </div>
    <PropertyList />
    <Route path="/properties/:propertyId">
      <PropertyPage />
    </Route>
  </>
)


export default Splash;