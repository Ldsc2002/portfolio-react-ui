import React from 'react'
import TypeAnimation from 'react-type-animation'
import { Icon } from '@iconify/react'
import classes from '../style/Landing.module.css'

function Landing({ data }) {
    return (
        <div className={classes.container}>
            <div className={classes.titleContainer}>
                <Icon className={classes.icon} icon="la:laptop-code" />

                <h1 className={classes.name}>{data.name}</h1>

                <TypeAnimation
                    cursor
                    sequence={data.headerOptions}
                    wrapper="h2"
                    repeat={Infinity}
                />
            </div>
        </div>
    )
}

export default Landing
