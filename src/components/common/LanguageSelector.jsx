import React, { useContext } from 'react'
import classes from '../../style/LanguageSelector.module.css'
import AppContext from '../../providers/AppProvider'

function LanguageSelector() {
    const { lang, setLangHandler, languageOptions } = useContext(AppContext)

    return (
        <div className={classes.buttonContainer}>
            {languageOptions.map((language) => (
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
