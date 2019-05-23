const initialState = {
  user: null
};

const LOGIN = "LOGIN";
const REGISTER = "REGISTER";
const LOGOUT = "LOGOUT";

export default function authReducer(state = initialState, action) {
  let { payload } = action;
  console.log(action, "ACTION CONSOLE")
  switch (action.type) {
    case LOGIN:
    console.log(payload, "consol PAYLOAD")
      return { ...state, user: payload };
    case REGISTER:
      return { ...state, user: payload };
    case LOGOUT:
      return {
        user: null
      };
    default:
    console.log("default")
      return state;
  }
}

export function login(user) {
  console.log(user, "console USER")
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
