import React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button'

import Profile from '../../assets/img/profile/WhatsApp Image 2020-03-03 at 11.30.58 PM.jpeg';

import './about.style.css';

const About = () => {
    return (
        <div id="about">
            <div className="about">
                <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
                <Container>
                    <Row className="pt-3 pb-5 align-items-center">
                        <Col xs={12} md={6}>
                        <Row className="justify-content-center mb-2 mr-2 ">
                            <Image className="profile justify-content-end" alt="profile" src={Profile} thumbnail fluid />
                        </Row>
                        </Col>
                        <Col xs={12} md={6}>
                            <Row className=" align-items-start p-4 my-details rounded">
                                Hi there! I am <strong>&nbsp;Samsun Nahar Samon</strong>
                                <br />A passionate Web Developer, born and brought up in Bangladesh. 
                                <br/>
                                I am a Full Stack Web Developer with Node.js, Express.js, Angular.js and MongoDB as my tech stack.
                                <br />
                                In 2019, I successfully completed my Engineering in <strong>Computer Science and Engineering (CSE)</strong> from United International University .
                                <br />
                                Working with the clients, my goal is always driven towards providing amazing experience with the best level of quality and service to them.
                                <br />
                                I love learning about new technologies, what problems are they solving and How can I use them to build better and scalable products.
                                <br />
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-center flex-wrap">
                                <div>
                                        <a href="#contact">
                                        <Button className="m-2" variant="outline-primary">
                                            Let's talk
                                        </Button>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://drive.google.com/file/d/1HahHaVUZ5KqUdl8Dq2OlQ-GnC44_6KBZ/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                        <Button className="m-2" variant="outline-success">
                                            My Resume
                                        </Button>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://github.com/samon03/" target="_blank" rel="noopener noreferrer">
                                        <Button className="m-2" variant="outline-dark">
                                            GitHub
                                        </Button>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://linkedin.com/in/samsun-nahar-samon-06409a147/" target="_blank" rel="noopener noreferrer">
                                        <Button className="m-2" variant="outline-info">
                                            LinkedIn
                                        </Button>
                                        </a>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
       );
    };
    
 export default About;