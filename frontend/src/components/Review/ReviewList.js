import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import ReviewEditModal from './ReviewEditModal';
import ReviewDeleteButton from './ReviewDeleteButton';

const ReviewDetail = ({review}) => {
  
  const [belongsToUser, setBelongsToUser] = useState(false);
  const sessionUser = useSelector(state => state.session.user);

  useEffect(() => {    
    if(sessionUser?.id === review?.guestId) setBelongsToUser(true);
    else setBelongsToUser(false);
  }, [sessionUser, review])

  const month = [
    'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
  ][+review.createdAt.split('-')[1]-1];

  const year = review.createdAt.split('-')[0];

  return (
  <ul className='review-detail'>
      <li>
        <ul className='review-nav'>
          <li>{`${month} ${year}`}</li>
          <li>{belongsToUser && 
          (
            <>
              <ReviewEditModal review={review}/>
              <ReviewDeleteButton reviewId={review.id} />
            </>
            )
          }</li>
        </ul>
      </li>
      <li className='review-body'>{review.content}</li>
  </ul>
)
}

const ReviewList = ({reviews}) => {


  return (
    <ul className='review-list-container'>
      {reviews.map(review => (
        <li key={review.id}> 
          <ReviewDetail review={review} />
        </li>
      ))}
    </ul>
  )
}

export default ReviewList;
