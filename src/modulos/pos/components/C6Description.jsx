import React from 'react';
const C6Description = () => {
return (

    <>
    <section id="features">
      <div className="container px-5">
        <div className="row gx-5 align-items-center">
          <div className="col-lg-8 order-lg-1 mb-5 mb-lg-0">
            <div className="container-fluid px-5">
              <div className="row gx-5">
                <div className="col-md-6 mb-5">
                  <div className="text-center">
                    <i className="bi-geo-alt-fill icon-feature text-gradient d-block mb-3" />
                    <h3 className="font-alt">Ubicación</h3>
                    <p className="text-muted mb-0">
                      Obtiene y te muestra las rutas del transporte publico de tu ciudad
                    </p>
                  </div>
                </div>
                <div className="col-md-6 mb-5">
                  <div className="text-center">
                    <i className="bi-gift icon-feature text-gradient d-block mb-3" />
                    <h3 className="font-alt">Uso Gratuito</h3>
                    <p className="text-muted mb-0">
                      Se pueden usar todas sus funcionalidades de manera gratuita, Descargalo Gratis
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-5 mb-md-0">
                  <div className="text-center">
                    <i className="bi-chat icon-feature text-gradient d-block mb-3" />
                    <h3 className="font-alt">Comentarios</h3>
                    <p className="text-muted mb-0">
                      Envia comentarios y califica las unidades de transporte publico que utilizes
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="text-center">
                    <i className="bi-signpost-fill icon-feature text-gradient d-block mb-3" />
                    <h3 className="font-alt">Paraderos</h3>
                    <p className="text-muted mb-0">
                      Te muestra los paraderos del transporte publico cercanos a tu ubicación.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 order-lg-0">
            <div className="features-device-mockup">
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
    </section>
    <section className="bg-light">
      <div className="container px-5">
        <div className="row gx-5 align-items-center justify-content-center justify-content-lg-between">
          <div className="col-12 col-lg-5">
            <h2 className="display-4 lh-1 mb-4">Enter a new age of web design</h2>
            <p className="lead fw-normal text-muted mb-5 mb-lg-0">
              This section is perfect for featuring some information about your
              application, why it was built, the problem it solves, or anything
              else! There's plenty of space for text here, so don't worry about
              writing too much.
            </p>
          </div>
          <div className="col-sm-8 col-md-6">
            <div className="px-5 px-sm-0">
              <img
                className="img-fluid rounded-circle"
                src="https://source.unsplash.com/u8Jn2rzYIps/900x900"
                alt="..."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
  
  
    );
};
export default C6Description;

