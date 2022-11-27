import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './modulos/pos/pages/P1Inicio'
import P2CrudA from './modulos/pos/pages/P2CrudA';
import P1Inicio from './modulos/pos/pages/P1Inicio';
import C1Navigation from './modulos/pos/components/C1Navigation';
import P3CrudU from './modulos/pos/pages/P3CrudU';
import C9CrudUser from './modulos/pos/components/C9CrudUser';
const App = () => {
      return (
        <>
        <BrowserRouter>
         <Routes>
            <Route path="/" element={<P2CrudA/>}></Route>
            <Route exact path="*" element={<h2>Page not found 404</h2>}></Route>
         </Routes>
        </BrowserRouter>
        </>
        
      )
    }
  export default App
