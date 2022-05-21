import React from 'react'
import PropTypes from 'prop-types'
import classes from '../style/About.module.css'

function About({ data }) {
    return (
        <div className={classes.container}>
            <h2>{data.title}</h2>
        </div>
    )
}

About.propTypes = {
    data: PropTypes.shape({
        url: PropTypes.string,
    }),
}

export default About
