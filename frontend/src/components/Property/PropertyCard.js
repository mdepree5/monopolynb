import {NavLink, Route, Switch} from 'react-router-dom';
import PropertyPage from './PropertyPage';
import UserPage from '../User/UserPage';

const PropertyCard = ({ property }) => {
  let propertyColor;

  if(property.price > 0 && property.price <= 20) propertyColor = 'brown';
  if(property.price > 20 && property.price <= 40) propertyColor = 'skyblue';
  if(property.price > 40 && property.price <= 60) propertyColor = 'orchid';
  if(property.price > 60 && property.price <= 80) propertyColor = 'orange';
  if(property.price > 80 && property.price <= 100) propertyColor = 'red';
  if(property.price > 100 && property.price <= 120) propertyColor = 'yellow';
  if(property.price > 120 && property.price <= 150) propertyColor = 'green';
  if(property.price > 150 && property.price <= 200) propertyColor = 'blue';

  return (
    <li>
      <div className='property-card'>
        <div className='image-card-placeholder' id={propertyColor} >img</div>
        <div>
          <h4 className='property-title'>{property.title}</h4>
          <div className='property-location'>{`${property.city}, ${property.state}`}</div>
          <div className='property-price'>{`$${property.price} / night`}</div>
          <div className='property-host'> 
            <NavLink to={`/users/${property.hostId}`}>Link to host</NavLink>
          </div>
          <div className='property-host'> 
            <Switch>
              <Route path="/properties/:propertyId">
                <PropertyPage />
              </Route>
              <Route path="/properties/:hostId">
                <UserPage />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </li>
  )
};

//<NavLink to={`/properties/${property.id}`}>Link to Property Page</NavLink>

export default PropertyCard;