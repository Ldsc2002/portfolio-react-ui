import React from 'react'
import PropTypes from 'prop-types'
import classes from '../style/Skills.module.css'

function Skills({ data }) {
    return (
        <div className={classes.container}>
            <p>Skills go here</p>
        </div>
    )
}

Skills.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string,
        optionalTitle: PropTypes.string,
        text: PropTypes.string,
    }),
}

export default Skills
