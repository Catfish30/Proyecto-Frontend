import React from "react";
import { Image } from "react-bootstrap";
import logo from "../assets/logo-vizcaya.png";


export default function FooterPage() {
  return (
    
      <footer className="text-center text-black mt-3" style={{backgroundColor: "#F8F9FA",}}>
  {/* <!-- Grid container --> */}
  
   

      {/* !-- Footer --> */}
      {/* </footer><footer className="text-center text-lg-start bg-light text-muted"> */}
        {/* <!-- Section: Social media --> */}
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          {/* <!-- Left --> */}
          <div className="me-5 d-none d-lg-block">
            <span>Contáctanos en nuestras redes sociales:</span>
          </div>
          {/* <!-- Left --> */}

          
          {/* <!-- Right --> */}
          <div>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i class="fab fa-google"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i class="fab fa-github"></i>
            </a>
          </div>
          {/* <!-- Right --> */}
        </section>
        {/* <!-- Section: Social media --> */}

        {/* <!-- Section: Links  --> */}
        <section className="">
          <div class="container text-center text-md-start mt-5">
            {/* <!-- Grid row --> */}
            <div className="row mt-3">
              {/* <!-- Grid column --> */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* <!-- Content --> */}
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3"></i>Nuestro Colegio
                </h6>
                <p>
                  Somos una institución de vanguardadia en la búsqueda de la excelencia educativa y formación en valores de nuestros alumnos, en colaboración con nuestros padres.
                </p>
              </div>
              {/* Grid column */}

              {/* Grid column */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* <!-- Links --> */}
                <h6 className="text-uppercase fw-bold mb-4">Niveles</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Inicial
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Primaria
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Secundaria
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Pre-Universitario
                  </a>
                </p>
              </div>
              {/* Grid column */}

              {/* Grid column */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">Servicios</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Padres
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Maestros
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Alumnos
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Ayuda
                  </a>
                </p>
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* <!-- Links --> */}
                <h6 className="text-uppercase fw-bold mb-4">Contáctanos</h6>
                <p>
                  <i className="fas fa-home me-3"></i>Av. San Felipe 2312, Jesus Maria, Lima, Perú
                </p>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  info@codigo.com
                </p>
                <p>
                  <i className="fas fa-phone me-3"></i> +51 963214598
                </p>
                <p>
                  <i className="fas fa-print me-3"></i> +51 945762523
                </p>
              </div>
              {/* Grid column */}
            </div>
            {/* Grid row */}
          </div>
        </section>
        {/* Section: Links */}

        {/* Copyright */}
        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2021 Copyright:
          <a className="text-reset fw-bold" href="#">
            codigo.com
          </a>
        </div>
        {/* Copyright */}
      </footer>
  );
}