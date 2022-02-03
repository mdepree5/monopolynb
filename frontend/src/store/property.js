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
export const addPokemon = property => async (dispatch) => {
  const response = await fetch(`/api/properties`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(pokemon)
  });

  if (response.ok) {
    const pokemon = await response.json();
    dispatch(addOnePokemon(pokemon));
    return pokemon;
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
    console.log('hello one', property);
    dispatch(getOneProperty(property));
  }
};


export const updatePokemon = property => async (dispatch) => {
  const response = await fetch(`/api/properties/${pokemon.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(pokemon)
  });

  if (response.ok) {
    const editedPokemon = await response.json();
    dispatch(updateOnePokemon(editedPokemon));
    return editedPokemon;
  }
};

const initialState = {
  list: [],
  types: []
};

const sortList = (list) => {
  return list
    .sort((pokemonA, pokemonB) => {
      return pokemonA.number - pokemonB.number;
    })
    .map(propertyokemon) => pokemon.id);
};



// todo ——————————————————————————————————————————————————————————————————————————————————
// todo                                 Reducer
// todo ——————————————————————————————————————————————————————————————————————————————————

