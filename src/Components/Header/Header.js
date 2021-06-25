import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import logo from '../../images/logo.png';
import facebook from '../../images/faceb.png';
import twitter from '../../images/twitt.png';
import linkedin from '../../images/linkedin.png';
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';


const Header = () => {
    return ( 
     <Navbar collapseOnSelect expand="lg" bg="light" >
        <Tippy content="Back to main page">
            <Navbar.Brand  style={{color:'white', marginLeft:'5px', fontWeight:'bold', fontFamily:"'Dancing Script', cursive"}} href="./"><img src={logo} style={{maxWidth:'50px'}} alt="" /></Navbar.Brand>
        </Tippy>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse className="justify-content-end " id="responsive-navbar-nav">
        <Nav className="pr-5">
        <Nav.Link href="https://www.facebook.com/MinorityProgrammers" target="_blank"><img src={facebook} style={{maxWidth:'20px'}} alt="" /></Nav.Link>
        <Nav.Link href="https://twitter.com/minorityprogram" target="_blank"><img src={twitter} style={{maxWidth:'25px'}} alt="" /></Nav.Link>
        <Nav.Link href="https://www.linkedin.com/company/minority-programmers/" target="_blank"><img src={linkedin} style={{maxWidth:'25px'}} alt="" /></Nav.Link>
        </Nav>
        <Nav className="me fw-bold">
        <Tippy content={<span style={{color:'orange'}}>Click home page</span>}>
             <Nav.Link href="/home">Home</Nav.Link>
        </Tippy>
        <Tippy content={<span style={{color:'green'}}>click to view startups</span>}>
             <Nav.Link href="/incubator">Incubator</Nav.Link>
        </Tippy>
        <Tippy content="view our courses">
            <Nav.Link href="/learn">Learn</Nav.Link>
        </Tippy>
        </Nav> 
        </Navbar.Collapse>
     </Navbar>  

        
    );
};

export default Header;