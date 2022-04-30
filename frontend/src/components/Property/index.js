import { useEffect, useState } from 'react';
import {useParams, NavLink} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// todo ——————————————————————————————————————————————————————————————————————————————————
import { getProperty } from '../../store/property';
import PropertyFormModal from '../Property/PropertyModal';
import PropertyDeleteButton from './PropertyDeleteButton';
// todo ——————————————————————————————————————————————————————————————————————————————————
import Review from '../Review';
import Image from '../Image';
import './Property.css';
// todo ——————————————————————————————————————————————————————————————————————————————————

const PropertyPage = () => {
  const dispatch = useDispatch();
  const {propertyId} = useParams();

  const property = useSelector(state => state?.property[propertyId]);
  
  useEffect(() => {dispatch(getProperty(propertyId))}, [dispatch, propertyId]);

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
    <div className='property-page col-list'>
      <div className='property-card-image' id={propertyColor} />

      <PropertyHeader property={property}/>
        <div style={{width:'75%'}} className="line"/>
      <Image propertyId={propertyId}/>
        <div style={{width:'75%'}} className="line"/>
      <Review propertyId={propertyId} />
        {/* <div className='filler-box' style={{backgroundColor:'white'}}/> */}
    </div>
  );
}


const PropertyHeader = ({property}) => {
  const {propertyId} = useParams();
  const sessionUser = useSelector(state => state?.session?.user);

  return (
    <div className='property-header row-list'>
      
        <div className='property-header-left'>
          <h1>{property?.title}</h1>
          <h3>{`${property?.city}, ${property?.state}`}</h3>
          
          <div style={{width:'14em', margin: 0}} className="line"/>

          <NavLink to={`/users/${property?.hostId}`}>{`Hosted by ${property?.User?.firstName} ${property?.User?.lastName.slice(0, 1)}. `}<i className="far fa-user" /></NavLink>
          <div>{`${property?.numberOfBeds} Bed${property?.numberOfBeds === 1 ? '' : 's'}`}</div>
          <div><strong>${property?.price}</strong> night</div>
        </div>

        <div className='property-header-right'> {sessionUser?.id === property?.hostId &&(<>
            <PropertyFormModal name='Edit Property' edit={true} property={property} />
            <PropertyDeleteButton propertyId={propertyId} />
          </>)}
        </div>
    
  </div>
  )
}

export default PropertyPage;