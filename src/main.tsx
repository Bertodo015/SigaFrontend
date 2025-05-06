import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppRoutes from './routes/AppRoute.tsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter >
    {/*<BrowserRouter basename='/ReactSiga/'>*/}
      <AppRoutes />
    </BrowserRouter>
  </StrictMode>,
)
