import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import IconBar from './iconbar';
import './footer.css';

// Importamos los iconos sociales de la librería react-icons
import {
    FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaTiktok, FaWhatsapp, FaChevronUp
} from "react-icons/fa";

// Definimos un componente auxiliar para renderizar las listas y limpiar el código principal
const FooterList = ({ items }: { items: string[] }) => {
    return (
        <ul className="footer-list">
            {items.map((item, index) => (
                <li key={index}><a href="#">{item}</a></li>
            ))}
        </ul>
    );
};

const Footer: React.FC = () => {

    // Preparamos los arrays de datos para cada sección del footer
    const lidlLinks = [
        "Empresa", "Sostenibilidad", "Sala de prensa", "Empleo",
        "Inmuebles", "Newsletter", "Programa de afiliación",
        "Cupones de descuento", "Ofertas Lidl Online"
    ];

    const appLinks = ["Lidl App - Compra online", "Lidl Plus - Tienda física"];
    const marcasLinks = ["Parkside", "Silvercrest", "Ver todas"];
    const atencionLinks = ["Preguntas frecuentes", "Devolver un pedido", "Estado de mi pedido", "Plazos de entrega", "Gastos de envío"];
    const productosLinks = ["Jardín", "Tablas de paddle surf", "Freidora de aire", "Robots de Cocina", "Panificadora", "Juguetes", "Baterías", "Ver todas las ofertas"];

    const legalLinks = [
        "Aviso legal", "Compliance", "Política de cookies",
        "Política de privacidad", "Términos y condiciones", "Protección de datos"
    ];

    return (
        <footer className="lidl-footer-wrapper">

            {/* 1. Insertamos la barra de iconos superior */}
            <IconBar />

            {/* 2. Estructuramos el contenido principal usando el grid de Bootstrap */}
            <div className="footer-main-content pt-5 pb-4">
                <Container>
                    <Row>
                        {/* COLUMNA 1: Enlaces corporativos y Apps */}
                        <Col md={3} className="mb-4">
                            <h6 className="footer-heading">LIDL</h6>
                            <FooterList items={lidlLinks} />

                            <h6 className="footer-heading mt-4">APPS</h6>
                            <FooterList items={appLinks} />

                            <h6 className="footer-heading mt-4">MARCAS LIDL</h6>
                            <FooterList items={marcasLinks} />
                        </Col>

                        {/* COLUMNA 2: Atención al cliente y logística */}
                        <Col md={3} className="mb-4">
                            <h6 className="footer-heading">ATENCIÓN AL CLIENTE</h6>
                            <FooterList items={atencionLinks} />

                            <h6 className="footer-heading mt-4">ENTREGAS</h6>
                            <div className="logos-grid">
                                <img src="/seur.webp" alt="SEUR" className="logo-box" />
                                <img src="/gls.webp" alt="GLS" className="logo-box" />
                                <img src="/zpo.webp" alt="GLS" className="logo-box" />
                            </div>

                            <h6 className="footer-heading mt-4">NUESTROS PRODUCTOS</h6>
                            <FooterList items={productosLinks} />
                        </Col>

                        {/* COLUMNA 3: Pagos y garantías */}
                        <Col md={3} className="mb-4">
                            <h6 className="footer-heading">MÉTODOS DE PAGO</h6>
                            <div className="logos-grid">
                                <img src="/visa.webp" alt="Visa" className="logo-box" />
                                <img src="/mc.webp" alt="MasterCard" className="logo-box" />
                                <img src="/maestro.webp" alt="Maestro" className="logo-box" />
                                <img src="/bizum.webp" alt="Bizum" className="logo-box" />
                                <img src="/gpayç.webp" alt="GPay" className="logo-box" />
                                <img src="/aplazame.webp" alt="Aplázame" className="logo-box" />
                            </div>

                            <h6 className="footer-heading mt-4">GARANTÍA Y SEGURIDAD</h6>
                            <div className="logos-grid">
                                <img src="/confianza online.webp" alt="GLS" className="logo-box" />
                            </div>
                        </Col>

                        {/* COLUMNA 4: Premios */}
                        <Col md={3} className="mb-4">
                            <h6 className="footer-heading">PREMIOS</h6>
                            <div className="logos-grid">
                                <img src="/logo.webp"  className="logo-bopx" />
                                <img src="/atencion.webp"  className="logo-bopx" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* 3. Barra inferior con enlaces legales y redes sociales */}
            <div className="footer-bottom-bar py-3">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={8} md={12} className="mb-3 mb-lg-0">
                            <ul className="legal-links list-unstyled d-flex flex-wrap m-0">
                                {/* Iteramos los links legales añadiendo separadores condicionales */}
                                {legalLinks.map((link, idx) => (
                                    <li key={idx} className="me-3 position-relative">
                                        <a href="#">{link}</a>
                                        {idx < legalLinks.length - 1 ? <span className="separator ms-2">|</span> : null}
                                    </li>
                                ))}
                            </ul>
                        </Col>

                        <Col lg={4} md={12} className="d-flex justify-content-center justify-content-lg-end align-items-center gap-3">
                            <FaFacebookF className="social-icon" />
                            <FaTwitter className="social-icon" />
                            <FaYoutube className="social-icon" />
                            <FaInstagram className="social-icon" />
                            <FaTiktok className="social-icon" />
                            <FaWhatsapp className="social-icon" />

                            <div className="scroll-btn ms-2">
                                <FaChevronUp />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </footer>
    );
};

export default Footer;