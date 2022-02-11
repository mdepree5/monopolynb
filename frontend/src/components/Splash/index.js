import { NavLink } from 'react-router-dom';


import './Splash.css';

const Splash = () => (
  <>
    <div className='splash-container'>
      <img id='splash-image' src='https://monopolynb.s3.amazonaws.com/splash.jpeg' alt='monopoly-background' />
      <div className='floating-message'>
        <h1>Where would you like to stay?</h1>
        {/* <button onClick={() => alert('hey')}> Find out here </button> */}
        <ul id='splash-button-white'>
          <li><NavLink to='/properties'>Where the dice land</NavLink></li>
        </ul>
      </div>
    </div>
    <div className='filler-box' />
  </>
)


export default Splash;