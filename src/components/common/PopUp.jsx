import React from 'react'
import PropTypes from 'prop-types'
import classes from '../../style/PopUp.module.css'

function PopUp({ trigger, children, setTrigger }) {
    return (trigger) ? (
        <div className={classes.popUp}>
            <div className={classes.card}>
                <div className={classes.topBar}>
                    <span
                        aria-label="Close pop-up"
                        role="button"
                        className={classes.button}
                        tabIndex={0}
                        onKeyDown={() => setTrigger(false)}
                        onClick={() => setTrigger(false)}
                    />
                </div>
                <div className={classes.content}>
                    {children}
                </div>
            </div>
        </div>
    )
        : ''
}

export default PopUp
