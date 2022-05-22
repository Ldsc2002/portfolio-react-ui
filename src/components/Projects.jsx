import React from 'react'
import PropTypes from 'prop-types'
import classes from '../style/Projects.module.css'
import Carousel from './common/Carousel'
import CarouselItem from './common/CarouselItem'

function Projects({ data, action }) {
    return (
        <div className={classes.container}>
            <h2>{data.title}</h2>
            <Carousel data={data.content} content={<CarouselItem action={action} />} />
        </div>
    )
}

Projects.propTypes = {
    data: PropTypes.any,
    action: PropTypes.func,
}

export default Projects
