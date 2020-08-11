import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import promise from "redux-promise-middleware";

import goalsReducer from "./reducers/goals";
import loginReducer from "./reducers/login";
import addTodoReducer from "./reducers/addTodo";

// Global state
const reducers = combineReducers({
    goal: goalsReducer,
    login: loginReducer,
    todo: addTodoReducer
});

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, storeEnhancers(applyMiddleware(promise)));

export default store;
