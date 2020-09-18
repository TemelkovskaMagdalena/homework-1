import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import LogoLinkedin from 'react-ionicons/lib/LogoLinkedin'
import LogoSkype from 'react-ionicons/lib/LogoSkype';
import LogoGoogleplus from 'react-ionicons/lib/LogoGoogleplus';
import './App.css';
import Skills from './component/Skills/Skills';
import Education from './component/Education/Education';
import BasicInfo from './component/BasicInfo/BasicInfo';

function App() {
  return (
    <div className="App">
      <header className="cv-main-info">
        <Container>
          <Row>
            <Col sm={{ size: 6, order: 2, offset: 1 }}>
              <h1>Magdalena Temelkovska Ristovska</h1>
              <p className="position">Front End Developer</p>
            </Col>
            <Col sm="6" md={{ size: 6, offset: 3 }}>
              <ul className="social-networks">
                <li><a href=""><LogoSkype fontSize="25px" /></a></li>
                <li><a href="www.linkedin.com/in/magdalena-temelkovska-6b24a494"><LogoLinkedin fontSize="25px" /></a></li>
                <li><a href=""><LogoGoogleplus fontSize="25px" /></a></li>
              </ul>

            </Col>
          </Row>
        </Container>
        <Container className="cv-template-basic-info">
          <Row>
            <Col sm="12" md="12">
              <BasicInfo></BasicInfo>
              <Skills></Skills>
              <Education></Education>
            </Col>
          </Row>

        </Container>
      </header>
    </div>
  );
}

export default App;
