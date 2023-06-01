import { SET_USER_ATTRIBUTES } from "../actions/user";

const initialState = {
  attributes: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_ATTRIBUTES:
      return { ...state, attributes: action.data };
    default:
      return state;
  }
};

export default userReducer;
