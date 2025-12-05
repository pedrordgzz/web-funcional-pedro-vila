import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import './index.css'
// Importamos el CSS de Bootstrap para tener los estilos base disponibles globalmente
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* Envolvemos la App en BrowserRouter para habilitar el enrutamiento en toda la web */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)