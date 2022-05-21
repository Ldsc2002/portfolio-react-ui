import React from 'react'
import PropTypes from 'prop-types'

function LanguageSelector({ languages, langChange }) {
    return (
        <div className="posts-container">
            {languages.map((language) => (
                <button
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
    languages: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.string,
        lang: PropTypes.string,
    })),
    langChange: PropTypes.func,
}

export default LanguageSelector
