import C1_2NavUser from '../components/C1_2NavUser'
import C2Footer from '../components/C2Footer'
import C4Download from '../components/C4Download'
import Cookies from "universal-cookie";
import axios from 'axios'
import React, {useState, useEffect } from "react";

const url = "http://localhost:3000/usuarios"; //esto es para jalar el valor
const cookies = new Cookies();
const P4User=()=>{

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
  
    return (
        <>
                <C1_2NavUser/>
                
                <C4Download/>
                <C2Footer/>

            
        </>
    
    )
}
export default P4User