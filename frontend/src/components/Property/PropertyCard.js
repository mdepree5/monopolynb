import {Link} from 'react-dom-router';

const propertyDate = date => `${date.toString().split(' ')[1]} ${date.toString().split(' ')[3]}`;

const PropertyCard = ({ property }) => (
<li>
  <div className='property-user-info'>
    <div className='property-host'> 
      <Link to={`/users/${property.hostId}`}/>
    </div>
    <div className='property-title'>{property.title}</div>
    <div className='property-description'>{property.description}</div>
    <div className='property-number-of-beds'>{property.numberOfBeds}</div>
    <div className='property-price'>{property.price}</div>
    <div className='property-date'>{propertyDate(property.updatedAt ? property.updatedAt : property.createdAt)}</div>
  </div>
</li>
)
export default PropertyCard;