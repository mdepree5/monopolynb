import {Link} from 'react-router-dom';

const PropertyCard = ({ property }) => (

<li>
  <div className='property-card'>
    <div className='property-host'> 
      <Link to={`/users/${property.hostId}`}/>
    </div>
    <div className='property-title'>{`Title: ${property.title}`}</div>
    <div className='property-description'>{`Description: ${property.description}`}</div>
    <div className='property-number-of-beds'>{`Number of Beds: ${property.numberOfBeds}`}</div>
    <div className='property-price'>{`Price: ${property.price}`}</div>
  </div>
</li>
)

export default PropertyCard;