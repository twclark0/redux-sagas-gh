import { combineReducers } from 'redux'
import * as TYPES from '../types'

const initialState = {
    starWars: []
}

const handleStarWarsFetchSuccess = (state, action) => {
    return {
        ...state,
        starWars : action.data 
    }
} 

const reducer = (state = initialState, action) => {
    const handlers = {
        [TYPES.FETCH_STAR_WARS_SUCCESS]: handleStarWarsFetchSuccess
    }
    return handlers[action.type]
        ? handlers[action.type](state, action)
        : state
}

const rootReducer = combineReducers({
  reducer
})

export default rootReducer