import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProperties } from '../../store/property';
// import {useProperty} from '../../context/Property';
import PropertyCard from './PropertyCard';
import { Route, Switch } from "react-router-dom";
import PropertyPage from './PropertyPage';



const PropertyList = () => {
  const dispatch = useDispatch();
  // const {currProperty, setCurrProperty} = useProperty();

  const properties = useSelector(state => state.property.listOfProperties);

  // console.log('debugger component')
  // console.log(currProperty);
  useEffect(() => {
    dispatch(getProperties());
  }, [dispatch]);

  return (
    <div>
      <ul className='property-list-container'>
        {
          properties.map(property => (
          <PropertyCard
            key={property.id}
            id={`property-${property.id}`}
            title={property.title}
            property={property}
          />
        ))
        }
      </ul>
      <br />
      <div>Hello World</div>
      <div>
        <Switch>
          <Route path='/properties/:propertyId'>
            <PropertyPage />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

// onCLick={() => setCurrProperty(property)}
export default PropertyList;
