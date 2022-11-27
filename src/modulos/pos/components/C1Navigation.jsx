import React from 'react';
const C1Navigation = () => {
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
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i className="bi-list"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ms-auto me-4 my-3 my-lg-0">
                    <li className="nav-item"><a class="nav-link me-lg-3 text-white " href="#features">Características</a></li>
                    <li className="nav-item"><a class="nav-link me-lg-3 text-white " href="#download">Descargar</a></li>
                    <li className="nav-item"><a class="nav-link me-lg-3 text-white " href="#!">Login</a></li>
                </ul>
                <button  className="btn btn-primary rounded-pill px-3 mb-2 mb-lg-0" data-bs-toggle="modal" data-bs-target="#feedbackModal">
                    <span className="d-flex align-items-center">
                        <i className="bi-chat-text-fill me-2"></i>
                        <span className="small" >Enviar Comentarios</span>
                    </span>
                </button>
            </div>
        </div>
    </nav>
    );
};
export default C1Navigation;

