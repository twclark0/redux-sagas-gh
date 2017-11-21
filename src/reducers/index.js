import { combineReducers } from 'redux'
import * as TYPES from '../types'

const initialState = {
    people: [],
    planet: []
}

const handleStarWarsFetchSuccess = (state, action) => {
    return {
        ...state,
        people : action.data 
    }
} 

const handleStarWarsPlanetFetchSuccess = (state, action) => {
    return {
        ...state, 
        planet: action.data
    }
}

const starWars = (state = initialState, action) => {
    const handlers = {
        [TYPES.FETCH_STAR_WARS_SUCCESS]: handleStarWarsFetchSuccess,
        [TYPES.FETCH_STAR_WARS_PLANETS_SUCCESS]: handleStarWarsPlanetFetchSuccess
    }
    return handlers[action.type]
        ? handlers[action.type](state, action)
        : state
}

const rootReducer = combineReducers({
  starWars
})

export default rootReducer