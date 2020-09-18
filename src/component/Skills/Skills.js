import React from 'react';
import {  Row, Col } from 'reactstrap';
import ProgressBar from 'react-bootstrap/ProgressBar'
import styles from './Skills.module.css';

const Skills = () => (
  <div className={styles.Skills}>
              <h2 className="text-center dark-heading">Skills</h2>

<div className="skills cv-box">
  <Row>
    <Col sm="12">
    </Col>
  </Row>
  <Row>
    <Col sm="6">
      <p>Front End developer with over 3 years of front end experience and passion for responsive website design and admin templates design.</p>
      {/* <p>Collaborated with web designers, back end developers and UX designers to design, build, test and improve web products.
      Ensured scalability of front end elements by optimizing them for loading speed and performance.
      Assisted in the training of new developers and web designers.
      Worked with teams of IT professionals to meet team goals and business objectives.
      </p> */}
      <p>Implementing web  design and development principles to build stable software.
      Bringing designs to life using HTML, CSS, JavaScript.
      Collaborating  closely with the team to support projects during all phases of delivery.
      Building  websites and apps that are responsive and usable.
      Monitoring website performance and rectifying front-end-related issues.
      Maintaining an organized workflow using a project management tool (like GitHub).
      </p>
    </Col>

    <Col sm="6">
      <ProgressBar animated now={90} label="HTML5" />
      <ProgressBar animated now={90} label="CSS3" />
      <ProgressBar animated now={80} label="LESS" />
      <ProgressBar animated now={85} label="Bootstrap" />
      <ProgressBar animated now={75} label="XML" />
      <ProgressBar animated now={75} label="Git" />
      <ProgressBar animated now={75} label="TFS" />
      <ProgressBar animated now={50} label="Angular" />
      <ProgressBar animated now={5} label="React" />
      <ProgressBar animated now={10} label="C#" />
    </Col>
  </Row>
</div>


  </div>
);


export default Skills;
