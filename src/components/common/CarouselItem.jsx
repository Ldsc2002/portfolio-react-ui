import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classes from '../../style/CarouselItem.module.css'

function CarouselItem({ data, action }) {
    const [image, setImage] = useState({})

    import("../../images/" + data.content.image).then((img) => setImage(img))

    return (
        <div className={classes.carouselItem}>
            <div className={classes.container}>
                <p>{data.content.title}</p>
                <img alt={data.content.title} src={image.default} />
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
