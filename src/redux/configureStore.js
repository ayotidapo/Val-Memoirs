import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
//import api from 'redux/middleware/api'
import rootReducer from 'redux/reducer'
import { logger } from 'redux-logger'

export default function configureStore(history, client) {
    const reduxRouterMiddleware = routerMiddleware(history)
    const middlewares = [api(client), reduxRouterMiddleware, thunk]
    if (process.env.NODE_ENV === 'development') {
        middlewares.push(logger)
    }
    const store = createStore(rootReducer, applyMiddleware(...middlewares))
    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('redux/reducer', () => {
            const nextRootReducer = rootReducer
            store.replaceReducer(nextRootReducer)
        })
    }
    return store
}
