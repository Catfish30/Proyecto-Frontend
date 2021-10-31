import React from 'react'
import { Navbar,Container,Nav,Image,Button } from 'react-bootstrap'
import logo from '../assets/logo-vizcaya.png'

export default function NavTop2() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
            <Container className="justify-content-center">
                                
                <Image src={logo} rounded style={{height:'50px'}} />
   
            </Container>
            </Navbar>
        </div>
    )
}
