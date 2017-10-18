import * as TYPES from '../types'

const intialState = {
    starWars: []
}

const handleStarWarsFetchSuccess = (state, action) => {
    return {
        ...state,
        starWars : action.data 
    }
} 

export default (state = initialState, action) => {
    const handlers = {
        [TYPES.FETCH_STAR_WARS_SUCCESS]: handleStarWarsFetchSuccess
    }
    return handlers[action.type]
        ? handlers[action.type](state, action)
        : state
}