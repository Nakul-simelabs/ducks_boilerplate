// Actions
const LOGIN_START = 'ducks/auth/LOGIN_START';
const LOGIN_SUCCESS = 'ducks/auth/LOGIN_SUCCESS';
const LOGIN_FAIL = 'ducks/auth/LOGIN_FAIL';

// Reducer
export default function reducer(state = { loading: false, tokens: null, error: null }, action = {}) {
    switch (action.type) {
        case LOGIN_START:
            return {
                ...state,
                loading: true
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false
            };
        case LOGIN_FAIL:
            return {
                ...state,
                loading: false
            };

        default:
            return state;
    }
}

// Action Creators
export function loginStart() {
    return { type: LOGIN_START };
}

export function loginSuccess() {
    return { type: LOGIN_SUCCESS };
}

export function loginFail() {
    return { type: LOGIN_FAIL };
}

export function login() {
    return dispatch => {
        dispatch(loginStart());
        //Do login and dispatch accordingly
        dispatch(loginSuccess());
        dispatch(loginFail());
    };
}
