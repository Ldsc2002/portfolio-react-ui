import React from 'react'
import classes from '../style/Footer.module.css'
import AppData from './utils/AppData'

function Footer() {
    return (
        <footer className={classes.container}>
            <p>{AppData.getValue('Footer').copyright}</p>
        </footer>
    )
}

export default Footer
