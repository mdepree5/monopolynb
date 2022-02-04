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
const createOnereview = review => ({
  type: CREATE_REVIEW,
  review
});

const getAllReviews = reviews => ({
  type: GET_ALL_REVIEWS,
  reviews
});

const updateOneReview = review => ({
  type: UPDATE_REVIEW,
  review
});

const deleteOneReview = review => ({
  type: DELETE_REVIEW,
  review
});

// todo ——————————————————————————————————————————————————————————————————————————————————
// todo                                 Thunks
// todo ——————————————————————————————————————————————————————————————————————————————————
export const createReview = review => async (dispatch) => {
  const response = await fetch(`/api/reviews`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(review)
  });

  if (response.ok) {
    const review = await response.json();
    dispatch(createOnereview(review));
    return review;
  }
};

export const getReviews = () => async (dispatch) => {
  const response = await fetch(`/api/reviews`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    const reviews = await response.json();
    dispatch(getAllReviews(reviews));
  }
};


export const updateReview = review => async (dispatch) => {
  const response = await fetch(`/api/reviews/${review.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(review)
  });

  if (response.ok) {
    const updatedreview = await response.json();
    dispatch(updateOneReview(updatedreview));
    return updatedreview;
  }
};


export const deleteReview = review => async (dispatch) => {
  const response = await fetch(`/api/reviews/${review.id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    const review = await response.json();
    dispatch(deleteOneReview(review.id));
  }
};


// !!!! ——————————————————————————————————————————————————————————————————————————————————
// !!!! ——————————————————————————————————————————————————————————————————————————————————
// !!!!                                 EXPLAIN
// !!!!                                 
// !!!!                   Do I want to make review api routes separate?
// !!!!                   If so, how might I pass along the relevant 'propertyID' ????
// !!!!                                 
// !!!! ——————————————————————————————————————————————————————————————————————————————————
// !!!! ——————————————————————————————————————————————————————————————————————————————————


// todo ——————————————————————————————————————————————————————————————————————————————————
// todo                                 Reducer
// todo ——————————————————————————————————————————————————————————————————————————————————
const initialState = { listOfReviews: {} };

const reviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_REVIEW: 
      return {
        ...state,
        listOfReviews: {
          ...state.listOfReviews,
          [action.review.id]: action.review
        }
      };

// todo ——————————————————————————————————————————————————————————————————————————————————
    case GET_ALL_REVIEWS:
      const reviews = {}; 
      action.reviews.forEach(review => {
        reviews[review.id] = review;
      });
      return {
        ...reviews,
        ...state,
      };
// todo ——————————————————————————————————————————————————————————————————————————————————
    case UPDATE_REVIEW:
      return {
        ...state,
        [action.review.id]: action.review
      }
// todo ——————————————————————————————————————————————————————————————————————————————————
    case DELETE_REVIEW: 
      const newState = {...state, listOfReviews: {...state.listOfReviews}};
      delete newState.listOfReviews[action.review.id];
      return newState

    default:
      return state;
  }
};

export default reviewReducer;