import React, { useState, useEffect, useContext } from 'react'

import Landing from './components/Landing'
import GitHubButton from './components/common/GitHubButton'
import About from './components/About'
import PopUp from './components/common/PopUp'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Skills from './components/Skills'

import AppContext from './providers/AppProvider'

import UnderConstructionImg from './images/UnderConstruction.svg'

function App() {
    const [showPopUp, setShowPopUp] = useState(false)
    const [popUpContent, setPopUpContent] = useState()
    const { underConstruction, underConstructionMessage } = useContext(AppContext)

    useEffect(() => {
        const content = (
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}
            >
                <img src={UnderConstructionImg} alt="" style={{ width: `${20}vh`, height: `${20}vh` }} />
                <p style={{ fontSize: `${40}px` }}>{underConstructionMessage}</p>
            </div>
        )
        setPopUpContent(content)
    }, [underConstructionMessage])
    
    useEffect(() => {
        if (underConstruction) {
            setShowPopUp(true)
        }
    }, [])

    function popUpHandler(content) {
        setPopUpContent(content)
        setShowPopUp(true)
    }

    return (
        <div className="app-container">
            <PopUp trigger={showPopUp} setTrigger={setShowPopUp}>
                {popUpContent}
            </PopUp>

            <GitHubButton />

            <Landing />

            <About />

            <Projects action={popUpHandler} />

            <Skills />

            <Footer />

        </div>
    )
}

export default App
