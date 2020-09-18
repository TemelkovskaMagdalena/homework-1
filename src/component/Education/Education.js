import React from 'react';
import {  Row, Col } from 'reactstrap';

import Button from 'react-bootstrap/Button'
import styles from './Education.module.css';

const Education = () => (
  <div className={styles.Education}>
                  <h2 className="text-center education-heading dark-heading">Education</h2>

<div className="bubble-box">
  <Row>
    <Col sm="6">
      <div className="bubble">
        <h3>ReactJS course</h3>
        <p>I'm attending a course for ReactJS. The course is in progress. This is part of an informal education</p>
        <Button href="#">Details</Button>{' '}
      </div>
      <div className="bubble">
        <h3>Municipal high school "Car Samoil"</h3>
        <p>Natural Sciences and Mathematics, module: Mathematics</p>
        <Button href="#">Details</Button>{' '}
      </div>

    </Col>

    <Col sm="6">
      <div className="bubble">
        <h3>Faculty of Computer Science and Engineering</h3>
        <p>Undergraduate studies, module: Computer Science and Engineering</p>
        <Button href="#">Details</Button>{' '}
      </div>

      <div className="bubble">
        <h3>Primary school "Dimitar Vlahov"</h3>
        <p></p>
        <Button href="#">Details</Button>{' '}
      </div>
    </Col>

  </Row>
</div>



  </div>
);


export default Education;
