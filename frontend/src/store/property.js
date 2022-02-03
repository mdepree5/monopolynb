const GET_ALL = 'property/get_all';
const CREATE_ONE = 'property/create';
const GET_ONE = 'property/get_one';
const UPDATE_ONE = 'property/update';
const DELETE_ONE = 'property/delete';

// todo ——————————————————————————————————————————————————————————————————————————————————
// todo                                 Action Creators
// todo ——————————————————————————————————————————————————————————————————————————————————

const getAllProperties = properties => ({
  type: GET_ALL,
  properties
});

const createOneProperty = property => ({
  type: CREATE_ONE,
  property
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

export const getOneProperty = (id) => async (dispatch) => {
  const response = await fetch(`/api/properties/${id}`);

  if (response.ok) {
    const pokemon = await response.json();
    console.log('hello one', pokemon);
    dispatch(getSinglePokemon(pokemon));
  }
};

const client = (endpoint, {})


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




const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD:
      const allPokemon = {};
      action.list.forEach(propertyokemon) => {
        allPokemon[pokemon.id] = pokemon;
      });
      return {
        ...allPokemon,
        ...state,
        list: sortList(action.list)
      };
    case LOAD_TYPES:
      return {
        ...state,
        types: action.types
      };

    case UPDATE_ONE:
    case ADD_ONE:
      console.log('add one');
      // if (!state[action.pokemon.id]) {
      const newState = {
        ...state,
        [action.pokemon.id]: action.pokemon
      };
      const pokemonList = newState.list.map((id) => newState[id]);
      pokemonList.push(action.pokemon);
      newState.list = sortList(pokemonList);
      return newState;
    // }

    // case UPDATE_ONE: {
    //   const newState = {
    //     ...state,
    //     [action.pokemon.id]: action.pokemon
    //   };
    //   const pokemonList = newState.list.map((id) => newState[id]);
    //   pokemonList.push(action.pokemon);
    //   newState.list = sortList(pokemonList);
    //   return newState;
    // }

    case GET_ONE:
      return {
        ...state,
        [action.pokemon.id]: {
          ...state[action.pokemon.id],
          ...action.pokemon
        }
      };

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

export default pokemonReducer;
