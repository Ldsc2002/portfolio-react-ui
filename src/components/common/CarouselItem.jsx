import React from 'react'
import PropTypes from 'prop-types'
import classes from '../../style/CarouselItem.module.css'
import btnImage from '../../images/OpenIcon.svg'

function CarouselItem({ data, action }) {
    const popUpContent = (
        <div>{data.content.url}</div>
    )

    return (
        <div className={classes.carouselItem}>
            <div className={classes.topBar}>

                <div className={classes.flexContainer}>
                    <button className={classes.openBtn} type="button" onClick={() => action(popUpContent)}>
                        <img alt="" src={btnImage} className={classes.button} />
                    </button>
                </div>

                <div className={classes.titleContainer}>
                    <h3>{data.content.title}</h3>
                </div>

                <div className={classes.flexContainer} />
            </div>

            <div className={classes.container}>
                <img className={classes.image} alt={data.content.title} src={`/${data.content.image}`} />
                <div className={classes.shortDesc}>{data.content.desc}</div>
            </div>
        </div>
    )
}

CarouselItem.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.number,
        content: PropTypes.shape({
            title: PropTypes.string,
            image: PropTypes.string,
            desc: PropTypes.string,
            url: PropTypes.string,
        }),
    }),
    action: PropTypes.func,
}

export default CarouselItem
