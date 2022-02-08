import {Switch, Route} from 'react-router-dom';
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
// import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from './components/Navigation';
import Splash from './components/Splash';
import UserPage from './components/User/UserPage';
import PropertyPage from './components/Property/PropertyPage';
import ConfirmDelete from './components/Property/ConfirmDelete';
import PageNotFound from './components/PageNotFound';


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <div className={`nav-bar`}>
        <Navigation isLoaded={isLoaded} />
      </div>

      <Switch>
        <Route exact path={'/'}><Splash /></Route>
        <Route path='/users/:userId'><UserPage /></Route>
        <Route path='/properties/:propertyId'><PropertyPage /></Route>
        <Route path='/confirmDelete'><ConfirmDelete/></Route>
        <Route><PageNotFound /></Route>
      </Switch>
    </>
  );
}

export default App;