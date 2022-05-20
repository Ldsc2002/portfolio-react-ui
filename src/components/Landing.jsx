import React from 'react'
import TypeAnimation from 'react-type-animation'
import { Icon } from '@iconify/react'
import classes from '../style/Landing.module.css'

function Landing() {
    const items = [
        'Testing', 1000, 'Hello world', 1000,
    ]

    return (
        <div className={classes.container}>
            <div className={classes.titleContainer}>
                <Icon className={classes.icon} icon="la:laptop-code" />

                <h1 className={classes.name}>Luis Santos</h1>

                <TypeAnimation
                    cursor
                    sequence={items}
                    wrapper="h2"
                    repeat={Infinity}
                />
            </div>
        </div>
    )
}

export default Landing
