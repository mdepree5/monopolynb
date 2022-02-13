import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
// todo ——————————————————————————————————————————————————————————————————————————————————
import * as propertyActions from "../../store/property";
import {Form, FormInput} from '../Form';
// todo ——————————————————————————————————————————————————————————————————————————————————

const PropertyEditForm = ({property, closeModal}) => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState(property?.title);
  const [numberOfBeds, setNumberOfBeds] = useState(property?.numberOfBeds);
  const [price, setPrice] = useState(property?.price);
  const [address, setAddress] = useState(property?.address);
  const [city, setCity] = useState(property?.city);
  const [state, setState] = useState(property?.state);
  const [zipcode, setZipcode] = useState(property?.zipcode);
  const [errors, setErrors] = useState([]);
  const [validationErrors, setValidationErrors] = useState([]);

  const hostId = useSelector(state => state.session.user.id);

  const handleSubmit = async(event) => {
    event.preventDefault();

    const updatedProperty = await dispatch(propertyActions.updateProperty(
      {...property, hostId, title, numberOfBeds, price, address, city, state, zipcode}
    )).catch(async(res) => {
      const data = await res.json();
      if(data && data.errors) setErrors(data.errors);
    })

    if(updatedProperty?.errors) setErrors(updatedProperty?.errors); 
    
    return closeModal();
  }

  useEffect(()=> {
    const errors = [];
    if(!title) errors.push('What is your property called? We\'d love to know!');
    if(numberOfBeds < 1 || numberOfBeds > 1000) errors.push('Please list between 1 and 1000 beds for your property.');
    if(price < 10 || price > 3000) errors.push('Please provide a price between $10 and $3,000 dollars for your property.');
    if(address.length < 3) errors.push('Please provide an address for your property.');
    if(city.length < 2) errors.push('Please provide a city for your property.');
    if(state.length < 2) errors.push('Please provide a state for your property.');
    if(zipcode.length !== 5) errors.push('Please provide a zipcode for your property.');
  
    setValidationErrors(errors);
  }, [title, numberOfBeds, price, address, city, state, zipcode])


  return (
    <Form onSub={handleSubmit} validationErrors={validationErrors} errors={errors} buttonName={'Edit Your Property!'} >
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

export default PropertyEditForm;