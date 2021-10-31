import React from 'react'
import { useState,useEffect } from 'react'
import { obtenerCursos, eliminarCurso} from '../services/cursosService'
import { Row,Col,Card } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Swal from 'sweetalert2'

import { Navbar,Nav,Container,Image } from 'react-bootstrap'
import logo from '../assets/logo-vizcaya.png'

import FooterPage from "../components/FooterPage";

import Cookies  from 'universal-cookie'

const cookies = new Cookies();


export default function CursosViews() {

    const [cursos,setCursos] = useState([])

    const getCursos = async () => {
        try {
            let cursosObtenidos = await obtenerCursos()
            setCursos(cursosObtenidos.content)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() =>{
        getCursos()
    },[])

    // const cursosJson = JSON.stringify(cursos.content)
    // console.log(cursosJson)

   
    const deleteCurso = async (e) => {
        let idObtenido = e.target.id
        try {
            await Swal.fire({
                icon:'warning',
                title:'¿Esta seguro de eliminar el Curso?',
                showConfirmButton:true,
                confirmButtonText:'Si, Eliminar',
                showCancelButton:true,
                cancelButtonText:'No,Cancelar'
            }).then( async (result)=>{
                if(result.isConfirmed){
                    await Swal.fire(
                        'Eliminado!',
                        'El curso fue eliminado.',
                        'success'
                      )
                    await eliminarCurso(idObtenido)
                    getCursos()
                }
            })
        } catch (error) {
            console.error(error)
        }
    }

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
                
                <h2 className="py-2">Cursos de la Institucion</h2>

                <Link className="btn btn-dark btn-md ms-5 my-3 " to='/login/admin/crear'> Nuevo Curso </Link>

                <Row xs={1} md={3} className="g-4" align="center">
                {cursos.map((curso,i) => (
                    <Col key={i}>
                        <Card style={{ width: '14rem' }} >
                            {/* <Card.Img variant="top" style={{height:"180px", objectFit:'cover'}} src={} /> */}
                            <Card.Body style={{minHeight:"210px"}}>
                                <Card.Title>{curso.cursoNombre}</Card.Title>
                                <Card.Text>
                                Docente: {curso.docente.usuarioNombre}
                                </Card.Text>
                                <div className="row justify-content-center px-2">
                                    <div className="col-12">
                                        <Link className="btn btn-primary btn-sm " to={`/login/admin/cursos/${curso.cursoId}`} >Ingresar</Link>
                                        <Link className="btn btn-warning btn-sm mx-2" to={`/login/admin/editar/${curso.cursoId}`}> Editar </Link>
                                        <button className="btn btn-danger btn-sm mx-1 my-2" id={`${curso.cursoId}`} onClick={(e) => {deleteCurso(e)}} > Eliminar </button>
                                    </div>
                                </div>
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
