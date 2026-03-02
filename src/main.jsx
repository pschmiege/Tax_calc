import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '../tax_calculator_v6.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
