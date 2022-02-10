import {useParams} from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getReviewsByPropertyId } from '../../store/review';
import ReviewData from './ReviewData';

// import ReviewDetail from './ReviewDetail';
import './Review.css';
 


const ReviewList = ({id}) => {

  const dispatch = useDispatch();

  const {propertyId} = useParams();

  const reviews = useSelector(state => state.review.listOfReviews);
  const reviewData = {
    data: useSelector(state => state.review?.ratingData),
    numberOfReviews: useSelector(state => state.review?.numberOfReviews)
  }

  console.log('reviews', reviews);
  console.log('reviewData', reviewData);

  useEffect(() => {
    dispatch(getReviewsByPropertyId(propertyId));
  }, [dispatch, propertyId]);

  return (
    <div >
    
    <div>
      {/* <ReviewData reviewData={reviewData}/> */}
    </div>
      <ul className='review-list-container'>
        {
          reviews.map(review => (
            <li key={review.id}>{review.content}</li>
          ))
        }

        {/* {reviews.map(review => (
          <ReviewDetail
            key={review.id}
            id={`review-${review.id}`}
            title={review.title}
            review={review}
          />
        ))} */}
      </ul>
    </div>
  );
};
export default ReviewList;
