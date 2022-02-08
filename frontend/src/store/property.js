import { csrfFetch } from './csrf';
// todo ——————————————————————————————————————————————————————————————————————————————————
// todo                                 Variables
// todo ——————————————————————————————————————————————————————————————————————————————————
import {CREATE_REVIEW, GET_ALL_REVIEWS, DELETE_REVIEW} from './review';
const CREATE_ONE = 'property/create';
const GET_ALL = 'property/get_all';
const GET_ONE = 'property/get_one';
const UPDATE_ONE = 'property/update';
const DELETE_ONE = 'property/delete';

// todo ——————————————————————————————————————————————————————————————————————————————————
// todo                              Action Creators
// todo ——————————————————————————————————————————————————————————————————————————————————
const createOneProperty = property => ({
  type: CREATE_ONE,
  property
});

const getAllProperties = properties => ({
  type: GET_ALL,
  properties
});

const getOneProperty = property => ({
  type: GET_ONE,
  property
});

const updateOneProperty = property => ({
  type: UPDATE_ONE,
  property
});

const deleteOneProperty = property => ({
  type: DELETE_ONE,
  property
});

// todo ——————————————————————————————————————————————————————————————————————————————————
// todo                                 Thunks
// todo ——————————————————————————————————————————————————————————————————————————————————
export const createProperty = property => async (dispatch) => {
  const response = await csrfFetch(`/api/properties`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(property)
  });

  if (response.ok) {
    const newProperty = await response.json();
    dispatch(createOneProperty(newProperty));
    return newProperty;
  }
};

export const getProperties = () => async (dispatch) => {
  const response = await fetch(`/api/properties`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    const properties = await response.json();
    dispatch(getAllProperties(properties));
  }
};

export const getProperty = id => async (dispatch) => {
  const response = await fetch(`/api/properties/${id}`);

  if (response.ok) {
    const property = await response.json();
    dispatch(getOneProperty(property));
  }
};

export const updateProperty = property => async (dispatch) => {
  const response = await csrfFetch(`/api/properties/${property.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(property)
  });

  if (response.ok) {
    const updatedProperty = await response.json();
    dispatch(updateOneProperty(updatedProperty));
    return updatedProperty;
  }
};

export const deleteProperty = propertyId => async (dispatch) => {
  const response = await csrfFetch(`/api/properties/${propertyId}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    const property = await response.json();
    dispatch(deleteOneProperty(property.id));
  }
};

// todo ——————————————————————————————————————————————————————————————————————————————————
// todo                                 Reducer
// todo ——————————————————————————————————————————————————————————————————————————————————
const initialState = { listOfProperties: [], listOfReviews: [] };

const propertyReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ONE: 

      return {
      ...state,
      [action.property.id]: {
        ...state[action.property.id],
        ...action.property
      }
    };
    // const newCreateState = {
    //   ...state,
    //   [action.property.id]: action.property
    // };
    // const newPropertyList = newCreateState.listOfProperties.map(id => newCreateState[id]);
    // newPropertyList.push(action.property);
    // newCreateState.listOfProperties = action.properties.properties
    // return newCreateState;  
// todo ——————————————————————————————————————————————————————————————————————————————————
    case GET_ALL:
      const properties = {}; //* Declare new object 1. avoid mutation, 2. control specific slices of state
      action.properties.forEach(property => {
        properties[property.id] = property;
      });
      return {
        ...properties,
        ...state,
        listOfProperties: action.properties
      };
// todo ——————————————————————————————————————————————————————————————————————————————————
    case GET_ONE:
      const getOne = {
        [action.property.id]: {
          ...state[action.property.id],
        }
      }
      return {
        getOne,
        ...state,
        hello: 'there',
      }
// todo ——————————————————————————————————————————————————————————————————————————————————
    case UPDATE_ONE:
      return {
        ...state,
        [action.property.id]: action.property
      }
// todo ——————————————————————————————————————————————————————————————————————————————————
    case DELETE_ONE: 
    const deleteOneState = {
      ...state,
      [action.property]: {
        ...state[action.property],
        ...action.property
      }
    }
      return deleteOneState;
// todo ——————————————————————————————————————————————————————————————————————————————————      
// // todo ——————————————————————————————————————————————————————————————————————————————————
// // ****                                 REVIEW CASES
// // todo ——————————————————————————————————————————————————————————————————————————————————
//     case CREATE_REVIEW:
//       return {
//         ...state,
//         [action.review.propertyId]: {
//           ...state[action.review.propertyId],
//           reviews: [...state[action.review.propertyId].reviews, action.review.id]
//         }
//       };
// // **** ——————————————————————————————————————————————————————————————————————————————————
//     case GET_ALL_REVIEWS:
//       const reviews = {};
//       action.reviews.forEach(review => {
//         reviews[review.id] = review;
//       });
//       return {
//         ...reviews,
//         ...state,
//         listOfReviews: action.reviews
//       }
// // **** ——————————————————————————————————————————————————————————————————————————————————
//     case DELETE_REVIEW:
//       return {
//         ...state,
//         [action.propertyId]: {
//           ...state[action.propertyId],
//           reviews: state[action.propertyId].items.filter(reviewId => reviewId !== action.reviewId)
//         }
//       };
// // **** ——————————————————————————————————————————————————————————————————————————————————
    default:
      return state;
  }
};

export default propertyReducer;