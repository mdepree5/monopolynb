import {Link} from 'react-dom-router';
// import React, { useState } from 'react';
import Review from '../Review';


const propertyDate = date => `${date.toString().split(' ')[1]} ${date.toString().split(' ')[3]}`;

const PropertyPage = ({propertyId}) => {

  const property = '';

  console.log('PROPERTY PAGE');

  // todo ——————————————————————————————————————————————————————————————————————————————————
  // todo                     Need to refactor Property Page (curr code from property card)
  // todo ——————————————————————————————————————————————————————————————————————————————————
  

  return (
    <>
      <div>Property Page</div>
      <li>
        <div className='property-info'>
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
      
      <Review propertyId={propertyId}/>
    </>
  );
}

export default PropertyPage;


