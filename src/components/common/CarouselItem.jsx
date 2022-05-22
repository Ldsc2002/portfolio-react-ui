import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classes from '../../style/CarouselItem.module.css'
import btnImage from '../../images/OpenIcon.svg'

function CarouselItem({ data, action }) {
    const [image, setImage] = useState({})

    import(`../../images/${data.content.image}`).then((img) => setImage(img))

    return (
        <div className={classes.carouselItem}>
            <div className={classes.topBar}>

                <div className={classes.flexContainer}>
                    <button className={classes.openBtn} type="button" onClick={() => action(data.content)}>
                        <img alt="" src={btnImage} className={classes.button} />
                    </button>
                </div>

                <div className={classes.titleContainer}>
                    <h3>{data.content.title}</h3>
                </div>

                <div className={classes.flexContainer} />
            </div>

            <div className={classes.container}>
                <img className={classes.image} alt={data.content.title} src={image.default} />
            </div>
        </div>
    )
}

CarouselItem.propTypes = {
    data: PropTypes.any,
    action: PropTypes.func,
}

export default CarouselItem