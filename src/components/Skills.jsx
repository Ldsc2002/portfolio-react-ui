import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import classes from '../style/Skills.module.css'
import SkillsItem from './common/SkillsItem'
import AppContext from '../providers/AppProvider'

function Skills() {
    const { skills } = useContext(AppContext)

    return (
        <div className={classes.container}>
            <h2 className={classes.title}>{skills.title}</h2>

            <div className={classes.grid}>
                {skills.content.map((element) => (
                    <SkillsItem
                        key={element.name}
                        name={element.name}
                        image={element.image}
                        level={element.level}
                    />
                ))}
            </div>
        </div>
    )
}

export default Skills
