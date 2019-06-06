import { INPUT_FOCUS, INPUT_BLUR } from './actionTypes';

const defaultState = {
    searchFocused: false
}

export default (state = defaultState, action) => {
    const newState = JSON.parse(JSON.stringify(state));
    switch(action.type) {
        case INPUT_FOCUS:
            newState.searchFocused = true;
            return newState;
        case INPUT_BLUR:
            newState.searchFocused = false;
            return newState;
        default:
            return state;
    }
}