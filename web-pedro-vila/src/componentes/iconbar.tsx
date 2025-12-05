import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { IoCubeOutline, IoCardOutline, IoTimeOutline } from "react-icons/io5";
import { FaTruck } from "react-icons/fa";
// Definimos la interfaz (esto se borra automáticamente al compilar)
interface BenefitItem {
  id: number;
  icon: React.ReactNode;
  text: string;
}

// Definios el array que leerá la función map para pintar
export default function IconBar() {
    const benefits: BenefitItem[] = [
        { 
            id: 1, 
            icon: < FaTruck  size={35} />, 
            text: "Envíos gratuitos a partir de 79€" 
        },
        { 
            id: 2, 
            icon: <IoCubeOutline size={35} />, 
            text: "Devolución gratuita" 
        },
        { 
            id: 3, 
            icon: <IoCardOutline size={35} />, 
            text: "Servicio de financiación" 
        },
        { 
            id: 4, 
            icon: <IoTimeOutline size={35} />, 
            text: "Entrega en máximo 3 días" 
        },
    ];

    return (
        <div className="icon-bar py-4" style={{ backgroundColor: '#f8f9fa', borderBottom: '1px solid #ddd' }}>
            <Container>
                <Row className="justify-content-center align-items-center">
                    {benefits.map((item) => (
                        <Col key={item.id} xs={6} md={3} className="d-flex flex-column align-items-center mb-3 mb-md-0 text-center">
                            <div className="mb-2" style={{ color: '#0050aa' }}>
                                {item.icon}
                            </div>
                            <span style={{ fontSize: '0.9rem', fontWeight: 600, color: '#333' }}>
                                {item.text}
                            </span>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}