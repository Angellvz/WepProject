import React from 'react';
import { BrowserRouter, Routes,Route,Link } from 'react-router-dom';
import C9CrudUser from './C9CrudUser';

const C8SideBarAd=()=>{
    return(
        <div className="container-fluid gradient-form" style={{padding:0}}>
                <div className="row flex-nowrap" >
                  <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark bg-opacity-100 bg" >
                  <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                          <a
                          
                          className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
                          >
                          <span className="fs-5 d-none d-sm-inline ">ADMIN</span>
                          </a>
                          <ul
                          className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start "
                          id="menu"
                          >
                           <li>
                          <a  className="nav-link px-0 align-middle">
                          <i className="fs-4 bi"  />{" "}
                          <span ><Link className="text-white" style={{textDecoration:"none"}}to="/cuser">USUARIOS</Link></span>{" "}
                          </a>
                          </li>

                          <li>
                          <a  className="nav-link px-0 align-middle">
                          <i className="fs-4 bi"  />{" "}
                          <span ><Link className="text-white" style={{textDecoration:"none"}}to="/cveh">VEHICULOS</Link></span>{" "}
                          </a>
                          </li>

                          <li>
                          <a  className="nav-link px-0 align-middle">
                          <i className="fs-4 bi"  />{" "}
                          <span ><Link className="text-white" style={{textDecoration:"none"}}to="/crut">RUTAS</Link></span>{" "}
                          </a>
                          </li>
                          
                          <li>
                          <a  className="nav-link px-0 align-middle">
                          <i className="fs-4 bi"  />{" "}
                          <span ><Link className="text-white" style={{textDecoration:"none"}}to="/cemp">EMPRESAS</Link></span>{" "}
                          </a>
                          </li>

                          
                          
                          
                          </ul>
                          
                  </div>
                  </div>

                    <div className="col py-3">
                        <>
                          <C9CrudUser/>
                        </>
                    </div>

                </div>
        </div>


        
    )
}
export default C8SideBarAd