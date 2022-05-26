import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from '@iconify/react'
import classes from '../../style/SocialItem.module.css'

function SocialItem({ img, url }) {
    return (
        <a className={classes.link} href={url}>
            <Icon className={classes.image} icon={img} />
        </a>
    )
}

SocialItem.propTypes = {
    img: PropTypes.string,
    url: PropTypes.string,
}

export default SocialItem
