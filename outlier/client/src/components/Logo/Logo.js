import React from 'react';
import outlierLogo from '../../assets/images/outlierLogo.png'
import styles from './Logo.module.css'

const logo = (props) => (
    <div>
        <img className = {styles.logo} src = {outlierLogo} alt = "Outlier" />
    </div>
)

export default logo;