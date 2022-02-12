import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// todo ——————————————————————————————————————————————————————————————————————————————————
import { getUserById } from '../../store/user';
import ReviewEditModal from './ReviewEditModal';
import ReviewDeleteButton from './ReviewDeleteButton';
// todo ——————————————————————————————————————————————————————————————————————————————————

const ReviewDetail = ({review}) => {
  const dispatch = useDispatch();
  const [belongsToUser, setBelongsToUser] = useState(false);

  const sessionUser = useSelector(state => state.session.user);
  // const pageUser = useSelector(state => state.user.currentUser);
  
  // useEffect(() => {dispatch(getUserById(review?.guestId))}, [dispatch]);

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
          <li>{`${review?.firstName}`}</li>
          <li>{`${month} ${year}`}</li>
          <li>{belongsToUser && (<>
              <ReviewEditModal review={review}/>
              <ReviewDeleteButton reviewId={review.id} />
            </>)}
          </li>
        </ul>
      </li>
      <li className='review-body'>{review.content}</li>
  </ul>
)
}

const ReviewList = ({reviews}) => (
  <ul className='review-list-container'>
    {reviews.map(review => (
      <li key={review.id}> 
        <ReviewDetail review={review} />
      </li>
    ))}
  </ul>
)
export default ReviewList;
