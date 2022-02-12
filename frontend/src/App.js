import {Switch, Route} from 'react-router-dom';
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
// todo ——————————————————————————————————————————————————————————————————————————————————
import {restoreUser} from "./store/session";
// todo ——————————————————————————————————————————————————————————————————————————————————
import Navigation from './components/Navigation';
import Splash from './components/Splash';
import UserPage from './components/User';
import PropertyList from './components/Property/PropertyList';
import PropertyPage from './components/Property';
import ConfirmDelete from './components/Property/ConfirmDelete';
import PageNotFound from './components/PageNotFound';
import Footer from './components/Footer';
// todo ——————————————————————————————————————————————————————————————————————————————————

const App = () => {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  useEffect(() => window.scroll({top: 0, left: 0, behavior: 'smooth'}));

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      <div className='main-body'>
        <Switch>
          <Route exact path={'/'}><Splash /></Route>
          <Route path='/users/:userId'><UserPage /></Route>
          <Route exact path='/properties/'><PropertyList /></Route>
          <Route path='/properties/:propertyId'><PropertyPage /></Route>
          <Route path='/confirmDelete'><ConfirmDelete/></Route>
          <Route><PageNotFound /></Route>
        </Switch>
      </div>      
      <Footer />
    </>
  );
}

export default App;