import React from 'react'
import PropTypes from 'prop-types'
import classes from '../style/Projects.module.css'

function About({ data }) {
    return (
        <div className={classes.container}>

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
