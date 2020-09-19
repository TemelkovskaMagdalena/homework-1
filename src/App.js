import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import LogoLinkedin from 'react-ionicons/lib/LogoLinkedin'
import LogoSkype from 'react-ionicons/lib/LogoSkype';
import LogoGoogleplus from 'react-ionicons/lib/LogoGoogleplus';
import './App.css';
import BasicInfo from './components/basicInfo/BasicInfo';
import Skills from './components/skills/Skills';
import Education from './components/education/Education';
function App() {
  return (
    <div className="App">
      <header className="cv-main-info">
        <Container>
          <Row>
            <Col className="col-xs-12" sm={{ size: 6, order: 2, offset: 1 }}>
              <h1>Magdalena Temelkovska Ristovska</h1>
              <p className="position">Front End Developer</p>
            </Col>
            <Col className="col-xs-12" sm="6" md={{ size: 6, offset: 3 }}>
              <ul className="social-networks">
                <li><a href="https://join.skype.com/invite/epY4vyxj5GjJ?fbclid=IwAR3vUrkKX_OwfQgrebE74hivvu7fVT6HatJDi5fmHb8SgIhgB_OZzUuDe2A"><LogoSkype fontSize="25px" /></a></li>
                <li><a href="www.linkedin.com/in/magdalena-temelkovska-6b24a494"><LogoLinkedin fontSize="25px" /></a></li>
                <li><a href="magdalenatemelkovska@gmail.com"><LogoGoogleplus fontSize="25px" /></a></li>
              </ul>

            </Col>
          </Row>
        </Container>
        <Container className="cv-template-basic-info">
          <Row>
            <Col sm="12" md="12">
              <BasicInfo/>
              <Skills/>
              <Education/>
            </Col>
          </Row>

        </Container>
      </header>
    </div>
  );
}

export default App;
