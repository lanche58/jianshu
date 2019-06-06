import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

// 生成 immutable对象（不可变对象）
const defaultState = fromJS({
    searchFocused: false
});

export default (state = defaultState, action) => {
    switch(action.type) {
        case actionTypes.INPUT_FOCUS:
            return state.set('searchFocused', true);
        case actionTypes.INPUT_BLUR:
            return state.set('searchFocused', false);
        default:
            return state;
    }
}