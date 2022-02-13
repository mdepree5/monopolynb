import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
// todo ——————————————————————————————————————————————————————————————————————————————————
import {updateReview} from "../../store/review";
import {Form, FormInput} from '../Form';
// todo ——————————————————————————————————————————————————————————————————————————————————

const ReviewEditForm = ({review, closeModal}) => {
  const dispatch = useDispatch();
  
  const [content, setContent] = useState(review?.content);
  const [rating, setRating] = useState(review?.rating);
  const [communication, setCommunication] = useState(review?.communication);
  const [checkIn, setCheckIn] = useState(review?.checkIn);
  const [cleanliness, setCleanliness] = useState(review?.cleanliness);
  const [errors, setErrors] = useState([]);
  const [validationErrors, setValidationErrors] = useState([]);

  const handleSubmit = async(event) => {
    event.preventDefault();

    const updatedReview = await dispatch(updateReview(
      {...review, content, rating, communication, checkIn, cleanliness}
    )).catch(
      async(res) => {
        const data = await res.json();
        if(data && data.errors) setErrors(data.errors);
    })

    if(updatedReview?.errors) setErrors(updatedReview?.errors); 
    
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
    <Form onSub={handleSubmit} validationErrors={validationErrors} errors={errors} buttonName={'Update'} >
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