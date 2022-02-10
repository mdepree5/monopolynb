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

  // const reviewData = useSelector(state => state.review.ratingData);
  // const numberOfReviews = useSelector(state => state.review.numberOfReviews);
  const reviews = useSelector(state => state.review.listOfReviews);
  
  const reviewData = {
    rating: useSelector(state => state.review.rating),
    data: useSelector(state => state.review.ratingData),
    numberOfReviews: useSelector(state => state.review.numberOfReviews)
  };
  console.log('reviewData', reviewData);


  useEffect(() => {
    dispatch(getReviewsByPropertyId(propertyId));
  }, [dispatch, propertyId]);

  return (
    <div >
      <ReviewData reviewData={reviewData} />

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
