import { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getReviewsByPropertyId } from '../../store/review';
import ReviewDetail from '../ReviewDetail';

//GOALS:
// Load redux with the articles
// import useDispatch
// import loadArticles
// Listen for (aka subscribe to) changes in Redux state
// List article entries based on Redux state

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
          <li>
            <ReviewDetail key={review.id} id={`review-${review.id}`} title={review.title} />
          </li>
        ))}
      </ul>

      <Switch>
        <Route path='/article/:id'>
          <ReviewDetail reviews={reviews} />
        </Route>
      </Switch>
    </div>
  );
};
export default ReviewList;
