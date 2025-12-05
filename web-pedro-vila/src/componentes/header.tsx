import React from 'react';
import './header.css';
import { FaTruck } from "react-icons/fa";
// Importamos los componentes reales que hemos creado en los otros ficheros
import Navbar from './navbar';
import Galeria from './galeria';
// Importamos los iconos para las categorías
import { IoRestaurant, IoHammer, IoBarbell, IoBed, IoShirt, IoRocket } from "react-icons/io5";

// Definimos la estructura de datos para las categorías (Círculos y Rombos)
interface CategoryItem {
  id: number;
  label: string;
  icon: React.ReactNode;
  color: string;
  type: 'circle' | 'diamond';
}

// array que leera la funcion map que hemos creado
const categories: CategoryItem[] = [
  { 
    id: 1, 
    label: 'Todos los descuentos', 
    icon: <span className="offer-text">Ofertas</span>, 
    color: '#E2001A', 
    type: 'diamond' 
  },
  { 
    id: 2, 
    label: 'Cocina y equipamiento doméstico', 
    icon: <IoRestaurant />, 
    color: '#9E9E9E', 
    type: 'circle' 
  },
  { 
    id: 3, 
    label: 'Bricolaje y jardín', 
    icon: <IoHammer />, 
    color: '#2D5D2B', 
    type: 'circle' 
  },
  { 
    id: 4, 
    label: 'Deporte y bienestar', 
    icon: <IoBarbell />, 
    color: '#FF7900', 
    type: 'circle' 
  },
  { 
    id: 5, 
    label: 'Hogar y decoración', 
    icon: <IoBed />, 
    color: '#D4C5B0', 
    type: 'circle' 
  },
  { 
    id: 6, 
    label: 'Moda y accesorios', 
    icon: <IoShirt />, 
    color: '#E2001A', 
    type: 'circle' 
  },
  { 
    id: 7, 
    label: 'Moda infantil y juguetes', 
    icon: <IoRocket />, 
    color: 'gradient', 
    type: 'circle' 
  },
];

export const LidlHeader: React.FC = () => {
  return (
    <div className="lidl-layout">
      
      {/* Mostramos la franja Amarilla de envíos en la parte superior */}
      <div className="top-yellow-bar">
        <FaTruck className="truck-icon" />
        <span>Envío gratis a partir de 79 €</span>
      </div>

      {/* Insertamos el componente Navbar*/}
      <Navbar />

      {/* Mostramos el banner negro de promoción */}
      <div className="black-banner">
        <span>¡Black Week! | Hasta -75%</span>
      </div>

      {/* Renderizamos la lista de categorías dinámicamente leyendo el array creado */}
      <div className="categories-container">
        {categories.map((cat) => (
          <div key={cat.id} className="category-item">
            {/* Aplicamos estilos condicionales según si el tipo es círculo o diamante */}
            <div 
              className={`icon-shape ${cat.type}`}
              style={{ 
                background: cat.color === 'gradient' 
                  ? 'linear-gradient(135deg, #8BC34A 50%, #0277BD 50%)' 
                  : cat.color 
              }}
            >
              <div className="icon-content">
                {cat.icon}
              </div>
            </div>
            <p className="category-label">{cat.label}</p>
          </div>
        ))}
      </div>

      {/* Insertamos la galería de imágenes al final del header */}
      <div className="gallery-section">
          <Galeria />
      </div>
      
    </div>
  );
};

export default LidlHeader;