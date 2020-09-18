import React from 'react';
import picture from '../../../src/assets/cv-template-img.jpg';
import {  Row, Col } from 'reactstrap';

import styles from './BasicInfo.module.css';

const BasicInfo = () => (
  <div className={styles.BasicInfo}>
        <div className="cv-box">
                <Row>
                  <Col sm="3"><img src={picture} className="cv-template-picture" alt="cv-owner" /></Col>
                  <Col sm="9">
                    <div className="basic-info">
                      <h2>Magdalena Temelkovska Ristovska</h2>
                      <p>Front End Developer</p>

                      <hr />
                      <div className="basic-info-line"><label>Age</label> <p>26</p></div>
                      <div className="basic-info-line"><label>Address</label> <p><a href="https://goo.gl/maps/VAyxsMQukbrvCebW8">Isaija Mazhovski, no.24</a></p></div>
                      <div className="basic-info-line"><label>Email</label> <p><a href="mailto:'magdalenatemelkovska@gmail.com'">magdalenatemelkovska@gmail.com</a></p></div>
                      <div className="basic-info-line"><label>Phone</label> <p><a href="tel:075381089">075381089</a></p></div>
                      <div className="basic-info-line"><label>Website</label> <p>www.test.com</p></div>

                    </div>

                  </Col>
                </Row>
              </div>
        
  </div>
);


export default BasicInfo;