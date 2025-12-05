import { Routes, Route } from "react-router-dom";
import Body from "./componentes/body";
import Footer from "./componentes/Footer";
import LidlHeader from "./componentes/header";

// Páginas simples:
const PaginaSimple = ({ texto }: { texto: string }) => (
  <div style={{ padding: "80px", textAlign: "center", fontSize: "2rem" }}>
    {texto}
  </div>
);

export default function App() {
  return (
    <>
{/* Header siempre visible */}
      <LidlHeader />

      {/* Contenido según la ruta */}
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/compra-online" element={<PaginaSimple texto="Página: Compra Online" />} />
        <Route path="/en-tu-tienda" element={<PaginaSimple texto="Página: En tu tienda" />} />
        <Route path="/lidl-plus" element={<PaginaSimple texto="Página: Lidl Plus" />} />
        <Route path="/recetas" element={<PaginaSimple texto="Página: Recetas" />} />
        <Route path="/mundos" element={<PaginaSimple texto="Página: Mundos para ti" />} />
        <Route path="/inspirate" element={<PaginaSimple texto="Página: Inspírate" />} />
        <Route path="/*" element={<PaginaSimple texto="ERROR 404: DIRECCIÓN INCORRECTA" />} />
      </Routes>
{/* Footer siempre visible */}
      <Footer />
    </>
  );
}
