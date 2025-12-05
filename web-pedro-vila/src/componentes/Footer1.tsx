import React from 'react';
import './Footer1.css';

const Footer1: React.FC = () => {
    return (
        <footer className="footer">
            {/* Sección de Servicios */}
            <div className="footer-services">
                <div className="service-item">
                    {/* Aquí iría el SVG del camión */}
                    <img src="/src/assets/camion-envio.svg" alt="Envío gratuito" /> {/* Asumiendo que tienes un SVG para el camión */}
                    <p>Envíos gratuitos a partir de 79€</p>
                </div>
                <div className="service-item">
                    {/* Aquí iría el SVG de la devolución */}
                    <img src="/src/assets/devolucion.svg" alt="Devolución gratuita" /> {/* Asumiendo que tienes un SVG para la devolución */}
                    <p>Devolución gratuita</p>
                </div>
                <div className="service-item">
                    {/* Aquí iría el SVG de la tarjeta de crédito */}
                    <img src="/src/assets/tarjeta-financiacion.svg" alt="Servicio de financiación" /> {/* Asumiendo que tienes un SVG para la tarjeta */}
                    <p>Servicio de financiación</p>
                </div>
                <div className="service-item">
                    {/* Aquí iría el SVG del camión rápido */}
                    <img src="/src/assets/camion-rapido.svg" alt="Entrega rápida" /> {/* Asumiendo que tienes un SVG para el camión rápido */}
                    <p>Entrega en máximo 3 días</p>
                </div>
            </div>

            {/* Sección de Navegación Principal */}
            <div className="footer-main-nav">
                <div className="footer-column">
                    <h3>Lidl Plus</h3>
                    <ul>
                        <li><a href="#">Ventajas de Lidl Plus</a></li>
                        <li><a href="#">App Lidl Plus</a></li>
                        <li><a href="#">Activar ofertas</a></li>
                        <li><a href="#">Ayuda</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Atención al cliente</h3>
                    <ul>
                        <li><a href="#">Preguntas frecuentes</a></li>
                        <li><a href="#">Contacto</a></li>
                        <li><a href="#">Localizador de tiendas</a></li>
                        <li><a href="#">Compra online</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Empresa</h3>
                    <ul>
                        <li><a href="#">Quiénes somos</a></li>
                        <li><a href="#">Trabaja con nosotros</a></li>
                        <li><a href="#">Nuestras marcas</a></li>
                        <li><a href="#">Sostenibilidad</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Categorías</h3>
                    <ul>
                        <li><a href="#">Ofertas y promociones</a></li>
                        <li><a href="#">Alimentación</a></li>
                        <li><a href="#">Hogar y textil</a></li>
                        <li><a href="#">Bricolaje y jardín</a></li>
                        <li><a href="#">Juguetes</a></li>
                    </ul>
                </div>
            </div>

            {/* Sección de Redes Sociales y Apps */}
            <div className="footer-social-apps">
                <div className="social-media">
                    <h3>Síguenos</h3>
                    <div className="social-icons">
                        {/* Aquí irían los SVGs o iconos de redes sociales */}
                        <a href="#"><img src="/src/assets/facebook.svg" alt="Facebook" /></a>
                        <a href="#"><img src="/src/assets/instagram.svg" alt="Instagram" /></a>
                        <a href="#"><img src="/src/assets/twitter.svg" alt="Twitter" /></a>
                        <a href="#"><img src="/src/assets/youtube.svg" alt="YouTube" /></a>
                    </div>
                </div>
                <div className="app-downloads">
                    <h3>Descarga la App</h3>
                    <div className="app-icons">
                        {/* Aquí irían los SVGs o iconos de App Store y Google Play */}
                        <a href="#"><img src="/src/assets/app-store.svg" alt="App Store" /></a>
                        <a href="#"><img src="/src/assets/google-play.svg" alt="Google Play" /></a>
                    </div>
                </div>
            </div>

            {/* Sección de Copyright y Legal */}
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Lidl. Todos los derechos reservados.</p>
                <div className="legal-links">
                    <a href="#">Aviso legal</a>
                    <a href="#">Protección de datos</a>
                    <a href="#">Política de cookies</a>
                    <a href="#">Condiciones de uso</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer1;