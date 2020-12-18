import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "rsuite/dist/styles/rsuite-default.css";
import AppPage from "./routes/App";
import SignIn from "./routes/SignIn";
import SignUp from "./routes/SignUp";
import { Provider, useDispatch } from "react-redux";
import store from "./store";
import actions from "./actions";
import jwt from "jsonwebtoken"; 

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    const token = window.localStorage.getItem("token")
    if (token) {
      const user = jwt.decode(token)
      dispatch(actions.setUser(user))
    }
  },[])
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={AppPage} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </BrowserRouter>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App  />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
