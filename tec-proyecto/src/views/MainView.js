// import { auto } from "@popperjs/core";
import React from "react";
import { CardGroup, Card, Container, Row, Col, Ratio,Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import pic1 from "../assets/pic1.jpg";
import pic2 from "../assets/pic2.jpg";
import pic3 from "../assets/pic3.jpg";
import pic4 from "../assets/pic4.jpg";
import pic5 from "../assets/pic5.jpg";
import pic6 from "../assets/pic6.jpg";
import logo from "../assets/logo-vizcaya.png";
// import board from "../assets/pizarra.jpg";
import NavTop  from "../components/NavTop";
import FooterPage from "../components/FooterPage";

const img = {
  position: "relative",
  Top: -80,
};

export default function MainView() {
  return (
    <div>
        <NavTop />
        <Carousel>
            <Carousel.Item>
                <img className="d-block w-100" src={pic1} alt="First slide" />
                <Carousel.Caption>
                <h3>EDUCACIÓN EN VALORES </h3>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img className="d-block w-100" src={pic2} alt="First slide" />
                <Carousel.Caption>
                <h3>EDUCACIÓN INTEGRAL DE CALIDAD</h3>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img className="d-block w-100" src={pic3} alt="First slide" />
                <Carousel.Caption>
                <h3>EDUCACIÓN CON TECNOLOGÍA</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
      <div
        className="container-fluid"
        style={{
          backgroundColor: "white",
        }}
      >
        <div
          className="container w-50 pl-5 pr-5 rounded-lg"
          style={{
            // #e0e094
            backgroundColor: "white",  
            position: "relative",
            top: -20,
            zIndex: 10,
            boxShadow: "0 0 10px rgba(0,0,0,1)",
          }}
        >
          <div className=" row align-items-center">
            <div className="col-sm p-3">
              <img src={logo} className="w-75 mx-auto d-block" style={img} />
            </div>

            <div className="col-sm p-3 text-light text-center">
              <p className="text-dark h3">Forjando nuevos valores</p>
              <h4 className="h2 text-danger">Para nuevos tiempos</h4>
            </div>
          </div>
        </div>
      </div>

      <CardGroup>
        <Card className="mb-2" bg="danger" text="white">
          <Card.Img variant="top" src={pic4} />
          <Card.Body>
            <Card.Title className="text-center">TECNOLOGÍA</Card.Title>
            <Card.Text>
              Formamos a nuestros estudiantes con bases sólidas permitiendo
              afrontar las nuevas tecnologías con éxito.
            </Card.Text>
          </Card.Body>
          <Card.Footer className="text-center">
            <small className="text-white">Educación de calidad</small>
          </Card.Footer>
        </Card>
        <Card className="mb-2" bg="danger" text="white">
          <Card.Img variant="top" src={pic5} />
          <Card.Body>
            <Card.Title className="text-center">DEPORTES</Card.Title>
            <Card.Text>
              Formamos a nuestros estudiantes en actividades físicas
              desarrollando sus habilidades psicomotrices.
            </Card.Text>
          </Card.Body>
          <Card.Footer className="text-center">
            <small className="text-white">Visión de futuro</small>
          </Card.Footer>
        </Card>
        <Card className="mb-2" bg="danger" text="white">
          <Card.Img variant="top" src={pic6} />
          <Card.Body>
            <Card.Title className="text-center">VISIÓN DE FUTURO</Card.Title>
            <Card.Text>
              Nuestros alumnos, son nuestra principal fortaleza, formandolos en
              todos los ámbitos de su vida.
            </Card.Text>
          </Card.Body>
          <Card.Footer className="text-center">
            <small className="text-white">Semillero de nuevos valores</small>
          </Card.Footer>
        </Card>
      </CardGroup>

{/* style={{backgroundImage:`url(${board})`, backgroundRepeat:"no-repeat", backgroundPosition: "center center", backgroundSize:"cover", height:"50", backgroundAttachment:"fixed",}} */}
    <footer className="text-center text-white d-flex" >
        {/* <!-- Grid container --> */}
        <div class="container p-4"> 
          
          {/* <!-- Section: Iframe --> */}
          <section className="bg-image">
            <div className="">

            </div>
            <div className="row d-flex justify-content-center">
              <div className="col-lg-6">
                <div class="ratio ratio-16x9">
                  <iframe
                    className="shadow-1-strong rounded"
                    src="https://www.youtube.com/embed/9wAWgetp320"
                    title="YouTube video"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- Section: Iframe --> */}
        </div>
        {/* <!-- Grid container --> */}
      </footer>
      <FooterPage />
    </div>
  );
}