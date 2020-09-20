import React from 'react';
import './App.css';
import Cv from './components/cv/cv-page/Cv';
import Navbar from './components/navbar/Navbar';
import { Container, Row, Col } from 'reactstrap';
import Button from 'react-bootstrap/Button'
function App() {
  return (
    <div className="App">
      <div className="first-page">

        <Navbar />
        <Container>
          <Row>
            <Col>
              <div className="jumbotron">
                <h1 className="main-header"><b>Front-end Developer</b></h1>
                <p className="intro">Front End Developer with 4  years of experience in blending the art of design with skill of programming to deliver an immersive and engaging user experience through efficient website development, proactive feature optimization, and relentless debugging.
                   </p>

                <Button variant="secondary" size="lg" href="#basic" >
                  View CV  </Button>
                <Button variant="secondary" size="lg" href="#skills" >
                  View Skills  </Button></div>
         </Col>
</Row>
</Container>
      </div>
        <Cv />
      </div>
  );
}

export default App;
