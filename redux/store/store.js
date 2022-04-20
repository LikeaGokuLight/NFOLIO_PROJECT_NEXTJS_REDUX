
// Redux Initial Setup
import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";
import { createWrapper } from "next-redux-wrapper";

// My Reducers
import {portfolioReducer} from "../reducers/portfolioReducer";
import {tableReducer} from "../reducers/tableReducer";
import {cardsReducer} from "../reducers/cardsReducer";

// Combine Reducers
const rootReducers = combineReducers({
  portfolio: portfolioReducer,
  table: tableReducer,
  cards: cardsReducer
});

export const store = createStore( rootReducers, composeWithDevTools(applyMiddleware(thunk)) );

const makeStore = () => store;

export const wrapper = createWrapper(makeStore);