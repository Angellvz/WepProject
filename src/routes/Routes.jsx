import React from 'react'
import {Browser, Routes,Route} from "react-router-dom"
import Login from "../pages/Login"
function Rutas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element="/P1Inicio"></Route>
                <Route exact path="*" element={<h2>Page not found 404</h2>}></Route>
            </Routes>
        </BrowserRouter>
    )
}
export default Rutas