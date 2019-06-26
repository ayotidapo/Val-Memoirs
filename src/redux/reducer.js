import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import { slideImages } from './../app_redux'
import { userStory } from '../views/HomePage/redux/homepage'
function lastAction(state = null, action) {
    return action
}
const rootReducer = combineReducers({

    lastAction,
    slideImages,
    userStory,
    router: routerReducer,

})
export default rootReducer

// https://github.com/reduxjs/redux/issues/580
