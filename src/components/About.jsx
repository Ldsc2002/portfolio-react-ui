import React from 'react'
import PropTypes from 'prop-types'
import classes from '../style/About.module.css'
import InfoWindow from './common/InfoWindow'

function About({ data }) {
    return (
        <div className={classes.container}>
            <h2 className={classes.title}>{data.title}</h2>
            <InfoWindow text={data.text} title={data.optionalTitle} />
        </div>
    )
}

About.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string,
        optionalTitle: PropTypes.string,
        text: PropTypes.string,
    }),
}

export default About
