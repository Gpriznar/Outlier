import React from 'react'
import SignInButton from './SignInButton/SignInButton'
import UserAvatar from '../UserAvatar/UserAvatar'

import styles from './LoginStatus.module.css'

const loginStatus = props => {
        return (
            <div className = {styles.statusDiv}>
                {!props.authenticated ? <SignInButton /> : <UserAvatar />}
            </div>)
}

export default loginStatus;