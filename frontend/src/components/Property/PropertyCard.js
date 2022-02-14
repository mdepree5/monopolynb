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
  if(property.price > 150) propertyColor = 'blue';

  
  console.log(property);
  const handleClick = () => history.push(`/properties/${property.id}`);

  return (
      <div onClick={handleClick} className='property-card'>
        <div className='property-color-profile' id={propertyColor} />
        <div><h2 className='property-title'>{property.title}</h2></div>
        <div><img className='card-image' src={property.cardImage} alt='card' /></div>
        <div className='property-footer-info'>
          <div>{property.city}</div>
          <div>{`$${property.price} / night`}</div>
        </div>
      </div>
  )
};

export default PropertyCard;