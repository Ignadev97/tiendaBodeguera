import { useState } from "react";
import viteLogo from "/vite.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "tailwindcss/tailwind.css";

//pages
import InicioPage from "./pages/inicioPage/inicioPage";
import AyudaPage from "./pages/ayudaPage/ayudaPage";
import ContactoPage from "./pages/contactoPage/contactoPage";
import ProductosPage from "./pages/productosPage/productosPage";
import PaginaDetalle from "./pages/PaginaDetalle/PaginaDetalle";
import CategoriaPage from "./pages/CategoriaPage/CategoriaPage";
import CarritoPage from "./pages/CarritoPage/CarritoPage";

//components
import Navbar from "./components/Navbar/Navbar";
import CartWidget from "./components/CartWidget/CartWidget";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Header from "./components/Header/Header";

//firebase
import { db } from "./firebase/firebaseConfig";

//context
import { ItemsProvider } from "./context/ItemContext";

function App() {
  return (
    <>
      <ItemsProvider>
        <Router>
          <Header />
          <div>
            <Navbar />
          </div>
          <Routes>
            <Route path="/" element={<InicioPage />} />
            <Route path="/ayuda" element={<AyudaPage />} />
            <Route path="/contacto" element={<ContactoPage />} />
            <Route path="/productos" element={<ProductosPage />} />
            <Route path="/carrito" element={<CarritoPage />} />
            <Route path="/detalles/:id" element={<PaginaDetalle />} />
            <Route path="/categoria/:categoria" element={<CategoriaPage />} />
          </Routes>
        </Router>
      </ItemsProvider>
    </>
  );
}

export default App;
