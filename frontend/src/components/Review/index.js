import {useParams} from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getReviewsByPropertyId } from '../../store/review';

import ReviewData from './ReviewData';
import ReviewList from './ReviewList';
import './Review.css';



const Review = ({id, belongsToUser}) => {
  const dispatch = useDispatch();
  const {propertyId} = useParams();

  const reviews = useSelector(state => state.review.listOfReviews);
  const reviewData = {
    rating: useSelector(state => state.review.rating),
    data: useSelector(state => state.review.ratingData),
    numberOfReviews: useSelector(state => state.review.numberOfReviews)
  };

  console.log('reviews', reviews)

  useEffect(() => {
    dispatch(getReviewsByPropertyId(propertyId));
  }, [dispatch, propertyId]);

  return (
    <div >
      <ReviewData reviewData={reviewData} />
      <ReviewList reviews={reviews}  belongsToUser={belongsToUser} />
    </div>
  );
};
export default Review;
