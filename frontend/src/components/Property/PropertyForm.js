import React, { useState } from "react";
import * as propertyActions from "../../store/property";
import { useDispatch } from "react-redux";
import Form, FormInput from '../Form';


const PropertyForm = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [numberOfBeds, setNumberOfBeds] = useState(2);
  const [price, setPrice] = useState(20);
  const [address, setAddress] = useState('');
  const [state, setState] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [errors, setErrors] = useState([]);

  const handleSubmit = event => {
    event.preventDefault()

    return dispatch(propertyActions.createProperty(
      {title, description, numberOfBeds, price, address, state, zipcode}
    )).catch(
      async (res) => {
        const data = await res.json();
        if(data && data.errors) setErrors(data.errors);
      }
    )
  }

  return (
    <Form onSub={handleSubmit} errors={errors} buttonName={'Host Your Property!'} >
      <FormInput name='Title' state={title} setState={setTitle} />
      <FormInput name='Description' state={description} setState={setDescription} />
      <FormInput name='Price' state={price} setState={setPrice} />
      <FormInput name='Address' state={address} setState={setAddress} />
      <FormInput name='State' state={state} setState={setState} />
      <FormInput name='Zipcode' state={zipcode} setState={setZipcode} />
    </Form>
  )
};

export default PropertyForm;