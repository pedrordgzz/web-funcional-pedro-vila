import Card from 'react-bootstrap/Card';

function Card1() {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="/nieve.webp" />
            <Card.Body>
                <Card.Title>Prepárate para la nieve</Card.Title>
            </Card.Body>
        </Card>
    );
}

export default Card1;