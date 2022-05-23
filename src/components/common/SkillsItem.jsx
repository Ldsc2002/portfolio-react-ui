import PropTypes from 'prop-types'
import React from 'react'
import { Icon } from '@iconify/react'
import classes from '../../style/SkillsItem.module.css'
import ProgressBar from './ProgressBar'

function SkillsItem({ name, image, level }) {
    return (
        <div className={classes.container}>
            <h3 className={classes.title}>{name}</h3>
            <Icon className={classes.image} icon={image} />
            <div className={classes.progress}>
                <ProgressBar progress={level * 10} />
            </div>
        </div>
    )
}

SkillsItem.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string,
    level: PropTypes.number,
}

export default SkillsItem
