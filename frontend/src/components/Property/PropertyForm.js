import {useHistory} from 'react-router-dom';
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { singlePublicFileUpload, singleMulterUpload } from '../../awsS3';
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
  const [cardImages, setCardImages] = useState(edit ? property?.cardImage : '');
  const [errors, setErrors] = useState([]);
  const [validationErrors, setValidationErrors] = useState([]);

  const hostId = useSelector(state => state.session.user.id);  

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // const imageUrl = await singlePublicFileUpload(cardImage); //! => Expect String URL
    // console.log(`%c imageUrl:`, `color:yellow`, imageUrl)

    // const propertyData = {...property, hostId, title, numberOfBeds, price, address, city, state, zipcode, cardImages}

    const formData = new FormData();
    if(edit) {
      formData.append('id', property?.id)
    }
    formData.append('hostId', hostId)
    formData.append('title', title)
    formData.append('numberOfBeds', numberOfBeds)
    formData.append('price', price)
    formData.append('address', address)
    formData.append('city', city)
    formData.append('state', state)
    formData.append('zipcode', zipcode)
    if(cardImages) {
      for (let cardImage of cardImages) {
        formData.append('images', cardImage)
      }
    }

    if (edit) {
      const updated = await dispatch(updateProperty(formData, property?.id));
      if (updated?.errors) setErrors(updated?.errors);
      if (updated?.id){
        history.push(`/`);
        history.push(`/properties/${updated?.id}`);
        return closeModal();
      }
      return 'failed to edit';
    }

    const created = await dispatch(createProperty(formData));

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
    if(numberOfBeds < 1 || numberOfBeds > 1000) errors.push('Please list between 1 and 1000 beds.');
    if(price < 10 || price > 3000) errors.push('Please provide a price between $10 and $3,000 dollars.');
    if(address?.length < 3) errors.push('Please provide an address.');
    if(city?.length < 2) errors.push('Please provide a city.');
    if(state?.length < 2) errors.push('Please provide a state.');
    if(zipcode?.length !== 5) errors.push('Please provide a zipcode.');
  
    setValidationErrors(errors);
  }, [title, numberOfBeds, price, address, city, state, zipcode])



  return (
    <Form onSub={handleSubmit} validationErrors={validationErrors} errors={errors} buttonName={edit ? 'Update' : 'Host Your Property!'} >
      <div className={edit ? 'edit-property-form-modal' : 'create-property-form-modal'}>
        <div>
          <FormInput name='Title' state={title} setState={setTitle} />
          <NumberInput min={1} name='Number Of Beds' state={numberOfBeds} setState={setNumberOfBeds} />
          <NumberInput min={10} name='Price' state={price} setState={setPrice} />
          <FormInput name='Address' state={address} setState={setAddress} />
          <FormInput name='City' state={city} setState={setCity} />
          <FormInput name='State' state={state} setState={setState} />
          <FormInput name='Zipcode' state={zipcode} setState={setZipcode} />
          
          {/* <FormInput name='Image' state={cardImages} setState={setCardImages} /> */}
          <div className='form-input'>
            <label htmlFor='images'>Image(s)</label>
            <input style={{cursor:'pointer'}} type='file' accept='image/*'
              multiple
              id='images'
              onChange={e => setCardImages(e.target.files)}/>
          </div>

        </div>
        <div id='property-create-form-home-icon-container' >
          <img id='property-create-form-home-icon' src='https://monopolynb.s3.amazonaws.com/favicon.png' alt='home-icon' />
        </div>
      </div>
    </Form>

  )
};

export default PropertyForm;
