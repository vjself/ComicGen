const initialState = {
  user: null
};

const LOGIN = "LOGIN";
const REGISTER = "REGISTER";
const LOGOUT = "LOGOUT";

export default function authReducer(state = initialState, action) {
  let { payload } = action;
  switch (action.type) {
    case LOGIN:
      return { ...state, user: payload };
    case REGISTER:
      return { ...state, user: payload };
    case LOGOUT:
      return {
        user: null
      };
    default:
      return state;
  }
}

export function login(user) {
  return {
    type: LOGIN,
    payload: user
  };
}

export function register(user) {
  return {
    type: REGISTER,
    payload: user
  };
}

export function logout() {
  return {
    type: LOGOUT
  };
}
