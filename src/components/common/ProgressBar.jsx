import PropTypes from 'prop-types'
import React from 'react'
import classes from '../../style/ProgressBar.module.css'

function ProgressBar({ progress }) {
    return (
        <div className={classes.container}>
            <div className={classes.progressBackground}>
                <div className={classes.progress} style={{ width: `${progress}%` }} />
            </div>
        </div>
    )
}

ProgressBar.propTypes = {
    progress: PropTypes.number,
}

export default ProgressBar
