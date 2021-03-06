import { csrfFetch } from './csrf';
// todo ——————————————————————————————————————————————————————————————————————————————————
export const CREATE_REVIEW = 'review/create';
export const GET_ALL_REVIEWS = 'review/get_all';
export const UPDATE_REVIEW = 'review/update';
export const DELETE_REVIEW = 'review/delete';
// todo ——————————————————————————————————————————————————————————————————————————————————
const createOneReview = (review, propertyId) => ({ type: CREATE_REVIEW, review, propertyId });
const getAllReviews = (reviews, propertyId) => ({ type: GET_ALL_REVIEWS, reviews, propertyId });
const updateOneReview = review => ({ type: UPDATE_REVIEW, review });
const deleteOneReview = reviewId => ({ type: DELETE_REVIEW, reviewId });
// todo ——————————————————————————————————————————————————————————————————————————————————
// todo                                 Thunks
// todo ——————————————————————————————————————————————————————————————————————————————————
export const createReview = (review, propertyId) => async (dispatch) => {
  const response = await csrfFetch(`/api/properties/${propertyId}/reviews`, { method: 'POST', body: JSON.stringify(review) });

  if (response.ok) {
    const review = await response.json();
    dispatch(createOneReview(review));
    return review;
  }
  return response;
};

export const getReviewsByPropertyId = propertyId => async (dispatch) => {
  const response = await fetch(`/api/properties/${propertyId}/reviews`, { method: 'GET' });

  if (response.ok) {
    const reviews = await response.json();
    dispatch(getAllReviews(reviews, propertyId));
    return reviews;
  }
  return response;
};

export const updateReview = review => async (dispatch) => {
  const response = await csrfFetch(`/api/reviews/${review.id}`, { method: 'PUT', body: JSON.stringify(review) });

  if (response.ok) {
    const updatedReview = await response.json();
    dispatch(updateOneReview(updatedReview));
    return updatedReview;
  }
  return response;
};

export const deleteReview = reviewId => async (dispatch) => {
  const response = await csrfFetch(`/api/reviews/${reviewId}`, { method: 'DELETE' });

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
const initialState = { listOfReviews: [] };

const reviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_REVIEW: {
      const newState = {...state, listOfReviews:[...state.listOfReviews]}
      
      newState.listOfReviews.unshift(action.review);
      return newState;
    };
// todo ——————————————————————————————————————————————————————————————————————————————————
    case GET_ALL_REVIEWS: {
      const newState = {...state};
      const reviews = [];
      
      action.reviews.forEach(review => reviews.push(review));
      newState.listOfReviews = reviews;
      return newState;
    };
// todo ——————————————————————————————————————————————————————————————————————————————————
    case UPDATE_REVIEW: {
      const newState = {...state}
      const updatedReview = state.listOfReviews.map(review => 
        review.id === action.review.id ? review = action.review : review);

      newState.listOfReviews = updatedReview;
      return newState;
    };
// todo ——————————————————————————————————————————————————————————————————————————————————
    case DELETE_REVIEW: {
      const newState = {...state};
      const newReviews = state.listOfReviews.filter(review => review.id !== action.reviewId);

      newState.listOfReviews = newReviews;
      return newState;
    }
// todo ——————————————————————————————————————————————————————————————————————————————————
    default:
      return state;
  }
};

export default reviewReducer;