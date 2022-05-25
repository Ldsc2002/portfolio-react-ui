import React, {
    useLayoutEffect, useEffect, useRef, useContext,
} from 'react'
import { Icon } from '@iconify/react'
import Typed from 'typed.js'
import classes from '../style/Landing.module.css'
import LanguageSelector from './common/LanguageSelector'
import AppContext from '../providers/AppProvider'

function Landing() {
    const { landing, name } = useContext(AppContext)

    const animation = useRef(null)
    const typed = useRef(null)
    const firstUpdate = useRef(true)

    const options = {
        strings: landing,
        typeSpeed: 50,
        backSpeed: 50,
        loop: true,
    }

    useLayoutEffect(() => {
        if (!firstUpdate.current) {
            typed.current.destroy()
            options.strings = [...landing]
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

                <h1 className={classes.name}>{name}</h1>

                <div className={classes.typeWrap}>
                    <span className={classes.type} ref={animation} />
                </div>

                <LanguageSelector />
            </div>
        </div>
    )
}

export default Landing
