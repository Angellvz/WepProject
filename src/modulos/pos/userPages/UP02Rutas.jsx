import React from 'react';
import { BrowserRouter, Routes,Route,Link } from 'react-router-dom';
//import C10CrudVeh from './C10CrudVeh';
import C11CrudRuta from '../components/C11CrudRuta';
import C14NavCrud from '../components/C14NavCrud';
import C1Navigation from '../components/C1Navigation';
import C2Footer from '../components/C2Footer';
//import C12CrudEmp from './C12CrudEmp';
//import C9CrudUser from './C9CrudUser';

const UP02Rutas=()=>{
    return(
        <>
        <C14NavCrud/>
        <div style={{marginTop:80, backgroundImage: 'url("../../../src/assets/img/imgbackg.jpg")', 
                    backgroundRepeat: 'no-repeat', 
                    backgroundSize: 'cover',
                    backgroundAttachment: 'fixed'}}>
        <div className="container-fluid " style={{padding:0}}>
                <div className="row flex-nowrap" >
                  <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 " style={{ backgroundColor: "#d8363a" }}>
                  <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                          <a
                          
                          className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
                          >
                          <span className="fs-5 d-none d-sm-inline ">USERS</span>
                          </a>
                          <ul
                          className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start "
                          id="menu"
                          >
                          <li>
                          <a  className="nav-link px-0 align-middle">
                          <i className="fs-4 bi"  />{" "}
                          <span ><Link className="text-white" style={{textDecoration:"none"}}to="/puser">USUARIOS</Link></span>{" "}
                          </a>
                          </li>

                          <li>
                          <a  className="nav-link px-0 align-middle">
                          <i className="fs-4 bi"  />{" "}
                          <span ><Link className="text-white" style={{textDecoration:"none"}}to="/pveh">VEHICULOS</Link></span>{" "}
                          </a>
                          </li>

                          <li>
                          <a  className="nav-link px-0 align-middle">
                          <i className="fs-4 bi"  />{" "}
                          <span ><Link className="text-white" style={{textDecoration:"none"}}to="/prut">RUTAS</Link></span>{" "}
                          </a>
                          </li>

                          <li>
                          <div className="dropdown pb-4 ms-1 d-none d-sm-inline">
                          <a
                          href="#"
                          className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                          id="dropdownUser1"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                          >
                          <img
                          src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
                          alt="hugenerd"
                          width={30}
                          height={30}
                          className="rounded-circle"
                          />
                          <span className="d-none d-sm-inline mx-1">User</span>
                          </a>
                          <ul
                          className="dropdown-menu text-small " aria-labelledby="dropdownUser1">
                          <li>
                          <a className="dropdown-item" href="#">
                                  New project...
                          </a>
                          </li>
                          <li>
                          <a className="dropdown-item" href="#">
                                  Settings
                          </a>
                          </li>
                          <li>
                          <a className="dropdown-item" href="#">
                                  Profile
                          </a>
                          </li>
                          <li>
                          <hr className="dropdown-divider" />
                          </li>
                          <li>
                          <a className="dropdown-item" href="#">
                                  Sign out
                          </a>
                          </li>
                          </ul>
                          </div>
                          </li>
                          
                          
                          </ul>
                          
                  </div>
                  </div>

                    <div className="col py-3">
                        <>
                          <C11CrudRuta/>
                        </>
                    </div>

                </div>
        </div>
        </div>
        <C2Footer/>
        </>

        
    )
}
export default UP02Rutas