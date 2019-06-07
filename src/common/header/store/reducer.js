import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

// 生成 immutable对象（不可变对象）
const defaultState = fromJS({
    searchFocused: false,
    mouseIn: false,
    list: [],
    page: 1,
    totalPage: 1
});

export default (state = defaultState, action) => {
    switch(action.type) {
        case actionTypes.INPUT_FOCUS:
            return state.set('searchFocused', true);
        case actionTypes.INPUT_BLUR:
            return state.set('searchFocused', false);
        case actionTypes.MOUSE_ENTER:
            return state.set('mouseIn', true);
        case actionTypes.MOUSE_LEAVE:
            return state.set('mouseIn', false);
        case actionTypes.SEARCH_LIST_DATA:
            const total = Math.ceil(action.data.toJS().length / 10);
            return state.merge({
                list: action.data,
                totalPage: total
            });
        case actionTypes.CHANGE_PAGE:
            return state.set('page', action.page);
        default:
            return state;
    }
}