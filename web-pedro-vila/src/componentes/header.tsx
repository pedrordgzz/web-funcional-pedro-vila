import React from 'react';
import './header.css';
import { FaTruck } from "react-icons/fa";
import Navbar from './navbar';
import Galeria from './galeria';
import { IoRestaurant,  IoHammer, IoBarbell, IoBed, IoShirt, IoRocket} from "react-icons/io5";


interface CategoryItem {
  id: number;
  label: string;
  icon: React.ReactNode;
  color: string;
  type: 'circle' | 'diamond';
}

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
    icon: <IoHammer />, // Martillo representa bien el trabajo manual
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
    icon: <IoBed />, // Cama representa muebles/hogar
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
    icon: <IoRocket />, // El cohete es muy usado para sección "Kids"
    color: 'gradient', 
    type: 'circle' 
  },
];

// Componentes Mock
const NavbarMock = () => <div className="mock-area"><Navbar/></div>;
const GalleryMock = () => <div className="mock-area gallery"><Galeria/></div>;

export const LidlHeader: React.FC = () => {
  return (
    <div className="lidl-layout">
      
      {/* 1. Franja Amarilla */}
      <div className="top-yellow-bar">
        <FaTruck className="truck-icon" />
        <span>Envío gratis a partir de 79 €</span>
      </div>

      {/* 2. Navbar */}
      <NavbarMock />

      {/* 3. Franja Negra */}
      <div className="black-banner">
        <span>¡Black Week! | Hasta -75%</span>
      </div>

      {/* 4. Categorías */}
      <div className="categories-container">
        {categories.map((cat) => (
          <div key={cat.id} className="category-item">
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

      {/* 5. Galería */}
      <GalleryMock />
      
    </div>
  );
};

export default LidlHeader;