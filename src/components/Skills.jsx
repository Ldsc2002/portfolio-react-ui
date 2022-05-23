import React from 'react'
import PropTypes from 'prop-types'
import classes from '../style/Skills.module.css'
import SkillsItem from './common/SkillsItem'

function Skills({ data }) {
    return (
        <div className={classes.container}>
            <h2 className={classes.title}>{data.title}</h2>

            <div className={classes.grid}>
                {data.content.map((element) => (
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
    data: PropTypes.shape({
        title: PropTypes.string,
        content: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string,
                image: PropTypes.string,
                level: PropTypes.number,
            }),
        ),
    }),
}
export default Skills
