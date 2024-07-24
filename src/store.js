import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";

//import reducers
import { sheetDataReducer } from "./reducers/sheetDataReducer.js";
import currentUserReducer from "./reducers/currentUserReducer.js";
import {
  geminiContentReducer,
  geminiToDatabaseReducer,
} from "./reducers/geminiReducer.js";
import { createUserReducer } from "./reducers/userReducer.js";

// Combine reducers if you have multiple reducers
const rootReducer = combineReducers({
  sheetData: sheetDataReducer,
  currentUser: currentUserReducer,
  geminiContent: geminiContentReducer,
  geminiToDatabase: geminiToDatabaseReducer,
  userData: createUserReducer,
});

// Create Redux store
const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

export default store;
