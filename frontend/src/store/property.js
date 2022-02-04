// todo ——————————————————————————————————————————————————————————————————————————————————
// todo                                 Variables
// todo ——————————————————————————————————————————————————————————————————————————————————
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


export const deleteProperty = property => async (dispatch) => {
  const response = await fetch(`/api/properties/${property.id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    const property = await response.json();
    dispatch(deleteOneProperty(property.id));
  }
};


// **** ——————————————————————————————————————————————————————————————————————————————————
// **** ——————————————————————————————————————————————————————————————————————————————————
// ****                                 EXPLAIN
// ****                                 
// ****                   Why merge different reducers? 
// ****                   Reviews to Properties as items to Pokemon
// ****                                 
// **** ——————————————————————————————————————————————————————————————————————————————————
// **** ——————————————————————————————————————————————————————————————————————————————————


// todo ——————————————————————————————————————————————————————————————————————————————————
// todo                                 Reducer
// todo ——————————————————————————————————————————————————————————————————————————————————
const initialState = { listOfProperties: {} };

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

// todo ——————————————————————————————————————————————————————————————————————————————————
    case GET_ALL:
      const properties = {}; //* Conceptual: Declare new object 1. avoid mutation, 2. control specific slices of state
      action.properties.forEach(property => {
        properties[property.id] = property;
      });
      return {
        ...properties,
        ...state,
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
      return newState
// todo ——————————————————————————————————————————————————————————————————————————————————
  export const ADD_ITEM = 'items/ADD_ITEM';
  export const LOAD_ITEMS = 'items/LOAD_ITEMS';
  export const REMOVE_ITEM = 'items/REMOVE_ITEM';
  export const UPDATE_ITEM = 'items/UPDATE_ITEM';

// todo ——————————————————————————————————————————————————————————————————————————————————
    case LOAD_ITEMS:
      return {
        ...state,
        [action.pokemonId]: {
          ...state[action.pokemonId],
          items: action.items.map((item) => item.id)
        }
      };
    case REMOVE_ITEM:
      return {
        ...state,
        [action.pokemonId]: {
          ...state[action.pokemonId],
          items: state[action.pokemonId].items.filter(
            (itemId) => itemId !== action.itemId
          )
        }
      };
    case ADD_ITEM:
      console.log(action.item);
      return {
        ...state,
        [action.item.pokemonId]: {
          ...state[action.item.pokemonId],
          items: [...state[action.item.pokemonId].items, action.item.id]
        }
      };





    default:
      return state;
  }
};

export default propertyReducer;