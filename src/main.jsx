import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { collibraJobData } from './seeds/collibra-customer-engineer.js'
import { loadSeed } from './seeds/load-seed.js'

// Seed the app with Collibra Customer Engineer data if localStorage is empty
if (!localStorage.getItem('interview-prep')) {
  loadSeed(collibraJobData)
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
