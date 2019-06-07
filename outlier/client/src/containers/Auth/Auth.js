import React, {Component} from 'react'
import SignIn from './SignIn/SignIn.js';
import SignUp from './SignUp/SignUp';

import {connect} from 'react-redux'
import * as actions from '../../store/actions'
import styles from './Auth.module.css'

class Auth extends Component {
    state = {
        signIn: true
    }
    closeWindow = () => {
        this.props.closeWindow()
    }

    toggleSignIn = () => {
        this.setState({
            signIn: !this.state.signIn
        })
    }

    render = () => {
        return (
            <div className = {styles.form}>
                <div className = {styles.exitDiv}><span className = {styles.exitSpan} onClick = {this.props.closeWindow}>X</span></div>
                <div className = {styles.label}><h3>{this.state.signIn ? 'Sign In' : 'Sign Up'}</h3></div>
                {this.state.signIn ? <SignIn toggle = {this.toggleSignIn}/> : <SignUp toggle = {this.toggleSignIn}/>}
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        closeWindow: () => dispatch(actions.cancelSigninSignup())
    }
}

export default connect(null, mapDispatchToProps)(Auth);