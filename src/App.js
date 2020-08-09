import "./App.css";

import React, { Component } from "react";
import firebase from "firebase/app";
import createReduxStore from "./createReduxStore";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { createFirestoreInstance } from "redux-firestore";
import "firebase/firestore";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import AppNavBar from "./components/layout/AppNavBar";
import Dashboard from "./components/layout/Dashboard";
import AddClient from "./components/clients/AddClient";
import ClientDetails from "./components/clients/ClientDetails";

// firebaseConfig

const firebaseConfig = {
  apiKey: "AIzaSyArhr0ShmFlcsL4X0ZarWbPw0Cg3stm1bU",
  authDomain: "reactclientpanel-c8afb.firebaseapp.com",
  databaseURL: "https://reactclientpanel-c8afb.firebaseio.com",
  projectId: "reactclientpanel-c8afb",
  storageBucket: "reactclientpanel-c8afb.appspot.com",
  messagingSenderId: "416529765267",
  appId: "1:416529765267:web:9a2b992438d79bff6b8e66",
  measurementId: "G-NNLRGTBDWB",
};

//react-redux-firebase-config

const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
};

// Initialize firebase instance

firebase.initializeApp(firebaseConfig);
firebase.firestore();
// export default !firebase.apps.length
//   ? firebase.initializeApp(firebaseConfig)
//   : firebase.app();
// firebase.firestore();

//create Store

const store = createReduxStore();
// console.log(store);

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance, // <- needed if using firestore
};

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
          <Router>
            <div className="App">
              <AppNavBar />
              <div className="container">
                <Switch>
                  <Route exact path="/" component={Dashboard} />
                  <Route exact path="/client/add" component={AddClient} />
                  <Route exact path="/client/:id" component={ClientDetails} />
                </Switch>
              </div>
            </div>
          </Router>
        </ReactReduxFirebaseProvider>
      </Provider>
    );
  }
}

export default App;
