import React, {Component} from 'react';
import {connect} from 'react-redux'

import Aux from '../Aux/Aux';
import NavBar from '../../containers/NavBar/NavBar';
import Auth from '../../containers/Auth/Auth'

import styles from './Layout.module.css'


class Layout extends Component {
   
    render = () => {
        return(
            <Aux>
                <NavBar />
                {this.props.signinOrSignup ? <Auth /> : null }
                <div className = {styles.mainContent}>
                    {this.props.children}
                </div>
            </Aux>
        )
    }
}

const mapStateToProps = state => {
    return {
        signinOrSignup: state.auth.signinOrSignup
    }
}

export default connect(mapStateToProps)(Layout);