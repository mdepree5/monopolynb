import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getReviewsByPropertyId } from '../../store/review';

import ReviewList from './ReviewList';
import ReviewData from './ReviewData';


const Reviews = ({propertyId}) => {
  const dispatch = useDispatch();

  const reviews = useSelector(state => state.review.listOfReviews);

  useEffect(() => {
    dispatch(getReviewsByPropertyId(propertyId));
  }, [dispatch, propertyId]);

  return (
    <>
      <h2>Reviews</h2>
      <ReviewData />
      <ReviewList />
    </>
  )
}

export default Reviews;