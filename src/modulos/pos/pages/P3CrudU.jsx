import React from 'react'
import C1Navigation from '../components/C1Navigation'
import C2Footer from '../components/C2Footer'
import LoginPage from '../components/C3Login'
import C4Download from '../components/C4Download'
import C5Header from '../components/C5Header'
import C6Description from '../components/C6Description'
import C7Eslogan from '../components/C7Eslogan'
import C8SideBarAd from '../components/C8SideBarAd'
import C9CrudUser from '../components/C9CrudUser'
import P1Inicio from './P1Inicio'

const P3CrudU=()=>{
    return (
        <>  
            
           
                <C1Navigation/>
                <div style={{marginTop:70, backgroundImage: 'url("../../../src/assets/img/imgbackg.jpg")', 
                    backgroundRepeat: 'no-repeat', 
                    backgroundSize: 'cover',
                    backgroundAttachment: 'fixed'}}>
                <C8SideBarAd/>
                </div>
                <C2Footer/>
               
         

        </>
    
    )
}
export default P3CrudU