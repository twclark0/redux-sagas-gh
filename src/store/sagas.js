import { takeLatest, all } from 'redux-saga/effects'

import * as TYPES from '../types'
import { fetchPerson, fetchPlanets } from '../actions' 

function* mySaga() {
  yield all([
    takeLatest(TYPES.FETCH_STAR_WARS_REQUEST, fetchPerson),
    takeLatest(TYPES.FETCH_STAR_WARS_PLANET_REQUEST, fetchPlanets)
  ])    
}

export default mySaga