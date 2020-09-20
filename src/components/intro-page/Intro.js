import React from 'react';
import Navbar from '../navbar/Navbar';
import { Container, Row, Col } from 'reactstrap';
import Button from 'react-bootstrap/Button'
import { Link } from "react-scroll";
import './Intro.css';

const Intro = () => (
    <div className="first-page">

        <Navbar />
        <Container>
            <Row>
                <Col>
                    <div className="jumbotron">
                        <h1 className="main-header"><b>Front-end Developer</b></h1>
                        <p className="intro">Front End Developer with 4  years of experience in blending the art of design with skill of programming to deliver an immersive and engaging user experience through efficient website development, proactive feature optimization, and relentless debugging.
            </p>
                        <Link to="basic" className="btn" variant="secondary" size="lg" spy={true}
                            smooth={true}
                            offset={0}
                            duration={500} >
                            View CV  </Link>
                        <Link variant="secondary" className="btn" size="lg" to="skills" spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}>
                            View Skills  </Link></div>
                </Col>
            </Row>
        </Container>
    </div>
)

export default Intro;