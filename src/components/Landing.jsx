import React, { useLayoutEffect, useEffect, useRef } from 'react'
import { Icon } from '@iconify/react'
import PropTypes from 'prop-types'
import Typed from 'typed.js'
import classes from '../style/Landing.module.css'
import LanguageSelector from './common/LanguageSelector'

function Landing({ data, lang, langChange }) {
    const animation = useRef(null)
    const typed = useRef(null)
    const firstUpdate = useRef(true)

    const options = {
        strings: data.headerOptions,
        typeSpeed: 50,
        backSpeed: 50,
        loop: true,
    }

    useLayoutEffect(() => {
        if (!firstUpdate.current) {
            typed.current.destroy()
            options.strings = [...data.headerOptions]
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

                <h1 className={classes.name}>{data.name}</h1>

                <div className={classes.typeWrap}>
                    <span className={classes.type} ref={animation} />
                </div>

                <LanguageSelector languages={lang} langChange={langChange} />
            </div>
        </div>
    )
}

Landing.propTypes = {
    data: PropTypes.shape({
        name: PropTypes.string,
        headerOptions: PropTypes.arrayOf(
            PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        ),
    }),
    lang: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.string,
        lang: PropTypes.string,
    })),
    langChange: PropTypes.func,
}

export default Landing
