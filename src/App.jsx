import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './modulos/pos/pages/P1Inicio'
import P2CrudA from './modulos/pos/pages/P2CrudA';
import P1Inicio from './modulos/pos/pages/P1Inicio';
import C1Navigation from './modulos/pos/components/C1Navigation';
import P3CrudU from './modulos/pos/pages/P3CrudU';
import AP01Usuarios from './modulos/pos/adminPages/AP01Usuarios';
import AP02Rutas from './modulos/pos/adminPages/AP02Rutas';
import AP03Vehiculos from './modulos/pos/adminPages/AP03Vehiculos';
import AP04Empresas from './modulos/pos/adminPages/AP04Empresas';
import UP01Usuarios from './modulos/pos/userPages/UP01Usuarios';
import UP03Vehiculos from './modulos/pos/userPages/UP03Vehiculos';
import UP02Rutas from './modulos/pos/userPages/UP02Rutas';
const App = () => {
      return (
        <>
        <BrowserRouter>
         <Routes>
            <Route path="/" element={<P1Inicio/>}></Route>

                <Route path="/admin" element={<P2CrudA/>}></Route>
                <Route path="/user" element={<P3CrudU/>}></Route>
                
                <Route exact path="/cuser" element={<AP01Usuarios/>}></Route>
                <Route exact path="/cveh" element={<AP03Vehiculos/>}></Route>
                <Route exact path="/crut" element={<AP02Rutas/>}></Route>
                <Route exact path="/cemp" element={<AP04Empresas/>}></Route>
                
                <Route exact path="/puser" element={<UP01Usuarios/>}></Route>
                <Route exact path="/pveh" element={<UP03Vehiculos/>}></Route>
                <Route exact path="/prut" element={<UP02Rutas/>}></Route>
            <Route exact path="*" element={<h2>Page not found 404</h2>}></Route>
         </Routes>
        </BrowserRouter>
        </>
        
      )
    }
  export default App
