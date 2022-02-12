import {useParams, useHistory} from 'react-router-dom';
import { useState } from "react";
import * as reviewActions from "../../store/review";
import { useDispatch, useSelector } from "react-redux";
import {Form, FormInput} from '../Form';


const ReviewCreateForm = ({closeModal}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const {propertyId} = useParams();
  const guestId = useSelector(state => state.session.user.id);

  const [content, setContent] = useState(''); 
  const [rating, setRating] = useState(5);
  const [communication, setCommunication] = useState(5);
  const [checkIn, setCheckIn] = useState(5);
  const [cleanliness, setCleanliness] = useState(5);
  const [errors, setErrors] = useState([]);

  const handleSubmit = async(event) => {
    event.preventDefault();

    const newReview = await dispatch(reviewActions.createReview(
      {guestId, propertyId, content, rating, communication, checkIn, cleanliness}
    )).catch(
      async(res) => {
        const data = await res.json();
        console.log('data', data);
        if(data && data.errors) setErrors(data.errors);
      }
    )

    if(newReview) history.push(`/properties`);
    if(newReview) history.push(`/properties/${propertyId}`);
    // return closeModal();
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