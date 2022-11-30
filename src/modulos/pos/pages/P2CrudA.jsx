import React from 'react'
import C14NavCrud from '../components/C14NavCrud'
import C2Footer from '../components/C2Footer'
import C8SideBarAd from '../components/C8SideBarAd'


const P2CrudA=()=>{
    return (
        <>  
            
                <C14NavCrud/>
                <div style={{marginTop:80, backgroundImage: 'url("../../../src/assets/img/imgbackg.jpg")', 
                    backgroundRepeat: 'no-repeat', 
                    backgroundSize: 'cover',
                    backgroundAttachment: 'fixed'}}>
                <C8SideBarAd/>
                </div>
                <C2Footer/>

            
                
               
            
        </>
    
    )
}
export default P2CrudA