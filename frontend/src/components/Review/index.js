import {useParams} from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getReviewsByPropertyId } from '../../store/review';

import ReviewList from './ReviewList';
import ReviewData from './ReviewData';
import './Review.css';


const Reviews = () => {
  const dispatch = useDispatch();
  const {propertyId} = useParams();

  const reviews = useSelector(state => state.review);
  
  console.log('debugger');
  console.log('reviews', reviews);


  useEffect(() => {
    dispatch(getReviewsByPropertyId(propertyId));
  }, [dispatch, propertyId]);

  return (
    <div className='review-container'>
      <h3>Reviews</h3>
      <ReviewData />
      {/* <ReviewList reviews={reviews} /> */}
    </div>
  )
} 


export default Reviews;
