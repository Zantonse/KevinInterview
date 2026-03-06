import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { kevinProfile, collibraCompany, collibraRole, christinaInterview } from './seeds/collibra-customer-engineer.js'
import { loadSeed } from './seeds/load-seed.js'

// Seed the app with Collibra Customer Engineer data if localStorage is empty or missing profile
const existing = localStorage.getItem('interview-prep')
if (!existing) {
  loadSeed(kevinProfile, collibraCompany, collibraRole, [christinaInterview])
} else {
  try {
    const parsed = JSON.parse(existing)
    if (!parsed.profile || !parsed.roles || Object.keys(parsed.roles).length === 0) {
      // Inject seed if profile is missing (migrated from v2)
      loadSeed(kevinProfile, collibraCompany, collibraRole, [christinaInterview])
    } else {
      // Inject studyPlan into Christina's interview if missing
      const interviews = parsed.interviews || {}
      const christinaId = Object.keys(interviews).find(
        (id) => interviews[id].interviewerName === "Christina Olson"
      )
      if (christinaId && !interviews[christinaId].studyPlan && christinaInterview.studyPlan) {
        parsed.interviews[christinaId].studyPlan = christinaInterview.studyPlan
        localStorage.setItem('interview-prep', JSON.stringify(parsed))
      }
    }
  } catch {
    // Invalid data, reseed
    loadSeed(kevinProfile, collibraCompany, collibraRole, [christinaInterview])
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
