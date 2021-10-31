import React from 'react'
import { Navbar,Container,Nav,Image,Button } from 'react-bootstrap'
import logo from '../assets/logo-vizcaya.png'
import { Link } from 'react-router-dom'
import { Component } from 'react'

export default function NavTop() {
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
                <Link className="btn btn-danger ingresar" id="ingresar"  to='/login'>Ingresar</Link>
                <Link className="btn btn-danger ms-1" id="salir" style={{display:'none'}}  to='/'>Salir</Link>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    )
}

