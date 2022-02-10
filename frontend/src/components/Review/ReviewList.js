import {useParams} from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getReviewsByPropertyId } from '../../store/review';

// import ReviewDetail from './ReviewDetail';
import './Review.css';


const ReviewList = ({id}) => {

  const dispatch = useDispatch();

  const {propertyId} = useParams();

  const reviews = useSelector(state => state.property[propertyId]);

  console.log('reviews', reviews);
  

  useEffect(() => {
    dispatch(getReviewsByPropertyId(propertyId));
  }, [dispatch, propertyId]);

  return (
    <div >
      <ul className='review-list-container'>
        <li>hi</li>
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
