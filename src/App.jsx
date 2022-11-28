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
import C10CrudVeh from './modulos/pos/components/C10CrudVeh';
import C11CrudRuta from './modulos/pos/components/C11CrudRuta';
import C12CrudEmp from './modulos/pos/components/C12CrudEmp';
const App = () => {
      return (
        <>
        <BrowserRouter>
         <Routes>
            <Route path="/" element={<P2CrudA/>}></Route>
                <Route exact path="/cuser" element={<C9CrudUser/>}></Route>
                <Route exact path="/cveh" element={<C10CrudVeh/>}></Route>
                <Route exact path="/crut" element={<C11CrudRuta/>}></Route>
                <Route exact path="/cemp" element={<C12CrudEmp/>}></Route>
            <Route exact path="*" element={<h2>Page not found 404</h2>}></Route>
         </Routes>
        </BrowserRouter>
        </>
        
      )
    }
  export default App
