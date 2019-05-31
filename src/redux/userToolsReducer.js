const initialState = {
  panelNumber: 0,
  balloonInput: "",
  panelBackground: "",
  char: "",
  panels: [],
  userComic: []
};

const SET_TEXT = "SET_TEXT";
const SET_BG = "SET_BG";
const SET_CHAR = "SET_CHAR";
const SAVE_USER_PANEL = "SAVE_USER_PANEL";
const SET_PANELS = "SET_PANELS";
const SET_PANEL_NUMBER = "SET_PANEL_NUMBER";
const RESET_FIELDS = "RESET_FIELDS";
const SAVE_USER_COMIC = "SAVE_USER_COMIC";

export default function userToolsReducer(state = initialState, action) {
  let { payload } = action;
  switch (action.type) {
    case SET_TEXT:
      return { ...state, balloonInput: payload };
    case SET_BG:
      return { ...state, panelBackground: payload };
    case SET_CHAR:
      return { ...state, char: payload };
    case SET_PANEL_NUMBER:
      return { ...state, panelNumber: payload };
    case SAVE_USER_COMIC:
      console.log(state.panels);
      let comic = [...state.panels];
      return { ...state, userComic: comic };
    case RESET_FIELDS:
      return {
        ...state,
        panelBackground: "",
        char: "",
        balloonInput: ""
      };
    case SAVE_USER_PANEL:
      let copy = [...state.panels];
      let panel = {
        balloonText: state.balloonInput,
        bg: state.panelBackground,
        char: state.char
      };
      copy[state.panelNumber - 1] = panel;
      return { ...state, panels: copy };
    case SET_PANELS:
      let panelCreator = function() {
        let arr = [];
        for (let i = 0; i < payload; i++) {
          arr.push({
            balloonText: "",
            bg: "",
            char: ""
          });
        }
        return arr;
      };
      let done = panelCreator();
      return { ...state, panels: done };
    default:
      return state;
  }
}

export function setText(text) {
  return {
    type: SET_TEXT,
    payload: text
  };
}
export function setPanels(num) {
  return {
    type: SET_PANELS,
    payload: num
  };
}
export function setChar(text) {
  return {
    type: SET_CHAR,
    payload: text
  };
}

export function setBackground(bg) {
  return {
    type: SET_BG,
    payload: bg
  };
}
export function saveUserPanel() {
  return {
    type: SAVE_USER_PANEL
  };
}
export function setPanelNumber(id) {
  return {
    type: SET_PANEL_NUMBER,
    payload: id
  };
}
export function resetFields() {
  return {
    type: RESET_FIELDS
  };
}
export function saveUserComic() {
  return {
    type: SAVE_USER_COMIC
  };
}
