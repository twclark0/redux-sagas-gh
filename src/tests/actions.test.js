import { call, put } from 'redux-saga/effects'

import { fetchPerson, api } from '../actions'
import * as TYPES from '../types'

const gen = fetchPerson()

test('should hit api', () => {
    expect(gen.next().value)
        .toEqual(call(api, 'https://swapi.co/api/people/'))
})

test('on success dispatch success action', () => {
    const person = {results: []}
    expect(gen.next(person).value)
        .toEqual(put({type: TYPES.FETCH_STAR_WARS_SUCCESS, data: person.results}))
})


