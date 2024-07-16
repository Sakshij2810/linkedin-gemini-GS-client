import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";

//import reducers
import { dataReducer } from "./reducers/dataReducer.js";

// Combine reducers if you have multiple reducers
const rootReducer = combineReducers({ allData: dataReducer });

// Create Redux store
const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

export default store;
