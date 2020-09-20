import React from 'react';
import { Row, Col, Label } from 'reactstrap';
import ProgressBar from 'react-bootstrap/ProgressBar'
import './Skills.css';

const Skills = () => (
  <div className="skills-wrapper">
    <h2 className="text-center dark-heading">Skills and Working Experinece</h2>

    <div className="skills cv-box">
      <Row>
        <Col sm="12">
        </Col>
      </Row>
      <Row>
        <Col sm="6">
          <h3>Skills</h3>
          <p >Front End developer with over <b>4 years</b> of front end experience and passion for <b>responsive website</b> design and admin templates design.</p>
          <p>Implementing web  design and development principles to build stable software.
          <b>Bringing designs to life</b> using HTML, CSS, JavaScript.</p>
          <p><b>Collaborating</b>  closely with the team to support projects during all phases of delivery.
          <b>Building  websites</b> and apps that are responsive and usable.
          </p>
          <p>
            <b>Monitoring website performance</b>  and rectifying front-end-related issues.
         <b>Maintaining an organized workflow</b> using a project management tool (like GitHub).
      </p>
          <hr />
          <h3 className="working-experience-heading">Working Experience</h3>
          <span className="position">Font-End Developer - <span className="date">10.03.2016-present</span></span>
          <br />


          <p className="pt10">I'm working as a <b>Front-end Developer</b> over 4 years.</p>
          <p>This is my first working experience.</p>
          <p className="pt10">Types of projects:</p>
          <ul className="projects ">
            <li>webshops</li>
            <li>admin sites</li>
            <li>websites</li>
          </ul>
        </Col>

        <Col sm="6">
          <div className="mt50">
            <label>HTML5</label>
            <ProgressBar striped="false" className="tech html5" animated now={90} />
            <label>CSS3</label>
            <ProgressBar className="tech css3" animated now={90} />
            <label>LESS</label>
            <ProgressBar className="tech less" animated now={80} />
            <label>Bootstrap</label>
            <ProgressBar className="tech bootstrap" animated now={85} />
            <label>Git</label>
            <ProgressBar className="tech git" animated now={65} />
            <label>TFS</label>
            <ProgressBar className="tech tfs" animated now={65} />
            <Label>JavaScript</Label>
            <ProgressBar className="tech javascript" animated now={55} />
            <Label>Angular</Label>
            <ProgressBar className="tech angular" animated now={40} />
            <Label>React</Label>
            <ProgressBar className="tech react" animated now={10} /></div>
        </Col>
      </Row>
    </div>


  </div>
);


export default Skills;
