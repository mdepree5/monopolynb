import {useHistory} from 'react-router-dom';
import React, { useState } from "react";
import * as reviewActions from "../../store/review";
import { useDispatch, useSelector } from "react-redux";
import {Form, FormInput} from '../Form';


const ReviewCreateForm = ({closeModal}) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [content, setContent] = useState('');
  const [rating, setRating] = useState(5);
  const [communication, setCommunication] = useState(5);
  const [checkIn, setCheckIn] = useState(5);
  const [cleanliness, setCleanliness] = useState(5);
  const [errors, setErrors] = useState([]);

  const guestId = useSelector(state => state.session.user.id);

  const handleSubmit = async(event) => {
    event.preventDefault();

    const newReview = await dispatch(reviewActions.createReview(
      {guestId, content, rating, communication, checkIn, cleanliness}
    )).catch(
      async(res) => {
        const data = await res.json();
        console.log('data', data);
        if(data && data.errors) setErrors(data.errors);
      }
    )

    if(newReview || !newReview.errors) history.push(`/properties/${newReview.id}`);

    closeModal();
  }

  return (
    <Form onSub={handleSubmit} errors={errors} buttonName={'How was your stay?'} >
      <FormInput name='Title' state={content} setState={setContent} />
      <FormInput name='Rating' state={rating} setState={setRating} />
      <FormInput name='Communication' state={communication} setState={setCommunication} />
      <FormInput name='Check In' state={checkIn} setState={setCheckIn} />
      <FormInput name='Cleanliness' state={cleanliness} setState={setCleanliness} />
    </Form>
  )
};

export default ReviewCreateForm;