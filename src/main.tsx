import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Products } from './pages/Products.tsx'
import Users from './pages/Users.tsx'
import { Stores } from './pages/Stores.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    {/* AÑADIR LAS ROUTES NECESIARIAS DENTRO DE LA ETIQUETA <BrowserRouter> */}
    {/* ASÍ SE PDODRÁ NAVEGAR POR TODA LA APLICACIÓN, CON <Route path="/ruta" element={<Page />} /> */}
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/products" element={<Products />} />
        <Route path="/users" element={<Users />} />
        <Route path="/store" element={<Stores />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);