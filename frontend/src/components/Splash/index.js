import {Route} from 'react-router-dom';

import PropertyPage from '../Property/PropertyPage';
import PropertyList from '../Property/PropertyList';

import './Splash.css';

const Splash = () => (
  <>
    <div className='splash-container'>
      <img id='splash-image' src='https://monopolynb.s3.amazonaws.com/splash.jpeg' alt='monopoly-background' />
      <div className='floating-message'>
        <h1>Where would you like to stay?</h1>
        <button onClick={() => alert('hey')}> Find out here </button>
      </div>
    </div>
    <div className='filler-box' />
    <div className='filler-box' />
    <PropertyList />
    <Route path="/properties/:propertyId">
      <PropertyPage />
    </Route>
  </>
)


export default Splash;