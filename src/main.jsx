import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Page2 from "./App2/App2.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
createRoot(document.getElementById('root-2')).render(
    <StrictMode>
        <Page2 />
    </StrictMode>,
)