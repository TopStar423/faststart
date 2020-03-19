import { combineReducers } from 'redux';
import { auth } from './auth';
import { student } from './student';
import * as types from '../actions';

export const fastStartReducer = combineReducers({
    auth,
    student
});

const rootReducer = (state, action) => {
    if (action.type === types.LOGOUT) {
        return fastStartReducer(undefined, action);
    }

    return fastStartReducer(state, action);
};

export default rootReducer;
