import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import './navbar.css';

import { NavLink } from "react-router-dom";

// ICONOS (react-icons)
import { 
  IoMenu, 
  IoNewspaperOutline, 
  IoStorefrontOutline, 
  IoPersonOutline, 
  IoHeartOutline, 
  IoCartOutline 
} from "react-icons/io5";

import type { IconType } from 'react-icons';

// Props
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

      {/* ─── UTILITIES BAR (Superior) ─────────────────────── */}
      <div className="lidl-utility-bar">
        <Container className="lidl-utility-container">
          <span className="lidl-slogan">Vale la pena.</span>
          <div className="lidl-utility-links">
            {['Newsletter', 'Empresa', 'Sostenibilidad', 'Sala de prensa', 'Empleo', 'Inmuebles', 'Ayuda'].map(link => (
              <span key={link} className="lidl-utility-link">{link}</span>
            ))}
          </div>
        </Container>
      </div>

      {/* ─── ZONA PRINCIPAL (Logo, Menu, Buscador, Iconos) ─── */}
      <Container className="lidl-main-container">
        <div className="lidl-main-row">

          {/* LOGO */}
          <div className="lidl-logo">
            <img 
              src="/logo.svg" 
              width="60" 
              height="60" 
              className="d-inline-block align-top" 
              alt="Logo Lidl"
            />
          </div>

          {/* BOTÓN MENÚ */}
          <div className="lidl-menu-btn">
            <IoMenu size={30} /> 
            <span>Menú</span>
          </div>

          {/* BUSCADOR */}
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

          {/* ICONOS DERECHA */}
          <div className="lidl-icons-container">
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

      {/* ─── NAVBAR INFERIOR (CON RUTAS REALES) ───────────── */}
      <div className="lidl-bottom-nav">
        <Container>
          <Nav className="lidl-nav-scroll">

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


/* =====================================================
   COMPONENTES AUXILIARES
===================================================== */

// Ícono superior
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

// ENLACES INFERIORES CON NavLink
const LinkInferior: React.FC<LinkInferiorProps> = ({ texto, to }) => {
  return (
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
