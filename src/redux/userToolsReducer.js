const initialState = {
  titleInput: "",
  balloonInput: "",
  panelBackground: "",
  balloonToggle: true,
<<<<<<< HEAD
  char: "",
  panels: [],
=======
  char:"",
>>>>>>> wired-display
  userComic: {}
};

const SET_TITLE = "SET_TITLE";
const SET_TEXT = "SET_TEXT";
const BALLOON_TOGGLE_HANDLE = "BALLOON_TOGGLE";
const SET_BG = "SET_BG";
<<<<<<< HEAD
const SET_CHAR = "SET_CHAR";
const SET_USER_COMIC = "SET_USER_COMIC";
=======
const SET_CHAR = "SET_CHAR"
>>>>>>> wired-display

export default function userToolsReducer(state = initialState, action) {
  let { payload } = action;
  switch (action.type) {
    case SET_TEXT:
      return { ...state, balloonInput: payload };
    case SET_TITLE:
      return { ...state, titleInput: payload };
    case SET_BG:
      return { ...state, panelBackground: payload };
<<<<<<< HEAD
    case BALLOON_TOGGLE_HANDLE:
      return { ...state, balloonToggle: payload };
    case SET_CHAR:
      return { ...state, char: payload };
    case SET_USER_COMIC:
      return { ...state, userComic: payload };
=======
    case BALLOON_TOGGLE:
      return { ...state, baloonToggle: payload };
    case SET_CHAR:
      return { ...state, char: payload };
>>>>>>> wired-display
    default:
      return state;
  }
}

export function setTitle(title) {
  return {
    type: SET_TITLE,
    payload: title
  };
}
export function setText(text) {
  return {
    type: SET_TEXT,
    payload: text
  };
}
export function setChar(text) {
<<<<<<< HEAD
=======
  return {
    type: SET_CHAR,
    payload: text
  };
}
export function balloonToggle(bool) {
>>>>>>> wired-display
  return {
    type: SET_CHAR,
    payload: text
  };
}
export function balloonToggleHandle(bool) {
  return {
    type: BALLOON_TOGGLE_HANDLE,
    payload: bool
  };
}
export function setBackground(bg) {
  return {
    type: SET_BG,
    payload: bg
  };
}
export function setUserComic(comic) {
  return {
    type: SET_USER_COMIC,
    payload: comic
  };
}
