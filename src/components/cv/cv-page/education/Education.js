import React from 'react';
import { Row, Col } from 'reactstrap';
import './Education.css';

const Education = () => (
  <div className="education-wrapper">
    <h2 className="text-center education-heading dark-heading">Education</h2>

    <div className="bubble-box">
      <Row>
        <Col sm="6">
          <div className="bubble">
          <span className="date">2020-present</span>
            <h3>Brainster</h3>
            <p>I'm attending a course for ReactJS. The course is in progress. This is part of an informal education</p>
          <span className="education-type informal">informal</span>
          </div> </Col>
      

        <Col sm="6">
          <div className="bubble">
            <span className="date">2012-2018</span>
            <h3>Faculty of Computer Science and Engineering</h3>
            <p>Undergraduate studies, module: Computer Science and Engineering</p>
            <span className="education-type formal">formal</span>
          </div>
          </Col>
          <Col sm="6">
          <div className="bubble">
          <span className="date">2008-2012</span>
            <h3>Municipal high school "Car Samoil"</h3>
            <p>Natural Sciences and Mathematics, module: Mathematics</p>
            <span className="education-type formal">formal</span>
          </div>

        </Col>
          <Col sm="6">
          <div className="bubble">
          <span className="date">2008-2001</span>
            <h3>Primary school "Dimitar Vlahov"</h3>
            <p></p>
            <span className="education-type formal">formal</span>
          </div>
        </Col>

      </Row>
    </div>



  </div>
);


export default Education;
