import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import classes from '../../style/LanguageSelector.module.css'
import AppData from '../utils/AppData'
import AppContext from '../providers/AppProvider'

function LanguageSelector() {
    const { lang, setLangHandler } = useContext(AppContext)

    return (
        <div className={classes.buttonContainer}>
            {AppData.getLanguages().map((language) => (
                <button
                    className={`${language.key === lang ? classes.active : classes.button}`}
                    type="button"
                    value={language.key}
                    key={language.key}
                    onClick={setLangHandler}
                >
                    {language.lang}
                </button>
            ))}
        </div>
    )
}

export default LanguageSelector
