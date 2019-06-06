import {INPUT_FOCUS, INPUT_BLUR} from './actionTypes';

export const focusHandleAction = () => {
    return {
        type: INPUT_FOCUS
    }
};

export const blurHandleAction = () => {
    return {
        type: INPUT_BLUR
    }
};
