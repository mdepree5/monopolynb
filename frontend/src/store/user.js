const GET_ONE_USER = 'user/get_one';
// todo ——————————————————————————————————————————————————————————————————————————————————
const getOneUser = user => ({ type: GET_ONE_USER, user });
// todo ——————————————————————————————————————————————————————————————————————————————————
// todo                                 Thunks
// todo ——————————————————————————————————————————————————————————————————————————————————
export const getUserById = id => async (dispatch) => {
  const response = await fetch(`/api/users/${id}`);

  if (response.ok) {
    const user = await response.json();
    dispatch(getOneUser(user));
    return user;
  }
  return response;
};
// todo ——————————————————————————————————————————————————————————————————————————————————
// todo                                 Reducer
// todo ——————————————————————————————————————————————————————————————————————————————————
const initialState = {};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ONE_USER:
      return {
        ...state,
        [action.user.id]: {
          ...state[action.user.id],
          ...action.property
        }
      };
// todo ——————————————————————————————————————————————————————————————————————————————————
    default:
      return state;
  }
};

export default userReducer;