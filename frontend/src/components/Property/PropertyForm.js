import React, { useState } from "react";
import * as propertyActions from "../../store/property";
import { useDispatch } from "react-redux";
import FormInput from '../Form';

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
    <form onSubmit={handleSubmit}>
      <ul>
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
      <FormInput name='Title' state={title} setState={setTitle} />
      <FormInput name='Description' state={description} setState={setDescription} required={false}/>
      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>


    </form>
  )
};

export default PropertyForm;