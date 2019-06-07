import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility'

const initialState = {
    signinOrSignup: false,
    token: null,
    userId: null,
    error: null,
    loading: false
}

const authStart = (state, action) => {
    return updateObject(state, {error: null, loading: true})
}

const authSuccess = (state, action) => {
    return updateObject(state, {
        token: action.token,
        userId: action.userId,
        error: null,
        loading: false
    })
}

const authFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
    })
}

const signUpStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    })
}

const signUpSuccess = (state, action) => {
    return updateObject(state, {
        token: action.token,
        userId: action.userId,
        error: null,
        loading: false
    })
}

const signUpFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
    })
}

const signinSignup = (state, action) => {
    return updateObject(state, {
        signinOrSignup: true
    })
}

const cancelSigninSignup = (state, action) => {
    return updateObject(state, {
        signinOrSignup: false
    })
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.AUTH_START: return authStart(state, action);
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
        case actionTypes.AUTH_FAILED: return authFail(state, action);
        case actionTypes.SIGNUP_START: return signUpStart(state, action);
        case actionTypes.SIGNUP_SUCCESS: return signUpSuccess(state, action);
        case actionTypes.SIGNUP_FAILED: return signUpFail(state, action);
        case actionTypes.SIGNIN_SIGNUP: return signinSignup(state, action);
        case actionTypes.CANCEL_SIGNIN_SIGNUP: return cancelSigninSignup(state, action);
        default: return state;
    }
}

export default reducer;