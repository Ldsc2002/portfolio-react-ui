import React from 'react'
import classes from '../style/Footer.module.css'

function Footer({ data }) {
    return (
        <footer className={classes.container}>
            <p>{data.copyright}</p>
        </footer>
    )
}

export default Footer
