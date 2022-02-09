import {useHistory, useParams} from 'react-router-dom';
import React, { useState } from "react";
import * as reviewActions from "../../store/review";
import { useDispatch, useSelector } from "react-redux";
import {Form, FormInput} from '../Form';


const ReviewCreateForm = ({review, closeModal}) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [content, setContent] = useState(review?.content);
  const [rating, setRating] = useState(review?.rating);
  const [communication, setCommunication] = useState(review?.communication);
  const [checkIn, setCheckIn] = useState(review?.checkIn);
  const [cleanliness, setCleanliness] = useState(review?.cleanliness);
  const [errors, setErrors] = useState([]);

  const guestId = useSelector(state => state.session.user.id);
  const {propertyId} = useParams();

  const handleSubmit = async(event) => {
    event.preventDefault();

    const newReview = await dispatch(reviewActions.createReview(
      {...review, guestId, propertyId, content, rating, communication, checkIn, cleanliness}
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
    <Form onSub={handleSubmit} errors={errors} buttonName={'Edit Your Review'} >
      <FormInput name='Title' state={content} setState={setContent} />
      <FormInput name='Rating' state={rating} setState={setRating} />
      <FormInput name='Communication' state={communication} setState={setCommunication} />
      <FormInput name='Check In' state={checkIn} setState={setCheckIn} />
      <FormInput name='Cleanliness' state={cleanliness} setState={setCleanliness} />
    </Form>
  )
};

export default ReviewCreateForm;