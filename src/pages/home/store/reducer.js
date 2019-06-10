import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const defaltState = fromJS({
    hotsList: [],
    page: 1
});

export default (state = defaltState, action) => {
    switch(action.type) {
        case actionTypes.CHANGE_HOTS_LIST:
            return state.set('hotsList', action.data);
        default:
            return state;
    }
} 