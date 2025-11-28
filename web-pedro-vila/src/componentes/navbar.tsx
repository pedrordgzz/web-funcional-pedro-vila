import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import './navbar.css'; 

// Iconos importados de react-icons
import { IoMenu, IoNewspaperOutline, IoStorefrontOutline, IoPersonOutline, IoHeartOutline, IoCartOutline } from "react-icons/io5";
import type { IconType } from 'react-icons';

// Interfaces definidas para los tipos de los props
interface BotonIconoProps {
  texto: string;
  Icono: IconType;
}

interface LinkInferiorProps {
  texto: string;
  activo?: boolean;
}

const Navbar: React.FC = () => {
  return (
    <div className="lidl-header-wrapper">

{/* Función para mostrar los elementos de arriba de la página, funcion map que va recorriendo los valores indicados y los muestra */}
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
{/* Logo de Lidl */}
      <Container className="lidl-main-container">
        <div className="lidl-main-row">          
          <div className="lidl-logo">
            <img src="/logo.svg" width="60" height="60" className="d-inline-block align-top" alt="Logo Lidl"/>
          </div>
{/* Botón del menú */}
          <div className="lidl-menu-btn">
            <IoMenu size={30} /> 
            <span>Menú</span>
          </div>
{/* Barra de búsqueda */}
          <Form className="lidl-search-form">
          {/* Rectángulo donde se escribe en la barra de búsqueda */}
            <Form.Control
              type="search"
              placeholder="Buscar"
              className="lidl-search-input"
            />
          {/* Botón de buscar */}
            <Button className="lidl-search-button">
              BUSCAR
            </Button>
          </Form>

{/* Menú de la derecha */}
          <div className="lidl-icons-container">
            {/* Usando props, indicamos el texto que aparecerá y el icono importado de react-icons */}
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

{/* Menú que aparece debajo de la barra de búsqueda */}
      <div className="lidl-bottom-nav">
        <Container>
          <Nav className="lidl-nav-scroll">
            <LinkInferior texto="Compra Online" activo={true} />
            <LinkInferior texto="En tu tienda" />
            <LinkInferior texto="Lidl Plus" />
            <LinkInferior texto="Recetas" />
            <LinkInferior texto="Mundos para ti" />
            <LinkInferior texto="Inspírate" />
          </Nav>
        </Container>
      </div>

    </div>
  );
}


// Renderizo icono como un icono, para así poder darle props, como por ejemplo, el tamaño
const BotonIcono: React.FC<BotonIconoProps> = ({ texto, Icono }) => {
  return (
    <div className="lidl-icon-btn">
      <div className="lidl-icon-svg">
        <Icono size={24} /> 
      </div>
      <span className="lidl-icon-text">{texto}</span>
    </div>
  );
}

const LinkInferior: React.FC<LinkInferiorProps> = ({ texto, activo }) => {
  return (
    <Nav.Link href="#" className={`lidl-nav-link ${activo ? 'active' : ''}`}>
      {texto}
    </Nav.Link>
  );
}

export default Navbar;