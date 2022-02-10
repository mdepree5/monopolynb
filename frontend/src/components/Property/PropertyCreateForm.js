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
  const [image, setImage] = useState();
  const [errors, setErrors] = useState([]);

  const hostId = useSelector(state => state.session.user.id);  

  const updateFile = (e) => {
    
    const file = e.target.files[0];
    if(file) setImage(file)
  };
  
  const handleSubmit = async(event) => {
    event.preventDefault();
    
    console.log('component-image', image);


    const newProperty = await dispatch(propertyActions.createProperty(
      {image, hostId, title, numberOfBeds, price, address, city, state, zipcode}
    ))
    // .catch(
    //   async(res) => {
    //     console.log('res', res);
    //     // const data = await res.json();
    //     // console.log('data', data);
    //     // if(data && data.errors) setErrors(data.errors);
    //   }
    // )

    // if(newProperty || !newProperty.errors) history.push(`/properties/${newProperty.id}`);

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
      <label><input type="file" onChange={updateFile} /></label>
    </Form>
  )
};

export default PropertyCreateForm;


// <img style={{width: '150px'}} src={image} alt='uploaded' /> 