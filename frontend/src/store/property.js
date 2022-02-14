import { csrfFetch } from './csrf';
// todo ——————————————————————————————————————————————————————————————————————————————————
const CREATE_PROPERTY = 'property/create';
const GET_ALL_PROPERTIES = 'property/get_all';
const GET_ALL_PROPERTIES_BY_USER_ID = 'property/get_all_by_user_id';
const GET_ONE_PROPERTY = 'property/get_one';
const UPDATE_PROPERTY = 'property/update';
const DELETE_PROPERTY = 'property/delete';
// todo ——————————————————————————————————————————————————————————————————————————————————
const createOneProperty = property => ({ type: CREATE_PROPERTY, property });
const getAllPropertiesByUserId = (properties, userId) => ({ type: GET_ALL_PROPERTIES_BY_USER_ID, properties, userId });
const getAllProperties = properties => ({ type: GET_ALL_PROPERTIES, properties });
const getOneProperty = property => ({ type: GET_ONE_PROPERTY, property });
const updateOneProperty = property => ({ type: UPDATE_PROPERTY, property }); 
const deleteOneProperty = propertyId => ({ type: DELETE_PROPERTY, propertyId });
// todo ——————————————————————————————————————————————————————————————————————————————————
// todo                                 Thunks
// todo ——————————————————————————————————————————————————————————————————————————————————
export const createProperty = property => async (dispatch) => {
  const response = await csrfFetch(`/api/properties`, { method: 'POST', body: JSON.stringify(property) });

  if (response.ok) {
    const newProperty = await response.json();
    dispatch(createOneProperty(newProperty));
    return newProperty;
  }
  return response;
};

export const getProperties = () => async (dispatch) => {
  const response = await fetch(`/api/properties`, { method: 'GET' });

  if (response.ok) {
    const properties = await response.json();
    dispatch(getAllProperties(properties));
    return properties;
  }
  return response;
};

export const getPropertiesByUserId = (userId) => async (dispatch) => {
  const response = await fetch(`/api/users/${userId}/properties`, { method: 'GET' });

  if (response.ok) {
    const properties = await response.json();
    dispatch(getAllPropertiesByUserId(properties, userId));
    return properties;
  }
  return response;
};

export const getProperty = (propertyId) => async (dispatch) => {
  const response = await fetch(`/api/properties/${propertyId}`, { method: 'GET' });

  if (response.ok) {
    const property = await response.json();
    dispatch(getOneProperty(property));
    return property;
  }
  return response;
};

export const updateProperty = property => async (dispatch) => {
  const response = await csrfFetch(`/api/properties/${property.id}`, { method: 'PUT', body: JSON.stringify(property) });

  if (response.ok) {
    const updatedProperty = await response.json();
    dispatch(updateOneProperty(updatedProperty));
    return updatedProperty;
  }
  return response;
};

export const deleteProperty = propertyId => async (dispatch) => {
  const response = await csrfFetch(`/api/properties/${propertyId}`, { method: 'DELETE' });

  if (response.ok) {
    const propertyId = await response.json();
    dispatch(deleteOneProperty(propertyId));
    return propertyId;
  }
  return response;
};
// todo ——————————————————————————————————————————————————————————————————————————————————
// todo                                 Reducer
// todo ——————————————————————————————————————————————————————————————————————————————————
const initialState = { listOfProperties: [] };

const propertyReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PROPERTY: {
      const newState = {...state, listOfProperties:[...state.listOfProperties]};
      
      newState.listOfProperties.unshift(action.property);
      return newState;
    };
// todo ——————————————————————————————————————————————————————————————————————————————————
    case GET_ALL_PROPERTIES_BY_USER_ID:      
    case GET_ALL_PROPERTIES: {
      const newState = {...state};
      const properties = [];
      
      action.properties.forEach(property => properties.push(property));
      newState.listOfProperties = properties;
      return newState;
    };
// todo ——————————————————————————————————————————————————————————————————————————————————
    case GET_ONE_PROPERTY: {
      const newState = {...state, [action.property.id]: action.property};
      return newState;
    }
// todo ——————————————————————————————————————————————————————————————————————————————————
    case UPDATE_PROPERTY: {
      const newState = {...state}
      const updatedProperty = state.listOfProperties.map(property => 
        property.id === action.property.id ? property = action.property : property);

      newState.listOfProperties = updatedProperty;
      return newState;
    };
// todo ——————————————————————————————————————————————————————————————————————————————————
    case DELETE_PROPERTY: {
      const newState = {...state};
      const newProperties = state.listOfProperties.filter(property => {
        return property.id !== action.propertyId;
      })
      newState.listOfProperties = newProperties;
      return newState;
    }
// todo ——————————————————————————————————————————————————————————————————————————————————
    default:
      return state;
  }
};

export default propertyReducer;