import { createStore, compose } from "redux";
import reducer from "./reducers/rootReducer";

const initialState = {};

const composeEnhancers =
  (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      trace: true,
      traceLimit: 25,
    })) ||
  compose;

export default () => {
  return createStore(reducer, initialState, composeEnhancers());
};
