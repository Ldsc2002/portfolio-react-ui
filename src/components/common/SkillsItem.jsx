import { element } from 'prop-types'
import React from 'react'
import classes from '../../style/SkillsItem.module.css'

function SkillsItem( {name} ) {
    return (
        <div className={classes.container}>
            <p>{name}</p>
        </div>
    )
}

export default SkillsItem
