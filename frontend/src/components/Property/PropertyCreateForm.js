import {useHistory} from 'react-router-dom';
import React, { useState } from "react";
import * as propertyActions from "../../store/property";
import { useDispatch, useSelector } from "react-redux";
import {Form, FormInput} from '../Form';


const PropertyCreateForm = ({closeModal}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState('');
  const [numberOfBeds, setNumberOfBeds] = useState('');
  const [price, setPrice] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [errors, setErrors] = useState([]);

  const hostId = useSelector(state => state.session.user.id);

  const handleSubmit = async(event) => {
    event.preventDefault();

    const newProperty = await dispatch(propertyActions.createProperty(
      {hostId, title, numberOfBeds, price, address, city, state, zipcode}
    )).catch(
      async(res) => {
        const data = await res.json();
        // console.log('data', data);
        if(data && data.errors) setErrors(data.errors);
      }
    )

    if(newProperty || !newProperty.errors) history.push(`/properties/${newProperty.id}`);

    closeModal();
  }
  
  const updateFile = (e) => {
    const file = e.target.files[0];
    if (file) setImage(file);
  };


  return (
    <Form onSub={handleSubmit} errors={errors} buttonName={'Host Your Property!'} >
      <FormInput name='Title' state={title} setState={setTitle} />
      <FormInput name='Number Of Beds' state={numberOfBeds} setState={setNumberOfBeds} />
      <FormInput name='Price' state={price} setState={setPrice} />
      <FormInput name='Address' state={address} setState={setAddress} />
      <FormInput name='City' state={city} setState={setCity} />
      <FormInput name='State' state={state} setState={setState} />
      <FormInput name='Zipcode' state={zipcode} setState={setZipcode} />
      <label><input type="file" onChange={updateFile} /></label>
      <img style={{width: '150px'}} src={image} alt='uploaded' />
    </Form>
  )
};

export default PropertyCreateForm;