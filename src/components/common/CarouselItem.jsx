import React from 'react'
import classes from '../../style/CarouselItem.module.css'

function CarouselItem({ data, action }) {
    return (
        <div className={classes.carouselItem}>
            <div className={classes.container}>
                <p>{data.content.title}</p>
                <p>{data.content.desc}</p>
                <button type="button" onClick={() => action(data.content)}>Click me</button>
            </div>
        </div>
    )
}

export default CarouselItem
