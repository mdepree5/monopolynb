import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
// import { Route, Switch } from "react-router-dom";
// import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Meter from './context/Meter';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const [navColor, setNavColor] = useState('blu');


  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  const colors = ['brown', 'skyblue', 'orchid', 'orange', 'red', 'yellow', 'green', 'blue'];



  useEffect(() => {
    document.addEventListener('scroll', () => {
      if(window.scrollY > 1) setNavColor('wheat')
      setNavColor('blu');
    })
  })


  return (
    <>
      <div className={`nav-bar ${navColor}`}>
        <Navigation isLoaded={isLoaded} />
      </div>
      <Meter />
      <div className='cards'>
        {colors.map(color => (
          <div className='card' key={color}>
            <div className='card-header'id={color}/>
            <div>{color}</div>
          </div>
        ))
        }
      </div>
    </>
  );
}
// {isLoaded && (
//   <Switch>
//     <Route path="/signup">
//       <SignupFormPage />
//     </Route>
//   </Switch>
// )}


export default App;