const initialState = {
  titleInput: "",
  balloonInput: "",
  panelBackground: "",
  balloonToggle: true,
  userComic: {}
};

const SET_TITLE = "SET_TITLE";
const SET_TEXT = "SET_TEXT";
const BALLOON_TOGGLE = "BALLOON_TOGGLE";
const SET_BG = "SET_BG";

export default function userToolsReducer(state = initialState, action) {
  let { payload } = action;
  switch (action.type) {
    case SET_TEXT:
      return { ...state, balloonInput: payload };
    case SET_TITLE:
      return { ...state, titleInput: payload };
    case SET_BG:
      return { ...state, panelBackground: payload };
    case BALLOON_TOGGLE:
      return { ...state, baloonToggle: payload };
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
export function balloonToggle(bool) {
  return {
    type: BALLOON_TOGGLE,
    payload: bool
  };
}
export function setBackground(bg) {
  return {
    type: SET_BG,
    payload: bg
  };
}
