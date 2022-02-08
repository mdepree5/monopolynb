import {useHistory} from 'react-router-dom';
import React, { useState } from "react";
import * as propertyActions from "../../store/property";
import { useDispatch, useSelector } from "react-redux";
import {Form, FormInput} from '../Form';


const PropertyEditForm = ({property, closeModal}) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [title, setTitle] = useState(property?.title);
  const [numberOfBeds, setNumberOfBeds] = useState(property?.numberOfBeds);
  const [price, setPrice] = useState(property?.price);
  const [address, setAddress] = useState(property?.address);
  const [city, setCity] = useState(property?.city);
  const [state, setState] = useState(property?.state);
  const [zipcode, setZipcode] = useState(property?.zipcode);
  const [errors, setErrors] = useState([]);

  const hostId = useSelector(state => state.session.user.id);

  // console.log('debugger-Property-form-component');
  // console.log('hostId', hostId);

  const handleSubmit = async(event) => {
    event.preventDefault();

    const updatedProperty = await dispatch(propertyActions.updateProperty(
      {...property, hostId, title, numberOfBeds, price, address, city, state, zipcode}
    ))

    console.log('debugger-property-form-new-property');
    console.log(updatedProperty);

    if(updatedProperty.errors) setErrors(updatedProperty.errors); //* Is this the way?

    // if(updatedProperty || !updatedProperty.errors ) history.push(`/properties/${updatedProperty.id}`);
    
    closeModal();
  }

  return (
    <Form onSub={handleSubmit} errors={errors} buttonName={'Edit Your Property!'} >
      <FormInput name='Title' state={title} setState={setTitle} required={false} />
      <FormInput name='Number Of Beds' state={numberOfBeds} setState={setNumberOfBeds} required={false} />
      <FormInput name='Price' state={price} setState={setPrice} required={false} />
      <FormInput name='Address' state={address} setState={setAddress} required={false} />
      <FormInput name='City' state={city} setState={setCity} required={false} />
      <FormInput name='State' state={state} setState={setState} required={false} />
      <FormInput name='Zipcode' state={zipcode} setState={setZipcode} required={false} />
    </Form>
  )
};

export default PropertyEditForm;

// .then(
//   async (res) => {
//     console.log('debugger-property-form-handle-submit');
//     console.log('res', res);
//     const data = await res.json();
//     if(data && data.errors) setErrors(data.errors);
//   }
// )