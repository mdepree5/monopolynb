import {useParams} from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getReviewsByPropertyId } from '../../store/review';

// import ReviewDetail from './ReviewDetail';
import './Review.css';



import Meter from '../../context/Meter';
import './Review.css';


const ReviewData = () => {

  const reviewData = [
    {name: 'Cleanliness', rating: 5.0},
    {name: 'Communication', rating: 4.8},
    {name: 'Check-In', rating: 4.0},
  ];

  const ReviewDataLine = ({datum}) => (
    <ul className='review-data-line' >
      <li>{datum.name}</li>
      <li><Meter rating={datum.rating}/></li>
      <li>{datum.rating}</li>
    </ul>
  );

  return (    
    <div className='review-data-container'>
      <div>Rating</div>
      <div>
        {reviewData.map(datum => (
          <ReviewDataLine datum={datum}/>
        ))
        }
      </div>
    </div>
  )
}


const ReviewList = ({id}) => {

  const dispatch = useDispatch();

  const {propertyId} = useParams();

  const reviews = useSelector(state => state.review.listOfReviews);
  const reviewData = useSelector(state => state.review.ratingData);

  console.log('reviews', reviews);
  console.log('reviewData', reviewData);
  

  useEffect(() => {
    dispatch(getReviewsByPropertyId(propertyId));
  }, [dispatch, propertyId]);

  return (
    <div >
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
