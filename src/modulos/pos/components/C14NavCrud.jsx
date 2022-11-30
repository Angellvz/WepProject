import React from 'react';
const C14NavCrud = () => {
return (
    <nav style={{ backgroundColor: "#d8363a" }} className="navbar navbar-expand-lg navbar-light fixed-top shadow-sm" id="mainNav">
        <div className="container px-5">
            <a className="navbar-brand text-white fw-bold" href="#page-top">
                <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Aiga_bus_on_red_circle.svg/1024px-Aiga_bus_on_red_circle.svg.png"
                width={30}
                height={30}
                alt=""
                />Your Street</a>
            
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ms-auto me-4 my-3 my-lg-0">

                    <li className="nav-item"><a class="nav-link me-lg-3 text-white " href="#download">
                    <button type="button" class="btn btn-info">Acerca de..</button>
                        </a></li>
                    <li className="nav-item"><a class="nav-link me-lg-3 text-white " href="#!">
                    <button  type="button" class="btn btn-secondary">
                    <img  src="../../../src/assets/img/logoutic.png" 
                    width={20}
                    height={20}
                    alt=""/>  
                    Cerrar Sesión</button>
                        </a></li>
                </ul>
                
            </div>
        </div>
    </nav>
    );
};
export default C14NavCrud ;

