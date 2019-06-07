import * as actionTypes from './actionTypes'
import axios from '../../axios-instance'

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token,
        userId: userId
    }
}

export const authFailed = (error) => {
    return {
        type: actionTypes.AUTH_FAILED,
        error: error
    }
}

export const signinSignup = () => {
    return {
        type: actionTypes.SIGNIN_SIGNUP
    }
}

export const cancelSigninSignup = () => {
    return {
        type: actionTypes.CANCEL_SIGNIN_SIGNUP
    }
}

export const auth = (email, password) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: email,
            password: password
        }
        let url = '/signIn'
        axios.post(url, authData)
        .then(res => {
            console.log(res.data)
            dispatch(authSuccess(res.data.token, res.data.userId))
        })
        .catch(err => {
            console.log(err.response.data)
            dispatch(authFailed(err.response.data.error))
        })
    }
}