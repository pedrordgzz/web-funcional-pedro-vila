import Carousel from 'react-bootstrap/Carousel';

// Array con las imágenes que deberá de representar el carrusel.
const Galeria = () => {
  const lidl = [
    {
      id: 1,
      src: '/imagen_galeria2.webp',
    },
    {
      id: 2,
      src: '/imagen_galeria1.webp',

    }
  ];

  // Función map que lo que hace es ir leyendo el array que le hemos pasado y va pintando lo que le indicamos.
  return (
    <Carousel>
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