import React from 'react';
import {connect} from 'react-redux'
import * as actionTypes from '../../../store/actions'
import styles from './SignInButton.module.css'

const signInButton = (props) => (
    <div className = {styles.signInButton} onClick = {props.onSignInButton}>
        <h4 className = {styles.noMargin}>Sign in</h4>
    </div>
)

const mapDispatchToProps = dispatch => {
    return {
        onSignInButton: () => dispatch(actionTypes.signinSignup())
    }
}

export default connect(null, mapDispatchToProps)(signInButton);