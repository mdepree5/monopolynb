import {Route} from 'react-router-dom';

import PropertyPage from '../Property/PropertyPage';
import PropertyList from '../Property/PropertyList';

import './Splash.css';

const Splash = () => (
  <>
    <div className='splash-container'>
      <div className='splash-image'>hello</div>
      <h1>Where would you like to stay?</h1>
      <button onClick={() => alert('hey')}> Find out here </button>
    </div>
    <PropertyList />
    <Route path="/properties/:propertyId">
      <PropertyPage />
    </Route>
  </>
)


export default Splash;