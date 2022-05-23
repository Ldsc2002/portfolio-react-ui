import React from 'react'
import classes from '../style/Skills.module.css'
import SkillsItem from './common/SkillsItem'

function Skills( {data} ) {
    return (
        <div className={classes.container}>
            <h2 className={classes.title}>{data.title}</h2>

            <div className={classes.grid}>
                {data.content.map((element) => (
                    <SkillsItem key={element.name} name={element.name} image={element.image} level={element.level}/>
                ))}  
            </div>
        </div>
    )
}

export default Skills
