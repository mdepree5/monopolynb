import {Switch, Route} from 'react-router-dom';
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
// import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from './components/Navigation';
import Splash from './components/Splash';


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const [navColor, setNavColor] = useState('blu');

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);



// !!!! ——————————————————————————————————————————————————————————————————————————————————
  useEffect(() => {
    document.addEventListener('scroll', () => {
      if(window.scrollY > 1) setNavColor('wheat')
      setNavColor('blu');
    })
  })
// !!!! ——————————————————————————————————————————————————————————————————————————————————


  return (
    <>
      <div className={`nav-bar ${navColor}`}>
        <Navigation isLoaded={isLoaded} />
      </div>

      <Switch>
        <Route exact path={['/', 'users/:userId', '/properties/:propertyId']}>
          <Splash />
        </Route>
        <Route><h2>Page Not Found</h2></Route>
      </Switch>
    </>
  );
}

/* 

import PropertyPage from './components/Property/PropertyPage';
import UserPage from './components/User/UserPage';

<Switch>
  <Route exact path={'/'}><Splash /></Route>
  <Route path='/users/:userId'><UserPage /></Route>
  <Route path='/properties/:propertyId'><PropertyPage /></Route>
  <Route><h2>Page Not Found</h2></Route>

</Switch>
 */

export default App;