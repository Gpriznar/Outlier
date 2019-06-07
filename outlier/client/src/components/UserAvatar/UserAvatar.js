import React from 'react';
import userDefault from '../../assets/images/userDefault.png'
import styles from './UserAvatar.module.css'

const logo = (props) => (
    <div>
        <img className = {styles.avatarImg} src = {userDefault} alt = "User Avatar" />
    </div>
)

export default logo;