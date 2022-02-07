import React, { useState } from "react";
import * as propertyActions from "../../store/property";
import { useDispatch, useSelector } from "react-redux";
import {Form, FormInput} from '../Form';


const PropertyForm = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [numberOfBeds, setNumberOfBeds] = useState('');
  const [price, setPrice] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [errors, setErrors] = useState([]);

  const hostId = useSelector(state => state.session.user.id);

  console.log('hostId', hostId);


  // useEffect(() => {
  //   dispatch(getPropertyId)
  // }, [dispatch])

  const handleSubmit = event => {
    event.preventDefault();
    
    console.log('debugger-component');

    setErrors([]); //* is this necessary? Why is it important in LoginForm handleSubmit?
    return dispatch(propertyActions.createProperty(
      {hostId, title, numberOfBeds, price, address, city, state, zipcode}
    )).catch(
      async (res) => {
        const data = await res.json();
        console.log('d')
        if(data && data.errors) setErrors(data.errors);
      }
    )
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

export default PropertyForm;