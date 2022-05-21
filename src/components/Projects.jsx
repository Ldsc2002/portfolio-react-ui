import React from 'react'
import classes from '../style/Projects.module.css'
import Carousel from './common/Carousel'
import CarouselItem from './common/CarouselItem'

function Projects() {
    return (
        <div className={classes.container}>
            <p>Projects go here</p>
            <Carousel data={[{ id: 1, content: 'Testing1' }, { id: 2, content: 'Testing2' }, { id: 3, content: 'Testing3' }]} content={<CarouselItem />} />
        </div>
    )
}

export default Projects
