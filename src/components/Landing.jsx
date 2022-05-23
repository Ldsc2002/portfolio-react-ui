import React, { useLayoutEffect, useEffect, useRef } from 'react'
import { Icon } from '@iconify/react'
import PropTypes from 'prop-types'
import Typed from 'typed.js'
import classes from '../style/Landing.module.css'
import LanguageSelector from './common/LanguageSelector'
import AppData from './utils/AppData'

function Landing({
    data, lang, currentLang, langChange,
}) {
    const animation = useRef(null)
    const typed = useRef(null)
    const firstUpdate = useRef(true)

    const options = {
        strings: data,
        typeSpeed: 50,
        backSpeed: 50,
        loop: true,
    }

    useLayoutEffect(() => {
        if (!firstUpdate.current) {
            typed.current.destroy()
            options.strings = [...data]
            typed.current = new Typed(animation.current, options)
        } else {
            firstUpdate.current = false
        }
    })

    useEffect(() => {
        typed.current = new Typed(animation.current, options)

        return () => {
            typed.current.destroy()
        }
    }, [])

    return (
        <div className={classes.container}>
            <div className={classes.titleContainer}>
                <Icon className={classes.icon} icon="la:laptop-code" />

                <h1 className={classes.name}>{AppData.getValue("Name")}</h1>

                <div className={classes.typeWrap}>
                    <span className={classes.type} ref={animation} />
                </div>

                <LanguageSelector current={currentLang} languages={lang} langChange={langChange} />
            </div>
        </div>
    )
}

Landing.propTypes = {
    data: PropTypes.arrayOf(PropTypes.string),
    lang: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.string,
        lang: PropTypes.string,
    })),
    currentLang: PropTypes.string,
    langChange: PropTypes.func,
}

export default Landing
