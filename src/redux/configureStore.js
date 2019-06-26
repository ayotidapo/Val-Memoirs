import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducer";
import thunk from "redux-thunk";
import { logger } from "redux-logger";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";

export default function configureStore(initialState) {
    const middlewares = [thunk];
    if (process.env.NODE_ENV === "development") {
        console.log(process.env.NODE_ENV)
        middlewares.push(reduxImmutableStateInvariant());
        middlewares.push(logger);
    }

    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(...middlewares)
    );
}