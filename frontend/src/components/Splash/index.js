import { NavLink } from 'react-router-dom';


import './Splash.css';

const Splash = () => (
  <>
    <div className='splash-container'>
      <img id='splash-image' src='https://monopolynb.s3.amazonaws.com/splash.jpeg' alt='monopoly-background' />
      <div className='floating-message'>
        <h1>Where would you like to stay?</h1>
        <br />
        <div id='splash-button-white'> <NavLink to='/properties'>Where the dice land</NavLink> </div>
      </div>
    </div>
    <div className='filler-box' />
  </>
)


export default Splash;