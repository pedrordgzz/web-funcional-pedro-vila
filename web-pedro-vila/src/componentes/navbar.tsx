import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import './navbar.css';

import { NavLink } from "react-router-dom";

// Importamos los iconos necesarios desde la librería react-icons
import { 
  IoMenu, 
  IoNewspaperOutline, 
  IoStorefrontOutline, 
  IoPersonOutline, 
  IoHeartOutline, 
  IoCartOutline 
} from "react-icons/io5";

import type { IconType } from 'react-icons';

// Definimos las interfaces para tipar nuestros props
interface BotonIconoProps {
  texto: string;
  Icono: IconType;
}

interface LinkInferiorProps {
  texto: string;
  to: string;
}

/* =====================================================
   COMPONENTE PRINCIPAL NAVBAR
===================================================== */

const Navbar: React.FC = () => {
  return (
    <div className="lidl-header-wrapper">

      {/* Linea superior del header con texto */}
      <div className="lidl-utility-bar">
        <Container className="lidl-utility-container">
          <span className="lidl-slogan">Vale la pena.</span>
          <div className="lidl-utility-links">
            {/* Iteramos sobre una lista simple de textos para generar los enlaces superiores */}
            {['Newsletter', 'Empresa', 'Sostenibilidad', 'Sala de prensa', 'Empleo', 'Inmuebles', 'Ayuda'].map(link => (
              <span key={link} className="lidl-utility-link">{link}</span>
            ))}
          </div>
        </Container>
      </div>

      {/* Componente principal del header */}
      <Container className="lidl-main-container">
        <div className="lidl-main-row">
          {/* Lodo de lidl */}
          <div className="lidl-logo">
            <img 
              src="/logo.svg" 
              width="60" 
              height="60" 
              className="d-inline-block align-top" 
              alt="Logo Lidl"
            />
          </div>

          {/* Botón de menuº */}
          <div className="lidl-menu-btn">
            <IoMenu size={30} /> 
            <span>Menú</span>
          </div>

          {/* Componente del buscador*/}
          <Form className="lidl-search-form">
            <Form.Control
              type="search"
              placeholder="Buscar"
              className="lidl-search-input"
            />
            <Button className="lidl-search-button">
              BUSCAR
            </Button>
          </Form>

          {/* Componente para pintar los iconos de la derecha */}
          <div className="lidl-icons-container">
            {/* Usamos nuestro componente reutilizable para los botones con icono */}
            <BotonIcono texto="Folleto" Icono={IoNewspaperOutline} />
            <div className="lidl-icon-wrapper">
              <BotonIcono texto="Mi tienda" Icono={IoStorefrontOutline} />
            </div>
            <BotonIcono texto="Identifícate" Icono={IoPersonOutline} />
            <BotonIcono texto="Lista de deseos" Icono={IoHeartOutline} />
            <BotonIcono texto="Cesta" Icono={IoCartOutline} />
          </div>

        </div>
      </Container>

      {/* Menú inferior, debajjo del botón de buscar */}
      <div className="lidl-bottom-nav">
        <Container>
          <Nav className="lidl-nav-scroll">
            {/* Usamos componentes LinkInferior para la navegación interna usando react-router-dom */}
            <LinkInferior texto="Compra Online"  to="/compra-online" />
            <LinkInferior texto="En tu tienda"   to="/en-tu-tienda" />
            <LinkInferior texto="Lidl Plus"      to="/lidl-plus" />
            <LinkInferior texto="Recetas"        to="/recetas" />
            <LinkInferior texto="Mundos para ti" to="/mundos" />
            <LinkInferior texto="Inspírate"      to="/inspirate" />
          </Nav>
        </Container>
      </div>

    </div>
  );
};

// Componente para renderizar los botones de iconos superiores de forma limpia
const BotonIcono: React.FC<BotonIconoProps> = ({ texto, Icono }) => {
  return (
    <div className="lidl-icon-btn">
      <div className="lidl-icon-svg">
        <Icono size={24} /> 
      </div>
      <span className="lidl-icon-text">{texto}</span>
    </div>
  );
};

// Componente para los enlaces inferiores usando NavLink de react-router-dom
const LinkInferior: React.FC<LinkInferiorProps> = ({ texto, to }) => {
  return (
    // Usamos NavLink para detectar automáticamente si el enlace está activo y aplicar la clase "active"
    <NavLink
      to={to}
      className={({ isActive }) =>
        `lidl-nav-link ${isActive ? "active" : ""}`
      }
    >
      {texto}
    </NavLink>
  );
};

export default Navbar;