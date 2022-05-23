import { element } from 'prop-types'
import React from 'react'
import classes from '../../style/SkillsItem.module.css'
import { Icon } from '@iconify/react'

function SkillsItem( {name, image, level} ) {
    return (
        <div className={classes.container}>
            <h3 className={classes.title}>{name}</h3>
            <Icon className={classes.image} icon={image} />
            <p>{level}</p>
        </div>
    )
}

export default SkillsItem
