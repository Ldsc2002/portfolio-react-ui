import React, { useState } from 'react'
import Landing from './components/Landing'
import GitHubButton from './components/GitHubButton'
import es from './data/es.json'
import en from './data/en.json'
import languages from './data/languages.json'
import About from './components/About'

const langOptions = {
    es,
    en,
}

function App() {
    const [lang, setLang] = useState(es)

    const languageChange = (event) => {
        setLang(langOptions[event.target.value])
    }

    return (
        <div className="app-container">
            <GitHubButton data={lang.GitButton} />
            <Landing data={lang.Landing} lang={languages} langChange={languageChange} />
            <About data={lang.About} />
        </div>
    )
}

export default App
