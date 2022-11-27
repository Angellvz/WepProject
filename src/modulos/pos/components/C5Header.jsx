import React from 'react'

function C5Header() {
  return (
    <header style={{ backgroundImage: 'url("../../../src/assets/img/imgbackg.jpg")', 
    backgroundRepeat: 'no-repeat', 
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed'}} className="masthead">
        <div  className="container px-5">
            <div className="row gx-5 align-items-center">
            <div className="col-lg-6">
                <div className="mb-5 mb-lg-0 text-center text-white font-weight-bold text-lg-start font-alt">
                <h1 className="display-1 lh-1 mb-3">
                    YOUR STREET
                </h1>
                <p className="lead fw-normal mb-5 ">
                    Your Street es una aplicación que tiene como objetivo mejorar el servicio de un transporte público.
                </p>
                <div className="d-flex justify-content-center ">
                    <a className="me-lg-3 mb-4 mb-lg-0" href="#!">
                    <img
                        className="app-badge rounded"
                        src="../../../src/assets/img/megaicon.png"
                        alt="..."
                    />
                    </a>
                    <a href="#!">
                    <img
                        className="app-badge rounded"
                        src="../../../src/assets/img/Google-Drive-.jpg"
                        alt="..."
                    />
                    </a>
                </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="masthead-device-mockup">
                <svg
                    className="circle"
                    viewBox="0 0 100 100"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                    <linearGradient
                        id="circleGradient"
                        gradientTransform="rotate(45)"
                    >
                        <stop className="gradient-start-color" offset="0%" />
                        <stop className="gradient-end-color" offset="100%" />
                    </linearGradient>
                    </defs>
                    <circle cx={50} cy={50} r={50} />
                </svg>
                <svg
                    className="shape-1 d-none d-sm-block"
                    viewBox="0 0 240.83 240.83"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect
                    x="-32.54"
                    y="78.39"
                    width="305.92"
                    height="84.05"
                    rx="42.03"
                    transform="translate(120.42 -49.88) rotate(45)"
                    />
                    <rect
                    x="-32.54"
                    y="78.39"
                    width="305.92"
                    height="84.05"
                    rx="42.03"
                    transform="translate(-49.88 120.42) rotate(-45)"
                    />
                </svg>
                <svg
                    className="shape-2 d-none d-sm-block"
                    viewBox="0 0 100 100"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle cx={50} cy={50} r={50} />
                </svg>
                <div className="device-wrapper">
                    <div
                    className="device"
                    data-device="iPhoneX"
                    data-orientation="portrait"
                    data-color="black"
                    >
                    <div className="screen bg-black">
                        <img style={{ maxWidth: "100%", height: "100%" }} src="../../../src/assets/img/login.jpg" alt="..."/>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    </header>

  );
}

export default C5Header;