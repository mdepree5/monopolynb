import {Link} from 'react-router-dom';

const PropertyCard = ({ property }) => (

<li>
  <div className='property-card'>
    <h4 className='property-title'>{property.title}</h4>
    <div className='property-location'>{`${property.city}, ${property.state}`}</div>
    <div className='property-price'>{`$${property.price} / night`}</div>
    <div className='property-host'> 
      <Link to={`/users/${property.hostId}`}>Link to host</Link>
    </div>
    <div className='property-host'> 
      <Link to={`/properties/${property.id}`}>Link to Property Page</Link>
    </div>
  </div>
</li>
)

export default PropertyCard;