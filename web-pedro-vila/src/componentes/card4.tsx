import React from 'react';
import Card from 'react-bootstrap/Card';

// Definimos la interfaz para saber qué datos espera recibir la tarjeta
interface CardBaseProps {
  titulo: string;
  imgSrc: string;
}

const CardBase: React.FC<CardBaseProps> = ({ titulo, imgSrc }) => {
    return (
        // Quitamos el ancho fijo '18rem' y usamoas '100%' para que se adapte a la columna de Bootstrap
        <Card style={{ width: '100%', height: '100%' }}>
            <Card.Img variant="top" src={imgSrc} alt={titulo} />
            <Card.Body>
                <Card.Title>{titulo}</Card.Title>
            </Card.Body>
        </Card>
    );
}

export default CardBase;