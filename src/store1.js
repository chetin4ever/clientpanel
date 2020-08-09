// import { createStore, combineReducers, compose } from "redux";
// import firebase from "firebase/app";
// import "firebase/auth";
// import "firebase/firestore";
// import { reactReduxFirebase, firebaseReducer } from "react-redux-firebase";
// import { reduxFirestore, firestoreReducer } from "redux-firestore";

// // // firebase config
// const firebaseConfig = {
//   apiKey: "AIzaSyArhr0ShmFlcsL4X0ZarWbPw0Cg3stm1bU",
//   authDomain: "reactclientpanel-c8afb.firebaseapp.com",
//   databaseURL: "https://reactclientpanel-c8afb.firebaseio.com",
//   projectId: "reactclientpanel-c8afb",
//   storageBucket: "reactclientpanel-c8afb.appspot.com",
//   messagingSenderId: "416529765267",
//   appId: "1:416529765267:web:9a2b992438d79bff6b8e66",
//   measurementId: "G-NNLRGTBDWB",
// };
// //react-redux-firebase config
// const rrfConfig = {
//   userProfile: "users",
//   useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
// };
// // // Initialize firebase instance
// firebase.initializeApp(firebaseConfig);
// //init firestore
// const firestore = firebase.firestore();
// //Add reactReactReduxFirebase enhancer when making store
// const createStoreWithFirebase = compose(
//   reactReduxFirebase(firebase, rrfConfig), //firebase instance as first argument
//   reduxFirestore(firebase) // <- if you are using firestore
// )(createStore);
// // Add firebase to reducers
// const rootReducer = combineReducers({
//   firebase: firebaseReducer,
//   firestore: firestoreReducer, // <- needed if using firestore
// });
// //create intial state
// const initialState = {};
// // //create store
// // // const composeEnhancers =
// // //   (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
// // //     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
// // //       trace: true,
// // //       traceLimit: 25,
// // //     })) ||
// // //   compose;
// // // const store = createStoreWithFirebase(
// // //   rootReducer,
// // //   initialState,
// // //   composeEnhancers(reactReduxFirebase(firebase))
// // // );
// // const store = createStoreWithFirebase(
// //   rootReducer,
// //   initialState,
// //   compose(
// //     reactReduxFirebase(firebase),
// //     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// //   )
// // );
// // export default store;

// const params = [rootReducer, initialState];

// const store = createStoreWithFirebase(...params);
// console.log("Environment:", process.env.NODE_ENV);

// if (process.env.NODE_ENV === "development") {
//   /* eslint-disable no-underscore-dangle */
//   params.push(
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   );
//   /* eslint-enable */
// }
// export default store;
