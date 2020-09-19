import React from 'react';
import picture from '../../../src/assets/cv-template-img.jpg';
import { Row, Col } from 'reactstrap';

import './BasicInfo.css';

const BasicInfo = () => (
  <div className="basic-info-wrapper">
    <div className="cv-box">
      <Row>
        <Col className="col-xs-3" sm="4" md="4" lg="3"><img src={picture} className="cv-template-picture" alt="cv-owner" /></Col>
        <Col className="col-xs-9" sm="8" md="8" lg="9">
          <div className="basic-info">
            <h2>Magdalena Temelkovska Ristovska</h2>
            <p><b>Bachelor of Science </b>(Computer Science and Engineering)</p>

            <hr />
            <div className="basic-info-line"><label>Age</label> <p>26</p></div>
            <div className="basic-info-line"><label>Address</label> <p><a href="https://goo.gl/maps/VAyxsMQukbrvCebW8">Isaija Mazhovski, no.24</a></p></div>
            <div className="basic-info-line"><label>Email</label> <p><a href="mailto:'magdalenatemelkovska@gmail.com'">magdalenatemelkovska@gmail.com</a></p></div>
            <div className="basic-info-line"><label>Phone</label> <p><a href="tel:075381089">075381089</a></p></div>
            <div className="basic-info-line"><label>Date of Birth</label> <p>10.02.1994</p></div>

          </div>

        </Col>
      </Row>
    </div>

  </div>
);


export default BasicInfo;
