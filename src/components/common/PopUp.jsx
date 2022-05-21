import React from 'react'
import PropTypes from 'prop-types'
import classes from '../../style/PopUp.module.css'

function PopUp({ trigger, children, setTrigger }) {
    return (trigger) ? (
        <div className={classes.popUp}>
            <div className={classes.card}>
                <button type="button" onClick={() => setTrigger(false)}>x</button>
                {children}
            </div>
        </div>
    )
        : ''
}

export default PopUp
