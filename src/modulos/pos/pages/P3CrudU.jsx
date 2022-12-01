import C13SideBarUs from '../components/C13SideBarUs'
import C14NavCrud from '../components/C14NavCrud'
import C1Navigation from '../components/C1Navigation'
import C2Footer from '../components/C2Footer'
import C8SideBarAd from '../components/C8SideBarAd'
import Cookies from "universal-cookie";
import axios from 'axios'
import React, {useState, useEffect } from "react";
const url = "http://localhost:3000/usuarios"; //esto es para jalar el valor
const cookies = new Cookies();
const P3CrudU=()=>{
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
            
           
                <C14NavCrud/>
                <div style={{marginTop:80, backgroundImage: 'url("../../../src/assets/img/imgbackg.jpg")', 
                    backgroundRepeat: 'no-repeat', 
                    backgroundSize: 'cover',
                    backgroundAttachment: 'fixed'}}>
                    <C13SideBarUs/>
                </div>
                <C2Footer/>
               
         

        </>
    
    )
}
export default P3CrudU