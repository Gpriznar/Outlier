import * as actionTypes from './actionTypes'
import axios from '../../axios-instance'

export const registerStart = () => {
    return {
        type: actionTypes.SIGNUP_START
    }
}

export const registerSuccess = (token, userId) => {
    return {
        type: actionTypes.SIGNUP_SUCCESS,
        token: token,
        userId: userId
    }
}

export const registerFail = (error) => {
    return {
        type: actionTypes.SIGNUP_FAILED,
        error: error
    }
}

export const register = (firstName, lastName, email, password, phoneNumber,) => {
    return dispatch => {
        dispatch(registerStart());
        const registerData = {
            firstName: firstName, 
            lastName: lastName, 
            email: email,
            password: password,
            phoneNumber: phoneNumber
        }
        let url = '/register'
        axios.post(url, registerData)
        .then(res => {
            console.log(res.data)
            dispatch(registerSuccess(res.data.token, res.data.userId));
        })
        .catch(error => {
            console.log(error.response.data.error)
            dispatch(registerFail(error.response.data.error))
        })
    }
}