import React from 'react'
import classes from '../style/Skills.module.css'
import SkillsItem from './common/SkillsItem'

function Skills( {data} ) {
    return (
        <div className={classes.container}>
            <div className={classes.grid}>
                {data.content.map((element) => (
                    <SkillsItem key={element.id} data={element.content}/>
                ))}  
            </div>
        </div>
    )
}

export default Skills
