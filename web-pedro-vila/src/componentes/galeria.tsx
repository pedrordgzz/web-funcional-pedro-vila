import Carousel from 'react-bootstrap/Carousel';

const Galeria = () => {
  const lidl = [
    { id: 1, src: '/imagen_galeria2.webp' },
    { id: 2, src: '/imagen_galeria1.webp' }
  ];

  return (
    // AÑADIDO: className="galeria-principal" para poder controlarlo con CSS
    <Carousel className="galeria-principal">
      {lidl.map((item) => (
        <Carousel.Item key={item.id}>
          <img 
            className="d-block w-100" 
            src={item.src} 
            alt={`Slide ${item.id}`}
            style={{ height: '500px', objectFit: 'cover' }} 
          />     
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Galeria;