import { csrfFetch } from './csrf';
// todo ——————————————————————————————————————————————————————————————————————————————————
const SET_USER = 'session/setUser';
const REMOVE_USER = 'session/removeUser';
// todo ——————————————————————————————————————————————————————————————————————————————————
const setUser = user => ({ type: SET_USER, payload: user });
const removeUser = () => ({ type: REMOVE_USER });
// todo ——————————————————————————————————————————————————————————————————————————————————
// todo                                 Thunks
// todo ——————————————————————————————————————————————————————————————————————————————————
export const login = user => async (dispatch) => {
  const { credential, password } = user;
  const response = await csrfFetch('/api/session', { method: 'POST', body: JSON.stringify({ credential, password }) });
  const data = await response.json();
  dispatch(setUser(data.user));
  return response;
};

export const demoLogin = user => async (dispatch) => {
  const response = await csrfFetch('/api/session/demo', { method: 'POST' });
  const data = await response.json();
  dispatch(setUser(data.user));
  return response;
};

export const restoreUser = () => async dispatch => {
  const response = await csrfFetch('/api/session');
  const data = await response.json();
  dispatch(setUser(data.user));
  return response;
};

export const signup = user => async (dispatch) => {
  const response = await csrfFetch("/api/users", { method: "POST", body: JSON.stringify(user) });
  const data = await response.json();
  dispatch(setUser(data.user));
  return response;
};

export const logout = () => async (dispatch) => {
  const response = await csrfFetch('/api/session', { method: 'DELETE' });
  dispatch(removeUser());
  return response;
};


// todo ——————————————————————————————————————————————————————————————————————————————————
// todo                                 Reducer
// todo ——————————————————————————————————————————————————————————————————————————————————
const initialState = { user: null };

const sessionReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_USER:
      newState = Object.assign({}, state);
      newState.user = action.payload;
      return newState;
    case REMOVE_USER:
      newState = Object.assign({}, state);
      newState.user = null;
      return newState;
    default:
      return state;
  }
};

export default sessionReducer;