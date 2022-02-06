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
  const response = await fetch(`/api/properties`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(property)
  });

  if (response.ok) {
    const property = await response.json();
    dispatch(createOneProperty(property));
    return property;
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
  const response = await fetch(`/api/properties/${property.id}`, {
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
  const response = await fetch(`/api/properties/${propertyId}`, {
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
const initialState = { listOfProperties: [] };

const propertyReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ONE: 
    return {
        ...state,
        listOfProperties: {
          ...state.listOfProperties,
          [action.property.id]: action.property
        }
      };
      // Refactored CREATE_ONE case for listOfProperties = [];
      // switch (action.type) {
      //   case CREATE_ONE: 
      //   const newState = {
      //     ...state,
      //     [action.property.id]: action.property
      //   };
      //   const newPropertyList = newState.listOfProperties.map(id => newState[id]);
      //   newPropertyList.push(action.property);
      //   newState.listOfProperties = action.properties.properties
      //   return newState;  
      //     return {
      //       ...state,
      //       listOfProperties: {
      //         ...state.listOfProperties,
      //         [action.property.id]: action.property
      //       }
      //     };
// todo ——————————————————————————————————————————————————————————————————————————————————
    case GET_ALL:
      const properties = {}; //* Declare new object 1. avoid mutation, 2. control specific slices of state
      action.properties.properties.forEach(property => {
        properties[property.id] = property;
      });
      console.log('debugger-reducer');
      console.log(properties);
      console.log('debugger-reducer');
      return {
        ...properties,
        ...state,
        listOfProperties: action.properties.properties
      };
// todo ——————————————————————————————————————————————————————————————————————————————————
    case GET_ONE:
      return {
        ...state,
        [action.property.id]: {
          ...state[action.property.id],
          ...action.property
        }
      };
// todo ——————————————————————————————————————————————————————————————————————————————————
    case UPDATE_ONE:
      return {
        ...state,
        [action.property.id]: action.property
      }
// todo ——————————————————————————————————————————————————————————————————————————————————
    case DELETE_ONE: 
      const newState = {...state, listOfProperties: {...state.listOfProperties}};
      delete newState.listOfProperties[action.property.id];
      return newState;
// todo ——————————————————————————————————————————————————————————————————————————————————
// **** ——————————————————————————————————————————————————————————————————————————————————
// ****                                 REVIEW CASES
// **** ——————————————————————————————————————————————————————————————————————————————————
// todo ——————————————————————————————————————————————————————————————————————————————————
    case CREATE_REVIEW:
      return {
        ...state,
        [action.review.propertyId]: {
          ...state[action.review.propertyId],
          reviews: [...state[action.review.propertyId].reviews, action.review.id]
        }
      };
// **** ——————————————————————————————————————————————————————————————————————————————————
    case GET_ALL_REVIEWS:
      return {
        ...state,
        [action.propertyId]: {
          ...state[action.propertyId],
          reviews: action.reviews.map(review => review.id)
        }
      };
// **** ——————————————————————————————————————————————————————————————————————————————————
    case DELETE_REVIEW:
      return {
        ...state,
        [action.propertyId]: {
          ...state[action.propertyId],
          reviews: state[action.propertyId].items.filter(reviewId => reviewId !== action.reviewId)
        }
      };
// **** ——————————————————————————————————————————————————————————————————————————————————
    default:
      return state;
  }
};

export default propertyReducer;