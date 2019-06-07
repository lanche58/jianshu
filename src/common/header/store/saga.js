import { takeEvery, put } from 'redux-saga/effects';
import * as actionTypes from './actionTypes';
import axios from 'axios';
import * as actionCreators from './actionCreators';

function* getSearchListData() {
    try {
        const res = yield axios.get('/api/headerSearchList.json');
        yield put(actionCreators.getSearchListAction(res.data));
    } catch(err) {
        yield console.log('error');
    }
}

export default function* headerSagas() {
    yield takeEvery(actionTypes.ASYNC_SEARCH_LIST_DATA, getSearchListData)
}