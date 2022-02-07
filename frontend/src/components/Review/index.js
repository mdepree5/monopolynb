import {useParams} from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getReviewsByPropertyId } from '../../store/review';

// import ReviewList from './ReviewList';
// import ReviewData from './ReviewData';
import './Review.css';


const Reviews = () => {
  const dispatch = useDispatch();
  const {propertyId} = useParams();

  const reviews = useSelector(state => state.review.listOfReviews)
  
  console.log('debugger');
  console.log('propertyId', propertyId);
  console.log('reviews', reviews);
  console.log('debugger');


  useEffect(() => {
    dispatch(getReviewsByPropertyId(propertyId));
  }, [dispatch, propertyId]);

  return (
    <div className='review-container'>
      <h3>Reviews</h3>
      {/* <ReviewData />
      <ReviewList propertyId={property.id}/> */}
    </div>
  )
} 


// const Reviews = ({property}) => {
//   return (
//     <div>Reviews here!</div>
//   )
// }

export default Reviews;
