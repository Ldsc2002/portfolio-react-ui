/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/control-has-associated-label */

import React, { cloneElement, useEffect, useState } from 'react'
import { useSwipeable } from 'react-swipeable'
import PropTypes from 'prop-types'
import classes from '../../style/Carousel.module.css'

function Carousel({ data, content }) {
    const [activeIndex, setActiveIndex] = useState(0)
    const [paused, setPaused] = useState(false)

    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            setActiveIndex(data.length - 1)
        } else if (newIndex >= data.length) {
            setActiveIndex(0)
        } else {
            setActiveIndex(newIndex)
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if (!paused) {
                updateIndex(activeIndex + 1)
            }
        }, 3000)

        return () => {
            if (interval) {
                clearInterval(interval)
            }
        }
    })

    const handlers = useSwipeable({
        onSwipedLeft: () => updateIndex(activeIndex + 1),
        onSwipedRight: () => updateIndex(activeIndex - 1),
    })

    return (
        <div
            {...handlers}
            className={classes.carousel}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            <div className={classes.inner} style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                {data.map((element) => (
                    cloneElement(content, { data: element, key: element.id })
                ))}
            </div>

            <div className={classes.indicators}>
                {data.map((element) => (
                    <button
                        type="button"
                        className={`${element.id - 1 === activeIndex ? classes.active : ''}`}
                        key={element.id}
                        onClick={() => { updateIndex(element.id - 1) }}
                    />
                ))}
            </div>
        </div>

    )
}

Carousel.propTypes = {
    data: PropTypes.array,
    content: PropTypes.arrayOf(
        PropTypes.any,
    ),
}

export default Carousel
