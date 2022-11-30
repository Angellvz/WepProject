import React from 'react'
import C13SideBarUs from '../components/C13SideBarUs'
import C14NavCrud from '../components/C14NavCrud'
import C1Navigation from '../components/C1Navigation'
import C2Footer from '../components/C2Footer'
import C8SideBarAd from '../components/C8SideBarAd'


const P3CrudU=()=>{
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