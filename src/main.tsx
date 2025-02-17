import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Login from './pages/Login'
import './index.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Login />
  </StrictMode>,
)
