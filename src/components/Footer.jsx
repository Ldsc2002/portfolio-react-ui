import React, { useContext } from 'react'
import classes from '../style/Footer.module.css'
import AppContext from '../providers/AppProvider'

function Footer() {
    const { footer } = useContext(AppContext)

    return (
        <footer className={classes.container}>
            <p>{footer.copyright}</p>
        </footer>
    )
}

export default Footer
