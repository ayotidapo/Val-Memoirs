import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'


function lastAction(state = null, action) {
    return action
}
const rootReducer = combineReducers({

    lastAction,

    router: routerReducer,

})
export default rootReducer

// https://github.com/reduxjs/redux/issues/580
