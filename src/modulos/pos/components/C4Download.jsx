import React from 'react';
const C4Download = () => {
return (
    <section className='gradient-custom-2' id="download">
            <div class="container px-5 ">
                <h2 class="text-center text-white font-alt mb-4">Obtén la aplicación ahora!</h2>
                <div className="d-flex justify-content-center ">
                    <a className="me-lg-3 mb-4 mb-lg-0" href="#!">
                    <img
                        className="app-badge rounded"
                        src="../../../src/assets/img/google-play-badge.svg"
                        alt="..."
                    />
                    </a>
                    <a href="#!">
                    <img
                        className="app-badge rounded"
                        src="../../../src/assets/img/app-store-badge.svg"
                        alt="..."
                    />
                    </a>
                </div>
            </div>
        </section>
    );
};
export default C4Download;

