import React from 'react'
import classes from '../../style/CarouselItem.module.css'

function CarouselItem({ data }) {
    return (
        <div className={classes.carouselItem}>
            <p>{data}</p>
        </div>
    )
}

export default CarouselItem
