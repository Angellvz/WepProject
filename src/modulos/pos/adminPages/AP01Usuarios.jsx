import { BrowserRouter, Routes,Route,Link } from 'react-router-dom';
import C14NavCrud from '../components/C14NavCrud';
import C1Navigation from '../components/C1Navigation';
import C2Footer from '../components/C2Footer';
//import C10CrudVeh from './C10CrudVeh';
//import C11CrudRuta from './C11CrudRuta';
//import C12CrudEmp from './C12CrudEmp';
import C9CrudUser from '../components/C9CrudUser';
import Cookies from "universal-cookie";
import axios from 'axios'
import React, {useState, useEffect } from "react";
const url = "http://localhost:3000/usuarios"; //esto es para jalar el valor
const cookies = new Cookies();

const AP01Usuarios=()=>{
  const [datos, setDatos] = useState({ id: `${cookies.get("id")}`, name: `${cookies.get("name")}`,});

  useEffect(() => {
    const jname = async () => {
      //http://192.168.31.1:3000/usuarios?id=1&name=Angel
      await axios.get(url, { params: { id: datos.id, name: datos.email } })
        .then((response) => {
          return response.data;
        })
        .then((response) => {
          if (response.length > 0) {
            console.log("usuario existente ,Logeo correcto");
          } else {
            //si el usuario no se registro no podra entrar
            console.log("no te logeaste gil ");
            window.location.href = "./";
          }
        });
    };
    jname();//se ejcuta la funcion
  }, [datos])

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
        </div>
        <C2Footer/>
        </>

        
    )
}
export default AP01Usuarios