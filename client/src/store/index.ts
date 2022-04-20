import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import authReducer from "./reducers/auth.reducer";
import thunk from "redux-thunk";

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  authState: authReducer,
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk)),
);

export default store;
