import React, { useContext } from 'react'
import classes from '../style/Footer.module.css'
import AppContext from '../providers/AppProvider'
import SocialItem from './common/SocialItem'

function Footer() {
    const { footer } = useContext(AppContext)

    return (
        <footer className={classes.container}>
            <div className={classes.socials}>
                {footer.socials.map((element) => (
                    <SocialItem key={element.url} img={element.img} url={element.url} />
                ))}
            </div>
            <p className={classes.text}>{footer.copyright}</p>
        </footer>
    )
}

export default Footer
