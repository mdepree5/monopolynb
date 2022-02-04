import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getReviewsByPropertyId } from '../../store/review';
import ReviewDetail from '../ReviewDetail';

// todo ——————————————————————————————————————————————————————————————————————————————————
// todo ——————————————————————————————————————————————————————————————————————————————————
// todo ——————————————————————————————————————————————————————————————————————————————————
//* REFACTOR AND GIVE PROPERTYID TO REVIEWLIST VIA CONTEXT
// todo ——————————————————————————————————————————————————————————————————————————————————
// todo ——————————————————————————————————————————————————————————————————————————————————
// todo ——————————————————————————————————————————————————————————————————————————————————

const ReviewList = ({propertyId}) => {
  const dispatch = useDispatch();

  const reviews = useSelector(state => state.review.listOfReviews);

  useEffect(() => {
    dispatch(getReviewsByPropertyId(propertyId));
  }, [dispatch, propertyId]);

  return (
    <div>
      <ul>
        {reviews.map(review => (
          <ReviewDetail key={review.id} id={`review-${review.id}`} title={review.title} review={review}/>
        ))}
      </ul>
    </div>
  );
};
export default ReviewList;
