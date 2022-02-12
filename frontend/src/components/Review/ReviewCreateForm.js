import {useParams, useHistory} from 'react-router-dom';
import { useState, useEffect } from "react";
import * as reviewActions from "../../store/review";
import { useDispatch, useSelector } from "react-redux";
import {Form, FormInput} from '../Form';
import { getReviewsByPropertyId } from '../../store/review';

const ReviewCreateForm = ({closeModal, reviews, handleChange}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const {propertyId} = useParams();
  const guestId = useSelector(state => state.session.user.id);

  // console.log('FORM', reviews)
  // console.log('FORM', handleChange)

  useEffect(() => {
    dispatch(getReviewsByPropertyId(propertyId));
  }, [dispatch, propertyId]);


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

    // if(newReview) history.replace(`/properties`)
    // if(newReview) history.replace(`/properties/${propertyId}`);
    // if(newReview) alert('new review')
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
      <input
          id="usernameInput"
          type="text"
          onChange={handleChange}
          // value={username}
        />
    </Form>
  )
};

export default ReviewCreateForm;