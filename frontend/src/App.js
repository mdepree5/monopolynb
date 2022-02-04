import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
// import { Route, Switch } from "react-router-dom";
// import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const [navColor, setNavColor] = useState('blu');
  const [meter, setMeter] = useState(0);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  const colors = ['brown', 'skyblue', 'orchid', 'orange', 'red', 'yellow', 'green', 'blue'];

  const Meter = () => {
    setInterval(() => {
        setMeter(meter => meter + 1)
    }, 100);

    return (
    <div className='meter'>
      <label for="fuel">Progress Bar beta</label>
      <meter id="fuel"
        min="0" max="100"
        low="33" high="66" optimum="80"
        value={meter}
      > at 50/100
      </meter>
    </div>
  )
  }

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