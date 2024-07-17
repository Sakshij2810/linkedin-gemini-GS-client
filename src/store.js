import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";

//import reducers
import { sheetDataReducer } from "./reducers/sheetDataReducer.js";

// Combine reducers if you have multiple reducers
const rootReducer = combineReducers({ sheetData: sheetDataReducer });

// Create Redux store
const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

export default store;
