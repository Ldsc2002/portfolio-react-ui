import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import classes from '../style/Projects.module.css'
import Carousel from './common/Carousel'
import CarouselItem from './common/CarouselItem'
import AppContext from '../providers/AppProvider'

function Projects({ action }) {
    const { projects } = useContext(AppContext)

    return (
        <div className={classes.container}>
            <h2 className={classes.title}>{projects.title}</h2>
            <Carousel data={projects.content} content={<CarouselItem action={action} />} />
        </div>
    )
}

Projects.propTypes = {
    action: PropTypes.func,
}

export default Projects
