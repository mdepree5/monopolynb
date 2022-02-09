import {useHistory} from 'react-router-dom';

const PropertyCard = ({ property }) => {
  const history = useHistory();
  
  let propertyColor;
  if(property.price > 0 && property.price <= 20) propertyColor = 'brown';
  if(property.price > 20 && property.price <= 40) propertyColor = 'skyblue';
  if(property.price > 40 && property.price <= 60) propertyColor = 'orchid';
  if(property.price > 60 && property.price <= 80) propertyColor = 'orange';
  if(property.price > 80 && property.price <= 100) propertyColor = 'red';
  if(property.price > 100 && property.price <= 120) propertyColor = 'yellow';
  if(property.price > 120 && property.price <= 150) propertyColor = 'green';
  // if(property.price > 150 && property.price <= 200) propertyColor = 'blue';
  if(property.price > 150) propertyColor = 'blue';

  
  const handleClick = () => history.push(`/properties/${property.id}`);

  return (
    <li>
      <ul onClick={handleClick} className='property-card'>
        <li className='property-card-image-placeholder' id={propertyColor} />
        <li><h4 className='property-title'>{property.title}</h4></li>
        <li />
        <li className='property-location'>{property.city}</li>
        <li className='property-price'>{`$${property.price} / night`}</li>
        <li/>
      </ul>
    </li>
  )
};

export default PropertyCard;