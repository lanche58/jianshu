import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

// 异步获取数据action
export const getAsyncHotsListAction = () => ({
    type: actionTypes.GET_ASYNC_HOTS_LIST_DATA
});

export const changeHotsList = (data) => ({
    type: actionTypes.CHANGE_HOTS_LIST,
    data: fromJS(data)
});