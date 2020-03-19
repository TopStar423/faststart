import * as types from '../actions';
import { getSession } from '../utils/auth.service';
import { reject, resolve } from '../middleware/simple_promise';

let session = getSession();

const DEFAULT_AUTH_STATE = {
    isAuthenticated: session && !!session.token,
    user: session
};

export const auth = (state = DEFAULT_AUTH_STATE, action = { type: 'invalid', payload: {} }) => {
    switch (action.type) {
        case resolve(types.LOGIN):
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload.user,
                error: null
            };
        case resolve(types.REGISTER):
            return {
                ...DEFAULT_AUTH_STATE,
                isAuthenticated: true,
                user: action.payload.user,
                error: null
            };
        case types.LOGOUT:
            return {
                ...DEFAULT_AUTH_STATE,
                isAuthenticated: false,
            };
        case reject(types.LOGIN):
            return {
                ...DEFAULT_AUTH_STATE,
                isAuthenticated: false,
                token: null,
                error: action.error,
            };
        case reject(types.REGISTER):
            return {
                ...DEFAULT_AUTH_STATE,
                isAuthenticated: false,
                token: null,
                signupError: action.error,
            };
        default:
            return state;
    }
};
