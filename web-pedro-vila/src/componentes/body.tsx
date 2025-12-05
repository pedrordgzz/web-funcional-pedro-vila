import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import CardBase from './card4'; 
import Ventajas from './ventajas'; // Importamos el nuevo componente
import { IoChevronDownOutline } from "react-icons/io5"; // Icono para el botón

const Body: React.FC = () => {
    
    // Creamos una lista de datos estáticos para generar las tarjetas dinámicamente
    const cardsData = [
        { id: 1, titulo: "Prepárate para la nieve", src: "/nieve.webp" },
        { id: 2, titulo: "Decoración navideña", src: "/Decoración navideña.webp" },
        { id: 3, titulo: "Ocio y diversión adulta", src: "/Ocio y deversión adulta.webp" },
        { id: 4, titulo: "Regala al mejor precio", src: "/Regala al mejor precio.webp" }
    ];

    return (
        <>
            <Container className="my-5">
                <h3 className="mb-4">Destacados de la semana</h3>
                
                {/* Usamos el Grid de Bootstrap para organizar las tarjetas */}
                <Row>
                    {/* Iteramos sobre los datos para pintar cada tarjeta */}
                    {cardsData.map((item) => (
                        <Col key={item.id} xs={12} sm={6} md={3} className="mb-4">
                            <CardBase titulo={item.titulo} imgSrc={item.src} />
                        </Col>
                    ))}
                </Row>

                {/* Pintamos el botón de ver ofertas con estilos personalizados */}
                <div className="text-center mt-4">
                    <Button 
                        variant="primary" 
                        className="btn-ver-ofertas d-inline-flex align-items-center gap-2"
                        style={{ 
                            backgroundColor: '#0050aa', 
                            borderColor: '#0050aa',
                            fontWeight: 'bold',
                            padding: '10px 30px',
                            borderRadius: '3px'
                        }}
                    >
                        VER TODAS LAS OFERTAS <IoChevronDownOutline size={20} />
                    </Button>
                    <div className="mt-2 text-muted" style={{ fontSize: '1.1rem' }}>
                        9/16
                    </div>
                </div>
            </Container>

            {/* Separamos visualmente la sección de ventajas */}
            <hr style={{ margin: '3rem 0', borderColor: '#eee' }} />
            
            {/* Renderizamos el componente de ventajas */}
            <Ventajas />
        </>
    );
};

export default Body;