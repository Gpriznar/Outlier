import React, {Component} from 'react';
import {connect} from 'react-redux'

import * as actions from '../../../store/actions'

class SignUp extends Component {
    state = {
        validForm: false,
        error: null,
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        phoneNumber: ''
    }

    handleTextChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signUp(this.state.firstName, this.state.lastName,
            this.state.email, this.state.password, this.state.phoneNumber)
    }

    render = () => {
        
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <label>First Name:
                        <input type = "text" name = "firstName" value = {this.state.firstName} onChange = {this.handleTextChange} required/>
                    </label>
                    <label>Last Name:
                        <input type = "text" name = "lastName" value = {this.state.lastName} onChange = {this.handleTextChange} required/>
                    </label>
                    <label>Email:
                        <input type = "email" name = "email" value = {this.state.email} onChange = {this.handleTextChange} required/>
                    </label>
                    <label>Password: 
                        <input type = "" name = "password" value = {this.state.password} onChange = {this.handleTextChange} required/>
                    </label>
                    <label>Phone Number:
                        <input type = "text" name = "phoneNumber" value = {this.state.phoneNumber} onChange = {this.handleTextChange} required/>
                    </label>
                    <input type = "submit" value = "Sign Up" />
                </form>
                <span onClick = {this.props.toggle}>Sign In</span>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signUp: (firstName, lastName, email, password, phoneNumber) => dispatch(actions.register(firstName, lastName, email, password, phoneNumber))
    }
}

export default connect(null, mapDispatchToProps)(SignUp);