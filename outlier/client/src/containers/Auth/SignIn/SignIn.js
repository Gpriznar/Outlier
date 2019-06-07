import React, {Component} from 'react';
import {connect} from 'react-redux'

import * as actions from '../../../store/actions'

import styles from './SignIn.module.css'

class SignIn extends Component {
    state = {
        validForm: false,
        error: null,
        email: '',
        password: ''
    }

    handleTextChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state.email, this.state.password)
    }

    render = () => {
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <label>Email: 
                        <input type = "email" name = "email" value = {this.state.email} onChange = {this.handleTextChange} />
                    </label>
                    <label>Password: 
                        <input type = "password" name = "password" value = {this.state.password} onChange = {this.handleTextChange} />
                    </label>
                    <input type = "submit" value = "Submit" />
                </form>
                <span onClick = {this.props.toggle}>Sign Up</span>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signIn: (email, password) => dispatch(actions.auth(email, password))
    }
}

export default connect(null, mapDispatchToProps)(SignIn);