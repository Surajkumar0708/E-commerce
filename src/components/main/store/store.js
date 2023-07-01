import { createStore, applyMiddleware, compose } from "redux";
import mainReducer from "./reducers/main-reducer/mainReducer";
import thunk from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    mainReducer,
    composeEnhancer(applyMiddleware(thunk)),
);

export default store;