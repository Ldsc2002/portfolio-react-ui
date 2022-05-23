import { element } from 'prop-types'
import React from 'react'
import classes from '../../style/SkillsItem.module.css'

function SkillsItem( {data} ) {
    return (
        <div className={classes.container}>
            <p>{data.name}</p>
        </div>
    )
}

export default SkillsItem
