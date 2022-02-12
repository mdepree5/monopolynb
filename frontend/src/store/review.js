import { csrfFetch } from './csrf';
// todo ——————————————————————————————————————————————————————————————————————————————————
export const CREATE_REVIEW = 'review/create';
export const GET_ALL_REVIEWS = 'review/get_all';
export const UPDATE_REVIEW = 'review/update';
export const DELETE_REVIEW = 'review/delete';
// todo ——————————————————————————————————————————————————————————————————————————————————
const createOneReview = (review, propertyId) => ({
  type: CREATE_REVIEW,
  review,
  propertyId
});

const getAllReviews = (reviews, propertyId) => ({
  type: GET_ALL_REVIEWS,
  reviews,
  propertyId
});

const updateOneReview = review => ({
  type: UPDATE_REVIEW,
  review
});

const deleteOneReview = reviewId => ({
  type: DELETE_REVIEW,
  reviewId
});
// todo ——————————————————————————————————————————————————————————————————————————————————
// todo                                 Thunks
// todo ——————————————————————————————————————————————————————————————————————————————————
export const createReview = (review, propertyId) => async (dispatch) => {
  const response = await csrfFetch(`/api/properties/${propertyId}/reviews`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(review)
  });

  if (response.ok) {
    const review = await response.json();
    console.log('review', review)
    dispatch(createOneReview(review));
    return review;
  }
  return response;
};

export const getReviewsByPropertyId = propertyId => async (dispatch) => {
  const response = await fetch(`/api/properties/${propertyId}/reviews`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    const reviews = await response.json();
    dispatch(getAllReviews(reviews, propertyId));
    // return alert('HEY');
    return reviews;
  }
  return response;
};

export const updateReview = review => async (dispatch) => {
  const response = await csrfFetch(`/api/reviews/${review.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(review)
  });

  if (response.ok) {
    const updatedReview = await response.json();
    dispatch(updateOneReview(updatedReview));
    return updatedReview;
  }
  return response;
};

export const deleteReview = reviewId => async (dispatch) => {
  const response = await csrfFetch(`/api/reviews/${reviewId}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    const reviewId = await response.json();
    dispatch(deleteOneReview(reviewId));
    return reviewId;
  }
  return response;
};
// todo ——————————————————————————————————————————————————————————————————————————————————
// todo                                 Reducer
// todo ——————————————————————————————————————————————————————————————————————————————————
const initialState = { listOfReviews: [], ratingData: [], numberOfReviews: null};

const reviewReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case CREATE_REVIEW: 
      let newReview = {[action.review.id]: action.review}
      return {
        newReview,
        ...state,
        [action.review.id]: {
          ...state[action.review.id],
          ...action.review
        }
      };
// todo ——————————————————————————————————————————————————————————————————————————————————
    case GET_ALL_REVIEWS:
      newState = {};
      action.reviews.forEach(review => newState[review.id] = review);
      
      // console.log('reducer-review');
      // console.log(action.reviews);
      // console.log('reducer-review');
      return {
        // ...reviews,
        ...newState,
        ...state,
        listOfReviews: action.reviews
        // numberOfReviews: action.reviews.numberOfReviews,
        // ratingData: action.reviews.ratingData,
        // listOfReviews: action.reviews.listOfReviews,
      };
// todo ——————————————————————————————————————————————————————————————————————————————————
    case UPDATE_REVIEW:
      return {
        ...state,
        [action.review.id]: action.review
      }
// todo ——————————————————————————————————————————————————————————————————————————————————
    case DELETE_REVIEW: 
      const deleteOneReviewState = {
        ...state,
        [action.review]: {
          ...state[action.review],
          ...action.review
        }
      }
        return deleteOneReviewState;
    default:
      return state;
  }
};

export default reviewReducer;