import React from 'react';
import './Navbar.css';
import { Container, Row, Col } from 'reactstrap';
import IosLaptop from 'react-ionicons/lib/IosLaptop';
import { Link, animateScroll as scroll } from "react-scroll";

function Navbar() {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                    
<ul className="main-menu">
<li className="logo"><Link><IosLaptop fontSize="25px" /></Link></li>
    <li><Link className="active" to="home"  spy={true}
                smooth={true}
                offset={0}
                duration={500}>Home</Link></li>
    <li><Link to="basic"   spy={true}
                smooth={true}
                offset={0}
                duration={500}>About</Link></li>
    <li><Link to="skills"   spy={true}
                smooth={true}
                offset={-70}
                duration={500}>Skills</Link></li>
    <li><Link to="education"   spy={true}
                smooth={true}
                offset={-70}
                duration={500}>Education</Link></li>
</ul></Col>
</Row>
</Container>
        </div>
    )};
export default Navbar;