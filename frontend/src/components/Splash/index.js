import { NavLink } from 'react-router-dom';


import './Splash.css';

const Splash = () => (
  <div className='splash-container col-list'>
    <img id='splash-image' src='https://monopolynb.s3.amazonaws.com/splash.jpeg' alt='monopoly-background' />
    <div className='floating-message col-list'>
      <h1>Where would you like to stay?</h1>
      <br />
      <NavLink id='splash-button-white' to='/properties'>
        <div>Where the dice land</div>
      </NavLink> 
    </div>
  </div>
)


export default Splash;