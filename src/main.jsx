import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import "./styles/flexible.css"
//import "./styles/polices.css"
//import "./styles/navigateur.css";
import "./index.js"



import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
