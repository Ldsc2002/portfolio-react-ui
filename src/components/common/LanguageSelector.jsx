import React from 'react'
import PropTypes from 'prop-types'
import classes from '../../style/LanguageSelector.module.css'
import AppData from '../utils/AppData'

function LanguageSelector({ current, langChange }) {
    return (
        <div className={classes.buttonContainer}>
            {AppData.getLanguages().map((language) => (
                <button
                    className={`${language.key === current ? classes.active : classes.button}`}
                    type="button"
                    value={language.key}
                    key={language.key}
                    onClick={langChange}
                >
                    {language.lang}
                </button>
            ))}
        </div>
    )
}

LanguageSelector.propTypes = {
    current: PropTypes.string,
    langChange: PropTypes.func,
}

export default LanguageSelector
