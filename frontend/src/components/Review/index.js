import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getReviewsByPropertyId } from '../../store/review';

import ReviewList from './ReviewList';
import ReviewData from './ReviewData';


const Reviews = ({property}) => {
  const dispatch = useDispatch();

  const reviews = useSelector(state => {
    if(!property.reviews) return null;

    return property.reviews.map(reviewId => state.review[reviewId])
  });
  
  console.log(reviews);

  useEffect(() => {
    dispatch(getReviewsByPropertyId(property.id));
  }, [dispatch, property.id]);

  return (
    <>
      <h3>Reviews</h3>
      <ReviewData />
      <ReviewList propertyId={property.id}/>
    </>
  )
}

export default Reviews;