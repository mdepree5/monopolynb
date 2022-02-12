import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// todo ——————————————————————————————————————————————————————————————————————————————————
import { getUserById } from '../../store/user';
import ReviewEditModal from './ReviewEditModal';
import ReviewDeleteButton from './ReviewDeleteButton';
import { getReviewsByPropertyId } from '../../store/review';
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

const ReviewList = ({propertyId}) => {

  const reviews2 = useSelector(state => state.review.listOfReviews);
  
  const [currentReviews, setCurrentReviews] = useState(reviews2); 

  console.log('review-list current reviews', currentReviews);


  console.log('review-list propertyId', propertyId)

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getReviewsByPropertyId(propertyId))
  }, [dispatch, propertyId])

  return (
    <ul className='review-list-container'>
      {reviews2.map(review => (
        <li key={review.id}> 
          <ReviewDetail review={review} />
        </li>
      ))}
    </ul>
  )
}

export default ReviewList;
