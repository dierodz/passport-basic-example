import { createStore, combineReducers } from "redux";

const actions = {
  names: {
    SET_AUTH_USER: "SET_AUTH_USER",
  },
};

const auth = (state = { user: undefined }, { type, payload }) => {
  switch (type) {
    case actions.names.SET_AUTH_USER:
      return { ...state, user: payload };
    default:
      return state;
  }
};

const reducer = combineReducers({ auth });

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
