import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { AppProvider } from './providers/AppProvider'
import './style/Main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <AppProvider>
        <App />
    </AppProvider>
)
