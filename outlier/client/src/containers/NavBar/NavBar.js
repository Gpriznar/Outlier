import React, {Component} from 'react'
import {connect} from 'react-redux'
import Logo from '../../components/Logo/Logo';
import LoginStatus from '../../components/LoginStatus/LoginStatus'

import styles from './NavBar.module.css'


class NavBar extends Component {

    render = () => {
        return (
        <div className = {styles.navBar}>
            <Logo />
            <LoginStatus authenticated = {this.props.token}/>
        </div>
        )
    }
    
}

const mapStateToProps = state => {
    return {
        token: state.token
    }
}

export default connect(mapStateToProps)(NavBar);