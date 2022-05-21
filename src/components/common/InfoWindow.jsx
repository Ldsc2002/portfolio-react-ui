import React from 'react'
import PropTypes from 'prop-types'
import classes from '../../style/InfoWindow.module.css'

function InfoWindow({ title, text }) {
    return (
        <div className={classes.container}>
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
    )
}

InfoWindow.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string, 
}

export default InfoWindow
