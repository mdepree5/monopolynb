import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
// todo ——————————————————————————————————————————————————————————————————————————————————
import ReviewEditModal from './ReviewEditModal';
import ReviewDeleteButton from './ReviewDeleteButton';
// todo ——————————————————————————————————————————————————————————————————————————————————

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
    <>
      <div className='review-detail'>
        <div className='review-list-left'>
          <div><strong>{`${review?.User?.firstName} `}</strong> <i className="far fa-user"/>{` ${month} ${year}`}</div>
          <div className='review-body'>{review.content}</div>
        </div>
        <div className='review-list-right'>
          {belongsToUser && (<>
            <ReviewEditModal review={review}/>
            <ReviewDeleteButton reviewId={review.id} />
          </>)}
        </div>
      </div>
      <div style={{width:'93%', margin: 0 }} className="line"></div>  
  </>
)
}

const ReviewList = ({reviews}) => {

  return (
    <div className='review-list-container'>
      {reviews.length ? reviews.map(review => (
        <ReviewDetail key={review.id} review={review} />
      )) : 
      <div>No reviews yet!</div>
      }
    </div>
  )
}

export default ReviewList;
