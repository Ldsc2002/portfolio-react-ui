import React from 'react'
import TypeAnimation from 'react-type-animation';
import classes from '../style/Landing.module.css'
import { Icon } from '@iconify/react';

function Landing() {
    const items = [
        "Testing", 1000, "Hello world", 1000
    ]

    return (
        <div className={classes.container}>
            <div>
                <Icon className={classes.icon} icon="la:laptop-code" />

                <div className={classes.titleContainer}>
                    <h1 className={classes.name}>Luis Santos</h1>
                    
                    <TypeAnimation
                        cursor={true}
                        sequence={items}
                        wrapper="h2"
                        repeat={Infinity}
                    />
                </div>
            </div>
        </div>
    )
}

export default Landing
