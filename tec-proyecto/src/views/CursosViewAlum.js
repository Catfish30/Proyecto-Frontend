import React from 'react'

import { useState, useEffect } from "react";
import { Card, Row,Col } from "react-bootstrap"
import { Link } from 'react-router-dom'

import { obtenerCursos } from "../services/CursoServiceAlum";
// import NavTop  from "../components/NavTop";
import { Navbar,Nav,Container,Image } from 'react-bootstrap'
import logo from '../assets/logo-vizcaya.png'

import FooterPage from "../components/FooterPage";

import Cookies from 'universal-cookie';

const cookies = new Cookies();


export default function CursosViewAlum() {

    const [cursos,setCurso] = useState([])    

    const getCursos = async () => {
        try {
            const cursosObtenidos = await obtenerCursos()
            setCurso(cursosObtenidos)
            
        } catch (error) {
            console.log(error)
        }   

    }

    useEffect(() => {
        getCursos()
    },[])
    
    const cerrarSesion = () => {
        
        cookies.remove('id', {path: "/"});
        cookies.remove('apellido_paterno', {path: "/"});
        cookies.remove('apellido_materno', {path: "/"});
        cookies.remove('nombre', {path: "/"});
        cookies.remove('username', {path: "/"});

    }

    return (
        <div>
            
            <Navbar bg="light" expand="lg">
            <Container>
            <Navbar.Brand>
                <Image src={logo} rounded style={{height:'50px'}} />
            </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="ps-4">
                <Nav className="me-auto">
                    <Nav.Item>
                        <Link to='/' className='nav-link'>
                            Inicio
                        </Link>
                    </Nav.Item>     
            
                </Nav>
                
                <Link className="btn btn-danger ms-1" onClick={()=>{cerrarSesion()}} to='/'>Salir</Link>
                </Navbar.Collapse>
            </Container>
            </Navbar>

            <div className="container" style={{minHeight:'74vh'}}>
                
                <h2 className="py-2">Cursos Matriculados</h2>
                <Row xs={1} md={3} className="g-4" align="center">
                {cursos.map((curso,i) => (
                    <Col key={i}>
                        <Card style={{ width: '14rem' }} >
                            <Card.Img variant="top" src={curso.curso_imagen} />
                            <Card.Body>
                                <Card.Title>{curso.curso_nombre}</Card.Title>
                                <Card.Text>
                                Docente: {curso.curso_docente}
                                </Card.Text>
                                <Link className="btn btn-primary btn-sm " to={`/login/alumnos/cursos/${curso.curso_id}`} >Ingresar</Link>
                            </Card.Body>
                            </Card>
                    </Col>
                    ))}
                </Row>
            </div>
            <FooterPage />
        </div>
    )
}

