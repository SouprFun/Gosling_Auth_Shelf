import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchWatcher() {
    yield takeLatest('GET_ITEMS', FetchShelf);
}

function* FetchShelf() {
    const config = {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      };

      try {

      const response = yield axios.get('/api/shelf', config);
      yield put({ type: 'SET_ITEM', payload: response.data });
    } catch {
        console.log('error in SAGA GETing items.')
    }
}


export default FetchShelf;