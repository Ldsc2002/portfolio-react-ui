import React from 'react'
import PropTypes from 'prop-types'
import classes from '../style/Skills.module.css'
import SkillsItem from './common/SkillsItem'
import AppData from './utils/AppData'

function Skills({ data }) {
    return (
        <div className={classes.container}>
            <h2 className={classes.title}>{data}</h2>

            <div className={classes.grid}>
                {AppData.getValue('SkillsContent').map((element) => (
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

Skills.propTypes = {
    data: PropTypes.string,
}
export default Skills
