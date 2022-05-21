import React, { cloneElement, useEffect, useState } from 'react'
import classes from '../../style/Carousel.module.css'

function Carousel({ data, content }) {
    const [activeIndex, setActiveIndex] = useState(0)

    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = data.length - 1
        } else if (newIndex >= data.length) {
            newIndex = 0
        }
        setActiveIndex(newIndex)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            updateIndex(activeIndex + 1)
        }, 1000)

        return () => {
            if (interval) {
                clearInterval(interval)
            }
        }
    })

    return (
        <div className={classes.carousel}>
            <div className={classes.inner} style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                {data.map((element) => (
                    cloneElement(content, { data: element.content, key: element.id })
                ))}
            </div>

            <div className={classes.indicators}>
                <button onClick={() => {updateIndex(activeIndex - 1)}}>Previous</button>

                {data.map((element) => (
                    <button className={`${element.id - 1 === activeIndex ? classes.active : ""}`} key={element.id} onClick={() => {updateIndex(element.id - 1)}}>{element.id}</button>
                ))}
                
                <button onClick={() => {updateIndex(activeIndex + 1)}}>Next</button>
            </div>
        </div>
        
    )
}

export default Carousel
