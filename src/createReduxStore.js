import { createStore, compose } from "redux";
import reducer from "./reducers/rootReducer";

//check for settings in localStorge
if (localStorage.getItem("settings") == null) {
  //Deafultsettings
  const defaultSetttings = {
    disableBalanceOnAdd: true,
    disableBalanceOnEdit: false,
    allowRegistration: false,
  };
  //set to localStorage
  localStorage.setItem("settings", JSON.stringify(defaultSetttings));
}
//create intitail state
const initialState = { settings: JSON.parse(localStorage.getItem("settings")) };

// // Check for settings in localStorage
// if (localStorage.getItem("settings") == null) {
//   // Default settings
//   const defaultSettings = {
//     disableBalanceOnAdd: true,
//     disableBalanceOnEdit: false,
//     allowRegistration: false,
//   };

//   // Set to localStorage
//   localStorage.setItem("settings", JSON.stringify(defaultSettings));
//   console.log(JSON.stringify(defaultSettings));
// }

// Create initial state
// const initialState = {
//   settings: JSON.parse(localStorage.getItem("settings")),
// };

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
