import {useParams} from 'react-router-dom';
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getReviewsByPropertyId } from '../../store/review';


import ReviewFormModal from './ReviewFormModal';
import ReviewData from './ReviewData';
import ReviewList from './ReviewList';
import './Review.css';


const Review = ({propertyId}) => {
  const dispatch = useDispatch();
  // const {propertyId} = useParams();

  const reviews = useSelector(state => state.review.listOfReviews);
  
  const [currentReviews, setCurrentReviews] = useState(reviews); 

  console.log('current-review-index', currentReviews)

  const avg = (reviews, key) => (reviews.reduce((prev, curr) => prev + curr[key], 0)) / reviews.length;
  
  const reviewData = [
    {name: 'Rating', value: +avg(reviews, 'rating').toFixed(2)},
    {name: 'Communication', value: +avg(reviews, 'communication').toFixed(2)},
    {name: 'Check-in', value: +avg(reviews, 'checkIn').toFixed(2)},
    {name: 'Cleanliness', value: +avg(reviews, 'cleanliness').toFixed(2)},
  ]

  useEffect(() => {
    dispatch(getReviewsByPropertyId(propertyId));
  }, [dispatch, propertyId]);

  useEffect(() => setCurrentReviews(reviews), [reviews]);

  const [username, setUsername] = useState('');
  
  function handleChange(event) {
    setUsername(event.target.value.toLowerCase())
  }

  return (
    <div >
      <ReviewData reviews={reviews} reviewData={reviewData} totalReviews={reviews?.length}/>
      <ReviewList reviews={reviews} propertyId={propertyId} />
      <ReviewFormModal reviews={reviews} handleChange={handleChange}/>
      <input
          id="usernameInput"
          type="text"
          onChange={handleChange}
          value={username}
        />
        <div>{username}</div>
    </div>
  );
};
export default Review;


// !!!! ——————————————————————————————————————————————————————————————————————————————————

// todo ——————————————————————————————————————————————————————————————————————————————————
// todo               Based off custom GetReviewsById Backend Query
// todo ——————————————————————————————————————————————————————————————————————————————————
/* 
const Review = ({id, belongsToUser}) => {
  const dispatch = useDispatch();
  const {propertyId} = useParams();

  const reviews = useSelector(state => state.review.listOfReviews);
  const reviewData = {
    rating: useSelector(state => state.review.rating),
    data: useSelector(state => state.review.ratingData),
    numberOfReviews: useSelector(state => state.review.numberOfReviews)
  };

  console.log('review-index', reviews)

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
*/
