import React from 'react'
import Landing from './components/Landing'
import GitHubButton from './components/GitHubButton'
import es from './data/es.json'

function App() {
    return (
        <div className="app-container">
            <GitHubButton data={es.GitButton} />
            <Landing data={es.Landing} />
        </div>
    )
}

export default App
