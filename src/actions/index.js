import { call, put, fork, take, cancel } from 'redux-saga/effects'

import * as TYPES from '../types'

export const api = (url) => fetch(url).then(response => response.json())

export const fetchStarWarsRequest = () => ({
    type: TYPES.FETCH_STAR_WARS_REQUEST
})

export function* fetchPerson(action) {
   try {
      const person = yield call(api, 'https://swapi.co/api/people/')
      yield put({type: TYPES.FETCH_STAR_WARS_SUCCESS, data: person.results})
   } catch (e) {
       console.log(e)
   }
}

export function* forkedFetchPerson() {
    const syncPersons = yield fork(fetchPerson)
    yield take('STOP_BACKGROUND_FETCH')
    yield cancel(syncPersons)
}