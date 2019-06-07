import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';
export const focusHandleAction = () => {
    return {
        type: actionTypes.INPUT_FOCUS
    }
};

export const blurHandleAction = () => {
    return {
        type: actionTypes.INPUT_BLUR
    }
};

export const mouseEnterAction = () => {
    return {
        type: actionTypes.MOUSE_ENTER
    }
};

export const mouseLeaveAction = () => {
    return {
        type: actionTypes.MOUSE_LEAVE
    }
};

export const asyncSearchListDataAction = () => {
    return {
        type: actionTypes.ASYNC_SEARCH_LIST_DATA
    }
};

export const changePageAction = (page) => {
    return {
        type: actionTypes.CHANGE_PAGE,
        page
    }
};

export const getSearchListAction = (data) => {
    return {
        type: actionTypes.SEARCH_LIST_DATA,
        data: fromJS(data)
    }
};
