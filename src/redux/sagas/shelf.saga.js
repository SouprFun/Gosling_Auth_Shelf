import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* FetchWatcher() {
    yield takeLatest('GET_ITEMS', fetchShelf);
    yield takeLatest('DELETE_ITEM', deleteItem);
}

function* fetchShelf() {
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

function* deleteItem(action){
    try{
      yield axios.delete(`/shelf/${action.payload.item}`)
      yield put({type:'GET_ITEMS'})
    }
    catch(err){
      console.error('error in delete item', err);
    }
  }


export default FetchWatcher;