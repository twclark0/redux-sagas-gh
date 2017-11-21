import { call, put } from 'redux-saga/effects'

import * as TYPES from '../types'

export const api = (url) => fetch(url).then(response => response.json())

export const fetchStarWarsRequest = () => ({
    type: TYPES.FETCH_STAR_WARS_REQUEST
})

export const fetchStarWarsPlanetsRequest = () => ({
    type: TYPES.FETCH_STAR_WARS_PLANET_REQUEST
})

export function* fetchPerson(action) {
   try {
      const person = yield call(api, 'https://swapi.co/api/people/');
      yield put({type: TYPES.FETCH_STAR_WARS_SUCCESS, data: person.results});
   } catch (e) {
       console.log(e)
   }
}

export function* fetchPlanets(action) {
   try {
      const planet = yield call(api, 'https://swapi.co/api/planets/');
      yield put({type: TYPES.FETCH_STAR_WARS_PLANETS_SUCCESS, data: planet.results});
   } catch (e) {
       console.log(e)
   }
}