// todo ——————————————————————————————————————————————————————————————————————————————————
// todo                                 Variables
// todo ——————————————————————————————————————————————————————————————————————————————————
const CREATE_ONE = 'review/create';
const GET_ALL_BY_PROPERTY_ID = 'review/get_all';
const GET_ONE = 'review/get_one';
const UPDATE_ONE = 'review/update';
const DELETE_ONE = 'review/delete';

// todo ——————————————————————————————————————————————————————————————————————————————————
// todo                              Action Creators
// todo ——————————————————————————————————————————————————————————————————————————————————
const createOnereview = review => ({
  type: CREATE_ONE,
  review
});

const getAllReviews = reviews => ({
  type: GET_ALL_BY_PROPERTY_ID,
  reviews
});

const getOneReview = review => ({
  type: GET_ONE,
  review
});

const updateOneReview = review => ({
  type: UPDATE_ONE,
  review
});

const deleteOneReview = review => ({
  type: DELETE_ONE,
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

export const getReview = id => async (dispatch) => {
  const response = await fetch(`/api/reviews/${id}`);

  if (response.ok) {
    const review = await response.json();
    dispatch(getOneReview(review));
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
    case CREATE_ONE: 
      return {
        ...state,
        listOfReviews: {
          ...state.listOfReviews,
          [action.review.id]: action.review
        }
      };

// todo ——————————————————————————————————————————————————————————————————————————————————
    case GET_ALL_BY_PROPERTY_ID:
      const reviews = {}; //* Conceptual: Declare new object 1. avoid mutation, 2. control specific slices of state
      action.reviews.forEach(review => {
        reviews[review.id] = review;
      });
      return {
        ...reviews,
        ...state,
      };
// todo ——————————————————————————————————————————————————————————————————————————————————
    case GET_ONE:
      return {
        ...state,
        [action.review.id]: {
          ...state[action.review.id],
          ...action.review
        }
      };
// todo ——————————————————————————————————————————————————————————————————————————————————
    case UPDATE_ONE:
      return {
        ...state,
        [action.review.id]: action.review
      }
// todo ——————————————————————————————————————————————————————————————————————————————————
    case DELETE_ONE: 
      const newState = {...state, listOfReviews: {...state.listOfReviews}};
      delete newState.listOfReviews[action.review.id];
      return newState

    default:
      return state;
  }
};

export default reviewReducer;