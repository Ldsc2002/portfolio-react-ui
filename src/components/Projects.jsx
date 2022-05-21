import React from 'react'
import classes from '../style/Projects.module.css'
import Carousel from './common/Carousel'
import CarouselItem from './common/CarouselItem'

function Projects({data, action}) {
    return (
        <div className={classes.container}>
            <p>Projects go here</p>
            <Carousel data={data} content={<CarouselItem action={action}/>} />
        </div>
    )
}

export default Projects
