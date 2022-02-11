import { csrfFetch } from './csrf';
// todo ——————————————————————————————————————————————————————————————————————————————————
// todo                                 Variables
// todo ——————————————————————————————————————————————————————————————————————————————————
export const CREATE_REVIEW = 'review/create';
export const GET_ALL_REVIEWS = 'review/get_all';
export const UPDATE_REVIEW = 'review/update';
export const DELETE_REVIEW = 'review/delete';

// todo ——————————————————————————————————————————————————————————————————————————————————
// todo                              Action Creators
// todo ——————————————————————————————————————————————————————————————————————————————————
const createOneReview = (review, propertyId) => ({
  type: CREATE_REVIEW,
  review,
  propertyId
});
// const createOneReview = review => ({
//   type: CREATE_REVIEW,
//   review
// });

const getAllReviews = (reviews, propertyId) => ({
  type: GET_ALL_REVIEWS,
  reviews,
  propertyId
});
// const getAllReviews = reviews => ({
//   type: GET_ALL_REVIEWS,
//   reviews,
// });

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
  switch (action.type) {
    case CREATE_REVIEW: 
      return {
        ...state,
        [action.review.id]: {
          ...state[action.review.id],
          ...action.review
        }
      };

// todo ——————————————————————————————————————————————————————————————————————————————————
    case GET_ALL_REVIEWS:
      // const reviews = {};  //! Do I need to create shallow
      // action.reviews.contentArray.forEach(review => {
      //   reviews[review.id] = review;
      // });
      return {
        // ...reviews,
        ...state, //! OR is it ok to pass in directly here?
        numberOfReviews: action.reviews.numberOfReviews,
        ratingData: action.reviews.ratingData,
        listOfReviews: action.reviews.listOfReviews,
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