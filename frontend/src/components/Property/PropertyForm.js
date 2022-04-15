import {useHistory} from 'react-router-dom';
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { singlePublicFileUpload, singleMulterUpload } from '../../awsS3';
// todo ——————————————————————————————————————————————————————————————————————————————————
import {createProperty, updateProperty} from "../../store/property";
import {Form, FormInput, NumberInput} from '../Form';
// todo ——————————————————————————————————————————————————————————————————————————————————


const PropertyForm = ({edit, property, closeModal}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  
  const [title, setTitle] = useState(edit ? property?.title : '');
  const [numberOfBeds, setNumberOfBeds] = useState(edit ? property?.numberOfBeds : '');
  const [price, setPrice] = useState(edit ? property?.price : '');
  const [address, setAddress] = useState(edit ? property?.address : '');
  const [city, setCity] = useState(edit ? property?.city : '');
  const [state, setState] = useState(edit ? property?.state : '');
  const [zipcode, setZipcode] = useState(edit ? property?.zipcode : '');
  const [cardImage, setCardImage] = useState(edit ? property?.cardImage : '');
  const [errors, setErrors] = useState([]);
  const [validationErrors, setValidationErrors] = useState([]);

  const hostId = useSelector(state => state.session.user.id);  

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const imageUrl = await singlePublicFileUpload(cardImage); //! => Expect String URL
    console.log(`%c imageUrl:`, `color:yellow`, imageUrl)


    const propertyData = {...property, hostId, title, numberOfBeds, price, address, city, state, zipcode, cardImage}

    if (edit) {
      const updated = await dispatch(updateProperty(propertyData, property?.id));
      if (updated?.errors) setErrors(updated?.errors);
      return closeModal();
    }

    const created = await dispatch(createProperty(propertyData));

    if (created?.errors) setErrors(created?.errors);
    if (created?.id) {
      history.push(`/properties/${created?.id}`);
      return closeModal();
    }
    return 'Failed to Create';
  };




  useEffect(()=> {
    const errors = [];
    if(!title) errors.push('What is your property called? We\'d love to know!');
    if(numberOfBeds < 1 || numberOfBeds > 1000) errors.push('Please list between 1 and 1000 beds for your property.');
    if(price < 10 || price > 3000) errors.push('Please provide a price between $10 and $3,000 dollars for your property.');
    if(address?.length < 3) errors.push('Please provide an address for your property.');
    if(city?.length < 2) errors.push('Please provide a city for your property.');
    if(state?.length < 2) errors.push('Please provide a state for your property.');
    if(zipcode?.length !== 5) errors.push('Please provide a zipcode for your property.');
  
    setValidationErrors(errors);
  }, [title, numberOfBeds, price, address, city, state, zipcode])



  return (
    <Form onSub={handleSubmit} validationErrors={validationErrors} errors={errors} buttonName={edit ? 'Update' : 'Host Your Property!'} >
      <div className={edit ? '' : 'create-property-form-modal'}>
        <div>
          <FormInput name='Title' state={title} setState={setTitle} />
          <NumberInput min={1} name='Number Of Beds' state={numberOfBeds} setState={setNumberOfBeds} />
          <NumberInput min={10} name='Price' state={price} setState={setPrice} />
          <FormInput name='Address' state={address} setState={setAddress} />
          <FormInput name='City' state={city} setState={setCity} />
          <FormInput name='State' state={state} setState={setState} />
          <FormInput name='Zipcode' state={zipcode} setState={setZipcode} />
          
          <FormInput name='Image' state={cardImage} setState={setCardImage} />

          <input style={{cursor:'pointer'}} type='file' accept='image/*'
            onChange={e => setCardImage(e.target.files[0])}/>


        </div>
        <div id='property-create-form-home-icon-container' >
          <img id='property-create-form-home-icon' src='https://monopolynb.s3.amazonaws.com/favicon.png' alt='home-icon' />
        </div>
      </div>
    </Form>

  )
};

export default PropertyForm;
