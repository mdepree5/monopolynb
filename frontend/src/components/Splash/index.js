import {Route} from 'react-router-dom';

import PropertyPage from '../Property/PropertyPage';
import PropertyList from '../Property/PropertyList';

import './Splash.css';

const Splash = () => (
  <>
    <div className='splash-container'>
      <img id='splash-image' src='https://images2.alphacoders.com/652/652776.jpg' alt='monopoly-background' />
      <div className='floating-message'>
        <h1>Where would you like to stay?</h1>
        <button onClick={() => alert('hey')}> Find out here </button>
      </div>
    </div>
    <PropertyList />
    <Route path="/properties/:propertyId">
      <PropertyPage />
    </Route>
  </>
)


export default Splash;