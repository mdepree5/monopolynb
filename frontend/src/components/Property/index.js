import { useEffect, useState } from 'react';
import {useParams, NavLink} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// todo ——————————————————————————————————————————————————————————————————————————————————
import { getProperty } from '../../store/property';
import PropertyEditModal from './PropertyEditModal';
import PropertyDeleteButton from './PropertyDeleteButton';
// todo ——————————————————————————————————————————————————————————————————————————————————
import Review from '../Review';
import Image from '../Image';
import './Property.css';
// todo ——————————————————————————————————————————————————————————————————————————————————

const PropertyPage = () => {
  const dispatch = useDispatch();
  const [belongsToUser, setBelongsToUser] = useState(false);
  const {propertyId} = useParams();

  // const property = useSelector(state => state?.property?.listOfProperties[0]);

  const property = useSelector(state => state?.property[propertyId]);
  const sessionUser = useSelector(state => state?.session?.user);
  
  useEffect(() => {dispatch(getProperty(propertyId))}, [dispatch, propertyId]);
  
  useEffect(() => {    
    if(sessionUser?.id === property?.hostId) setBelongsToUser(true);
    else setBelongsToUser(false);
  }, [sessionUser, property])
  
  useEffect(() => window.scroll({top: 0, left: 0}));

  let propertyColor;
  if(property?.price > 0 && property?.price <= 20) propertyColor = 'brown';
  if(property?.price > 20 && property?.price <= 40) propertyColor = 'skyblue';
  if(property?.price > 40 && property?.price <= 60) propertyColor = 'orchid';
  if(property?.price > 60 && property?.price <= 80) propertyColor = 'orange';
  if(property?.price > 80 && property?.price <= 100) propertyColor = 'red';
  if(property?.price > 100 && property?.price <= 120) propertyColor = 'yellow';
  if(property?.price > 120 && property?.price <= 150) propertyColor = 'green';
  if(property?.price > 150) propertyColor = 'blue';

  return (
    
    <div className='property-page'>
      <div className='property-page-wrapper'>
        <div className='property-card-image' id={propertyColor} />
        <div className='property-data-container'>
          <div className='property-head'>
            <ul className='property-title-left'>
              <h1 className='property-title'>{property?.title}</h1>
              <h3 className='property-location'>{`${property?.city}, ${property?.state}`}</h3>
            </ul>
            <div className='property-title-right'> {belongsToUser &&(
              <>
                <PropertyEditModal property={property} />
                <PropertyDeleteButton propertyId={propertyId} />
              </>
            )}</div>
          </div>
          <div style={{width:'250px', margin: 0}} className="line"></div>  
          <br />
          <div className='property-host'> <NavLink to={`/users/${property?.hostId}`}>{`Hosted by ${property?.User?.firstName} ${property?.User?.lastName.slice(0, 1)}. `}<i className="far fa-user" /></NavLink></div>
          <div className='property-number-of-beds'>{`${property?.numberOfBeds} Bed${property?.numberOfBeds === 1 ? '' : 's'}`}</div>
          <div className='property-price'>{`$${property?.price} / night`}</div>
        </div>

        <div style={{width:'75%'}} className="line"></div>
        <Image propertyId={propertyId}/>
        <div style={{width:'75%'}} className="line"></div>
        <Review propertyId={propertyId} />
        <div className='filler-box' style={{backgroundColor:'white'}}/>
      </div>
    </div>
  );
}



export default PropertyPage;