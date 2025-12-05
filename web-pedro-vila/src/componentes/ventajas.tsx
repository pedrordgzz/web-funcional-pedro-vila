import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { 
   
    IoCubeOutline, 
    IoCardOutline, 
    IoTimeOutline 
} from "react-icons/io5";
import { FaTruck } from "react-icons/fa";

// Array que leera la funcion map para pintar las ventajas 
const ventajasData = [
    {
        id: 1,
        icon: <FaTruck size={40} />, 
        texto: "Envíos gratuitos a",
        negrita: "partir de 79€"
    },
    {
        id: 2,
        icon: <IoCubeOutline size={40} />, 
        texto: "Devolución",
        negrita: "gratuita"
    },
    {
        id: 3,
        icon: <IoCardOutline size={40} />, 
        texto: "Servicio de",
        negrita: "financiación"
    },
    {
        id: 4,
        icon: <IoTimeOutline size={40} />, 
        texto: "Entrega en",
        negrita: "máximo 3 días"
    }
];

const Ventajas: React.FC = () => {
    return (
        <div className="ventajas-section mt-5 mb-5">
            <Container>
                {/* Título de la seccion */}
                <h4 className="text-center mb-4 font-weight-bold" style={{color: '#333'}}>Ventajas Lidl</h4>
                
                {/* Función que pintará los componentes indicados anteriormente */}
                <Row className="text-center">
                    {ventajasData.map((item) => (
                        <Col key={item.id} xs={6} md={3} className="mb-4">
                            <div className="ventaja-item">
                                {/* Círculo Azul */}
                                <div className="icon-circle mb-3">
                                    {item.icon}
                                </div>
                                {/* Texto */}
                                <p className="mb-0" style={{ fontSize: '0.9rem', color: '#333' }}>
                                    {item.texto} <br />
                                    <strong>{item.negrita}</strong>
                                </p>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default Ventajas;