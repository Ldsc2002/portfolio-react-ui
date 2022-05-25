import React, { useContext } from 'react'
import classes from '../style/About.module.css'
import InfoWindow from './common/InfoWindow'
import AppContext from './providers/AppProvider'

function About() {
    const { about } = useContext(AppContext)

    return (
        <div className={classes.container}>
            <h2 className={classes.title}>{about.title}</h2>
            <InfoWindow text={about.text} title={about.optionalTitle} />
        </div>
    )
}

export default About
