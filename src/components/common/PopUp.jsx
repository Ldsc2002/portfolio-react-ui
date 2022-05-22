import React from 'react'
import PropTypes from 'prop-types'
import classes from '../../style/PopUp.module.css'
import btnImage from '../../images/CloseIcon.svg'

function PopUp({ trigger, children, setTrigger }) {
    return (trigger) ? (
        <div className={classes.popUp}>
            <div className={classes.card}>
                <div className={classes.topBar}>
                    <button className={classes.btnContainer} type="button" onKeyDown={() => setTrigger(false)} onClick={() => setTrigger(false)}>
                        <img alt="" src={btnImage} className={classes.button} />
                    </button>
                </div>
                <div className={classes.content}>
                    {children}
                </div>
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
