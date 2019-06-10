import {takeEvery, put} from 'redux-saga/effects';
import * as actionTypes from './actionTypes';
import * as actionCreators from './actionCreators';
import axios from 'axios';

function* getHotsList() {
    try {
        const res = yield axios.get('/homeHotsList.json');
        // 设置store中hotsList的值
        console.log('saga');
        // yield put(actionCreators.changeHotsList(res.data));
    } catch(err) {
        console.log('请求失败');
    }
}

export default function* getHotsListSaga() {
    yield takeEvery(actionTypes.GET_ASYNC_HOTS_LIST_DATA, getHotsList())
}