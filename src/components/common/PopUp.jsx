import React from 'react'
import PropTypes from 'prop-types'
import classes from '../../style/PopUp.module.css'

function PopUp({ trigger, children, setTrigger }) {
    return (trigger) ? (
        <div className={classes.PopUp}>
            <div>
                <button type="button" onClick={() => setTrigger(false)}>x</button>
                {children}
            </div>
        </div>
    )
        : ''
}

PopUp.propTypes = {
    trigger: PropTypes.bool,
    children: PropTypes.element,
    setTrigger: PropTypes.func,
}

export default PopUp
