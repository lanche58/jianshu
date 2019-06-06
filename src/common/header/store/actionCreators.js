import * as actionTypes from './actionTypes';

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
