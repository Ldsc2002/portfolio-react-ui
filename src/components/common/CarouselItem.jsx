import React from 'react'
import classes from '../../style/CarouselItem.module.css'

function CarouselItem({ data }) {
    return (
        <div className={classes.carouselItem}>
            <div className={classes.container}>
                <p>{data.content.title}</p>
                <p>{data.content.desc}</p>
            </div>
        </div>
    )
}

export default CarouselItem
