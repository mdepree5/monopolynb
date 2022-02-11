import {useParams} from 'react-router-dom';
import { useState } from "react";
import * as reviewActions from "../../store/review";
import { useDispatch, useSelector } from "react-redux";
import {Form, FormInput} from '../Form';


const ReviewEditForm = ({review, closeModal}) => {
  const dispatch = useDispatch();

  const [content, setContent] = useState(review?.content);
  const [rating, setRating] = useState(review?.rating);
  const [communication, setCommunication] = useState(review?.communication);
  const [checkIn, setCheckIn] = useState(review?.checkIn);
  const [cleanliness, setCleanliness] = useState(review?.cleanliness);
  const [errors, setErrors] = useState([]);

  const handleSubmit = async(event) => {
    event.preventDefault();

    const updatedReview = await dispatch(reviewActions.updateReview(
      {...review, content, rating, communication, checkIn, cleanliness}
    )).catch(
      async(res) => {
        const data = await res.json();
        console.log('data', data);
        if(data && data.errors) setErrors(data.errors);
      }
    )

    if(updatedReview.errors) setErrors(updatedReview.errors); 

    return closeModal();
  }

  return (
    <Form onSub={handleSubmit} errors={errors} buttonName={'Edit Your Review'} >
        <ul>
        <li><label htmlFor='content'>Content</label></li>
        <li><textarea 
          id='content'
          value={content}
          onChange={e => setContent(e.target.value)}
          placeholder='Content'/></li>
      </ul>
      <FormInput name='Rating' state={rating} setState={setRating} required={false} />
      <FormInput name='Communication' state={communication} setState={setCommunication} required={false} />
      <FormInput name='Check In' state={checkIn} setState={setCheckIn} required={false} />
      <FormInput name='Cleanliness' state={cleanliness} setState={setCleanliness} required={false} />
    </Form>
  )
};

export default ReviewEditForm;