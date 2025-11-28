import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LidlHeader from './componentes/header';
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LidlHeader />
  </StrictMode>,
)
