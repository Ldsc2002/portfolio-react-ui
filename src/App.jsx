import React, { useState, useEffect } from 'react'

import Landing from './components/Landing'
import GitHubButton from './components/common/GitHubButton'
import About from './components/About'
import PopUp from './components/common/PopUp'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Skills from './components/Skills'
import AppData from './components/utils/AppData'

import UnderConstructionImg from './images/UnderConstruction.svg'
import es from './data/es.json'
import en from './data/en.json'

const langOptions = {
    es,
    en,
}

function App() {
    const [lang, setLang] = useState(es)
    const [showPopUp, setShowPopUp] = useState(false)
    const [popUpContent, setPopUpContent] = useState()

    useEffect(() => {
        const prevLang = localStorage.getItem('lang')
        let message = ''

        if (prevLang !== null) {
            setLang(langOptions[prevLang])
            message = langOptions[prevLang].UnderConstruction
        } else {
            message = lang.UnderConstruction
        }

        if (AppData.isUnderConstruction) {
            const content = (
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
                >
                    <img src={UnderConstructionImg} alt="" style={{ width: `${20}vh`, height: `${20}vh` }} />
                    <p style={{ fontSize: `${40}px` }}>{message}</p>
                </div>
            )

            setPopUpContent(content)
            setShowPopUp(true)
        }
    }, [])

    const languageChange = (event) => {
        localStorage.setItem('lang', event.target.value)
        setLang(langOptions[event.target.value])
    }

    function popUpHandler(content) {
        setPopUpContent(content)
        setShowPopUp(true)
    }

    return (
        <div className="app-container">
            <PopUp trigger={showPopUp} setTrigger={setShowPopUp}>
                {popUpContent}
            </PopUp>

            <GitHubButton data={lang.GitButton} />

            <Landing
                currentLang={lang.Lang}
                data={lang.Landing}
                lang={AppData.getLanguages()}
                langChange={languageChange}
            />

            <About data={lang.About} />

            <Projects data={lang.Projects} action={popUpHandler} />

            <Skills data={lang.Skills} />

            <Footer data={lang.Footer} />

        </div>
    )
}

export default App
