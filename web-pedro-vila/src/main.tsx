import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NavScrollExample from './componentes/navbar.tsx'
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NavScrollExample />
  </StrictMode>,
)
