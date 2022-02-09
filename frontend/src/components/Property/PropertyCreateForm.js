import {useHistory} from 'react-router-dom';
import React, { useState } from "react";
import * as propertyActions from "../../store/property";
import { useDispatch, useSelector } from "react-redux";
import {Form, FormInput} from '../Form';


const PropertyCreateForm = ({closeModal}) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [title, setTitle] = useState('');
  const [numberOfBeds, setNumberOfBeds] = useState('');
  const [price, setPrice] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [errors, setErrors] = useState([]);

  const hostId = useSelector(state => state.session.user.id);

  // console.log('debugger-Property-form-component');
  // console.log('hostId', hostId);

  const handleSubmit = async(event) => {
    event.preventDefault();

    const newProperty = await dispatch(propertyActions.createProperty(
      {hostId, title, numberOfBeds, price, address, city, state, zipcode}
    ))

    // console.log('debugger-property-form-new-property');
    // console.log(newProperty);

    if(newProperty.errors) setErrors(newProperty.errors); //* Is this the way?

    if(newProperty || !newProperty.errors ) history.push(`/properties/${newProperty.id}`);
    
    closeModal();
  }

  return (
    <Form onSub={handleSubmit} errors={errors} buttonName={'Host Your Property!'} >
      <FormInput name='Title' state={title} setState={setTitle} />
      <FormInput name='Number Of Beds' state={numberOfBeds} setState={setNumberOfBeds} />
      <FormInput name='Price' state={price} setState={setPrice} />
      <FormInput name='Address' state={address} setState={setAddress} />
      <FormInput name='City' state={city} setState={setCity} />
      <FormInput name='State' state={state} setState={setState} />
      <FormInput name='Zipcode' state={zipcode} setState={setZipcode} />
    </Form>
  )
};

export default PropertyCreateForm;

// .then(
//   async (res) => {
//     console.log('debugger-property-form-handle-submit');
//     console.log('res', res);
//     const data = await res.json();
//     if(data && data.errors) setErrors(data.errors);
//   }
// )