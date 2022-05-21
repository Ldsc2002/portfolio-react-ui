import React from 'react'
import PropTypes from 'prop-types'
import classes from '../../style/InfoWindow.module.css'

function InfoWindow({ title, text }) {
    return (
        <div className={classes.container}>
            <div className={classes.topBar}>
                <span className={classes.red} />
                <span className={classes.yellow} />
                <span className={classes.green} />
            </div>
            <div className={classes.textContainer}>
                <h2 className={classes.title}>{title}</h2>
                <p className={classes.text}>{text}</p>
            </div>
        </div>
    )
}

InfoWindow.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
}

export default InfoWindow
