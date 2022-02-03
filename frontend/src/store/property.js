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
    dispatch(remove(property.id));
  }
};


// todo ——————————————————————————————————————————————————————————————————————————————————
// todo                                 Reducer
// todo ——————————————————————————————————————————————————————————————————————————————————

const initialState = { listOfProperties: [] };

const sortList = list => list
.sort((propertyA, propertyB) => propertyA.price - propertyB.price)
.map((property) => property.id);

const propertyReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ONE:
      // if (!state[action.pokemon.id]) {
      const newState = {
        ...state,
        [action.property.id]: action.property
      };
      const pokemonList = newState.list.map((id) => newState[id]);
      pokemonList.push(action.pokemon);
      newState.list = sortList(pokemonList);
      return newState;
// todo ——————————————————————————————————————————————————————————————————————————————————
    case GET_ALL:
      const properties = {};
      action.listOfProperties.forEach(property => {
        properties[property.id] = property;
      });
      return {
        ...properties,
        ...state,
        listOfProperties: sortList(action.listOfProperties)
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
      const newState = {...state};  
      return {
        
        [action.pokemonId]: {
          ...state[action.pokemonId],
          items: state[action.pokemonId].items.filter(
            (itemId) => itemId !== action.itemId
          )
        }
      };
    default:
      return state;
  }
};

export default propertyReducer;