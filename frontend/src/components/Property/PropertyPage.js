// import React, { useState } from 'react';
import Review from '../Review';



const PropertyPage = () => {

  const propertyId = 1;

  return (
    <>
      <div>Property Page</div>
      <Review propertyId={propertyId}/>
    </>
  );
}

export default PropertyPage;


