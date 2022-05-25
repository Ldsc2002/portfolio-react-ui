import React from 'react'
import PropTypes from 'prop-types'
import classes from '../style/Footer.module.css'

function Footer({ data }) {
    return (
        <footer className={classes.container}>
            <p>{data.copyright}</p>
        </footer>
    )
}

Footer.propTypes = {
    data: PropTypes.shape({
        copyright: PropTypes.string,
    }),
}

export default Footer
