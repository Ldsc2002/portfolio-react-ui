import React from 'react'
import PropTypes from 'prop-types'
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

CarouselItem.propTypes = {
    data: PropTypes.any,
    action: PropTypes.func,
}

export default CarouselItem
