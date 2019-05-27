import { createStore, combineReducers } from "redux";
import userToolsReducer from "./userToolsReducer";

import authReducer from "./authReducer";

const rootReducer = combineReducers({
  userToolsReducer,
  authReducer
});
export default createStore(rootReducer);
