import { csrfFetch } from './csrf';
// todo ——————————————————————————————————————————————————————————————————————————————————
// todo                                 Variables
// todo ——————————————————————————————————————————————————————————————————————————————————
import {CREATE_REVIEW, GET_ALL_REVIEWS, DELETE_REVIEW} from './review';
const CREATE_PROPERTY = 'property/create';
const GET_ALL_PROPERTIES = 'property/get_all';
const GET_ONE_PROPERTY = 'property/get_one';
const UPDATE_PROPERTY = 'property/update';
const DELETE_PROPERTY = 'property/delete';

// todo ——————————————————————————————————————————————————————————————————————————————————
// todo                              Action Creators
// todo ——————————————————————————————————————————————————————————————————————————————————
const createOneProperty = property => ({
  type: CREATE_PROPERTY,
  property
});

const getAllProperties = properties => ({
  type: GET_ALL_PROPERTIES,
  properties
});

const getOneProperty = property => ({
  type: GET_ONE_PROPERTY,
  property
});

const updateOneProperty = property => ({
  type: UPDATE_PROPERTY,
  property
}); 

const deleteOneProperty = propertyId => ({
  type: DELETE_PROPERTY,
  propertyId
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
    // return alert('HEY');
    return properties;
  }
};

export const getProperty = id => async (dispatch) => {
  const response = await fetch(`/api/properties/${id}`);

  if (response.ok) {
    const property = await response.json();
    dispatch(getOneProperty(property));
    return property;
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
    const {propertyId, message} = await response.json();
    dispatch(deleteOneProperty(propertyId));
    return {propertyId, message};
  }
};

// todo ——————————————————————————————————————————————————————————————————————————————————
// todo                                 Reducer
// todo ——————————————————————————————————————————————————————————————————————————————————
const initialState = { listOfProperties: [], listOfReviews: [] };

const propertyReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PROPERTY: 
      return {
      ...state,
      [action.property.id]: {
        ...state[action.property.id],
        ...action.property
      }
    };
// todo ——————————————————————————————————————————————————————————————————————————————————
    case GET_ALL_PROPERTIES:
      // const properties = {}; 
      // action.properties.forEach(property => {
      //   properties[property.id] = property;
      // });
      return {
        // ...properties, //* unnecessary?
        ...state,
        listOfProperties: action.properties
      };
// todo ——————————————————————————————————————————————————————————————————————————————————
    case GET_ONE_PROPERTY:
      return {
        ...state,
        
        [action.property.id]: {
          ...state[action.property.id],
          ...action.property
        }
      };
// todo ——————————————————————————————————————————————————————————————————————————————————
    case UPDATE_PROPERTY:
      return {
        ...state,
        [action.property.id]: action.property
      }
// todo ——————————————————————————————————————————————————————————————————————————————————
    case DELETE_PROPERTY: 
    const deleteOnePropertyState = {
      ...state,
      [action.property]: {
        ...state[action.property],
        ...action.property
      }
    }
      return deleteOnePropertyState;
// todo ——————————————————————————————————————————————————————————————————————————————————      
// todo ——————————————————————————————————————————————————————————————————————————————————
// ****                                 REVIEW CASES
// todo ——————————————————————————————————————————————————————————————————————————————————
    case CREATE_REVIEW:
      return;
    // const reviewsArr = [];
      // reviewsArr.push(...[action.propertyId].listOfReviews, action.review)
      // return {
      //   ...state,
      //   [action.propertyId]: {
      //     ...state[action.propertyId],
      //     listOfReviews: reviewsArr
      //   }
      // };
// **** ——————————————————————————————————————————————————————————————————————————————————
    // case GET_ALL_REVIEWS: //! Do I need to create shallow
    //   // const reviews = {};
    //   // console.log('action.reviews:', action.reviews);
    //   // action.reviews.contentArray.forEach(review => {
    //   //   reviews[review.id] = review;
    //   // });
    //   return {
    //     ...state,
    //     [action.propertyId]: {
    //       ...state[action.propertyId], //! OR is it ok to pass in directly here?
    //       listOfReviews: action.reviews.contentArray
    //     }
    //   }
// **** ——————————————————————————————————————————————————————————————————————————————————
    case DELETE_REVIEW:
      const filteredArr = state[action.propertyId].listOfReviews
        .filter(review => review.id !== action.reviewId)

      return {
        ...state,
        [action.propertyId]: {
          ...state[action.propertyId],
          listOfReviews: filteredArr
        }
      };
// **** ——————————————————————————————————————————————————————————————————————————————————
    default:
      return state;
  }
};

export default propertyReducer;