import { useState, useEffect } from "react";
import {useParams} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
// todo ——————————————————————————————————————————————————————————————————————————————————
import { createReview, getReviewsByPropertyId } from '../../store/review';
import {Form, NumberInput} from '../Form';
import '../Form/Form.css';
// todo ——————————————————————————————————————————————————————————————————————————————————

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
  const [validationErrors, setValidationErrors] = useState([]);

  const handleSubmit = async(event) => {
    event.preventDefault();

    const newReview = await dispatch(createReview(
      {guestId, propertyId, content, rating, communication, checkIn, cleanliness}
    )).catch(async(res) => {
      const data = await res.json();
      if(data && data.errors) setErrors(data.errors);
    })

    if(newReview?.errors) setErrors(newReview?.errors); 

    return closeModal();
  }


  useEffect(()=> {
    const errors = [];
    if(!content) errors.push('Please write some content');
    if(rating < 1 || rating > 5) errors.push('Rating must be between 1 and 5.');
    if(communication < 1 || communication > 5) errors.push('Communication rating must be between 1 and 5.');
    if(checkIn < 1 || checkIn > 5) errors.push('Check in rating must be between 1 and 5.');
    if(cleanliness < 1 || cleanliness > 5) errors.push('Cleanliness rating must be between 1 and 5.');
  
    setValidationErrors(errors);
  }, [content, rating, communication, checkIn, cleanliness])



  return (
    <Form onSub={handleSubmit} validationErrors={validationErrors} errors={errors} buttonName={'Post'} >
      <div className='review-form'>
        <div className='form-input'>
          <label htmlFor='content'>Content</label>
          <textarea 
            id='content'
            value={content}
            onChange={e => setContent(e.target.value)}
            placeholder='Content'/>
        </div>
        <NumberInput min={1} max={5} name='Rating' state={rating} setState={setRating} required={false} />
        <NumberInput min={1} max={5} name='Communication' state={communication} setState={setCommunication} required={false} />
        <NumberInput min={1} max={5} name='Check In' state={checkIn} setState={setCheckIn} required={false} />
        <NumberInput min={1} max={5} name='Cleanliness' state={cleanliness} setState={setCleanliness} required={false} />
      </div>
    </Form>
  )
};

export default ReviewCreateForm;