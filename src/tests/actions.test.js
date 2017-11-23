import { call, put, fork, take, cancel } from 'redux-saga/effects'
import { createMockTask } from 'redux-saga/utils'

import { fetchPerson, api, forkedFetchPerson } from '../actions'
import * as TYPES from '../types'


describe('fetchPerson ', () => {
    const personGen = fetchPerson()

    it('should hit api', () => {
        expect(personGen.next().value)
            .toEqual(call(api, 'https://swapi.co/api/people/'))
    })

    it('on success dispatch success action', () => {
        const person = {results: []}
        expect(personGen.next(person).value)
            .toEqual(put({type: TYPES.FETCH_STAR_WARS_SUCCESS, data: person.results}))
    })
})

describe('forkedFetchPerson', () => {
  const forkedGen = forkedFetchPerson()

  it('forks the service', () => {
    const expectedYield = fork(fetchPerson)
    expect(forkedGen.next().value).toEqual(expectedYield)
  })

  it('waits for stop action and then cancels the service', () => {
    const mockTask = createMockTask()

    const expectedTakeYield = take('STOP_BACKGROUND_FETCH')
    expect(forkedGen.next(mockTask).value).toEqual(expectedTakeYield)

    const expectedCancelYield = cancel(mockTask)
    expect(forkedGen.next().value).toEqual(expectedCancelYield)
  })
})

