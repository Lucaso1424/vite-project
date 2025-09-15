import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Products } from './pages/Products/Products.tsx'
import Users from './pages/Users/Users.tsx'
import { CanvasPage } from './pages/Canvas/Canvas.tsx'
import { Stores } from './pages/Stores/Stores.tsx'
import { UserDetail } from './pages/Users/UserDetail.tsx'
import { RoomPage } from './pages/Room/Room.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    {/* AÑADIR LAS ROUTES NECESIARIAS DENTRO DE LA ETIQUETA <BrowserRouter> */}
    {/* ASÍ SE PDODRÁ NAVEGAR POR TODA LA APLICACIÓN, CON <Route path="/ruta" element={<Page />} /> */}
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/products" element={<Products />} />
        <Route path="/users" element={<Users />} />
        <Route path="/userDetail" element={<UserDetail user={undefined}/>} />
        <Route path="/store" element={<Stores />} />
        <Route path="/canvas" element={<CanvasPage />}/>
        <Route path="/room" element={<RoomPage />}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);