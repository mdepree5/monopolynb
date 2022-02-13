import { useState, useEffect } from "react";
import {useParams} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import { createReview, getReviewsByPropertyId } from '../../store/review';
import {Form, FormInput} from '../Form';

const ReviewCreateForm = ({closeModal }) => {
  const dispatch = useDispatch();
  const {propertyId} = useParams();
  const guestId = useSelector(state => state.session.user.id);

  useEffect(() => {dispatch(getReviewsByPropertyId(propertyId))}, [dispatch, propertyId]);

  const [content, setContent] = useState(''); 
  const [rating, setRating] = useState(5);
  const [communication, setCommunication] = useState(5);
  const [checkIn, setCheckIn] = useState(5);
  const [cleanliness, setCleanliness] = useState(5);
  const [errors, setErrors] = useState([]);

  const handleSubmit = async(event) => {
    event.preventDefault();

    await dispatch(createReview({guestId, propertyId, content, rating, communication, checkIn, cleanliness}))
    .catch(async(res) => {const data = await res.json();
      if(data && data.errors) setErrors(data.errors);
    })

    return closeModal();
  }

  return (
    <Form onSub={handleSubmit} errors={errors} buttonName={'How was your stay?'} >
      <ul>
        <li><label htmlFor='content'>Content</label></li>
        <li><textarea 
          id='content'
          value={content}
          onChange={e => setContent(e.target.value)}
          placeholder='Content'/></li>
      </ul>
      <FormInput name='Rating' state={rating} setState={setRating} />
      <FormInput name='Communication' state={communication} setState={setCommunication} />
      <FormInput name='Check In' state={checkIn} setState={setCheckIn} />
      <FormInput name='Cleanliness' state={cleanliness} setState={setCleanliness} />
    </Form>
  )
};

export default ReviewCreateForm;