import { createStore, combineReducers } from "redux";
import userToolsReducer from "./userToolsReducer";
import authReducer from "./authReducer"

<<<<<<< HEAD

export default createStore(userToolsReducer);
=======
const rootReducer = combineReducers({
    userToolsReducer,
    authReducer
})
export default createStore(rootReducer);
>>>>>>> 08d07183e40bc625ee490f7cb60ea6a5c0df8f35
