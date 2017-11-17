import { call, put, actionChannel, take } from 'redux-saga/effects'

import * as TYPES from '../types'

export const api = (url) => fetch(url).then(response => response.json())

export const fetchStarWarsRequest = () => ({
    type: TYPES.FETCH_STAR_WARS_REQUEST
})

export const queueChannelRequests = () => ({
    type: TYPES.QUEUE_CHANNEL_REQUESTS
})

export function* takeOneAtMost() {
    const chan = yield actionChannel(TYPES.QUEUE_CHANNEL_REQUESTS)
    for (let i = 1; i >= 1; i++) {
        yield take(chan)
        yield call (api, 'https://swapi.co/api/people')
        yield put({type: TYPES.FETCH_STAR_WARS_SUCCESS, data: i})
    }
}