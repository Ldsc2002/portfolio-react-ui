import React from 'react'
import PropTypes from 'prop-types'
import classes from '../style/Footer.module.css'

function Footer({ data }) {
    return (
        <footer className={classes.container}>
            <p>Copyright &copy; Luis Santos</p>
        </footer> 
    )
}

Footer.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string,
        optionalTitle: PropTypes.string,
        text: PropTypes.string,
    }),
}

export default Footer
