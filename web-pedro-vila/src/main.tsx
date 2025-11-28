import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import  Body  from './componentes/body.tsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.tsx'
import Footer from './componentes/Footer.tsx';
import LidlHeader from './componentes/header.tsx';
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LidlHeader />
    <Body/>
    <Footer/>
  </StrictMode>,
)
