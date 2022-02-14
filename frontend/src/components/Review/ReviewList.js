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
      <ul className='review-list-left'>
        <div><strong>{`${review?.User?.firstName} `}</strong> <i className="far fa-user"/>{` ${month} ${year}`}</div>
        <div className='review-body'>{review.content}</div>
      </ul>
      <div className='review-list-right'>
        {belongsToUser && (<>
          <ReviewEditModal review={review}/>
          <ReviewDeleteButton reviewId={review.id} />
        </>)}
      </div>
    </div>
    <div style={{width:'200px', margin: 0}} className="line"></div>  
    {belongsToUser && (<div style={{width:'110px', marginRight: '10px'}} className="line"></div>  )}
  </>
)
}

const ReviewList = ({reviews}) => (
    <div className='review-list-container'>
      {reviews.map(review => (
        <ReviewDetail key={review.id} review={review} />
      ))}
    </div>
)

export default ReviewList;
