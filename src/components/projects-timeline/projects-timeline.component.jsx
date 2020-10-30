import React from "react";
import { Timeline, Events, ImageEvent } from "@merc/react-timeline";
import Image from "react-bootstrap/Image";

//icons
import L_GIT from "../../assets/icons/github-1.svg";
import L_VIEW from "../../assets/icons/forward-arrow.png";

// projects
import L_KEEP from "../../assets/img/projects/Keep.png";
import L_Chat from "../../assets/img/projects/chat.png";
import L_Mate from "../../assets/img/projects/TravelMate.png";
import L_Drop from "../../assets/img/projects/dri.png";

import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

import "./projects-timeline.styles.css";

const TimeLine = () => {
  return (
    <div id="projects">
      <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
      <Timeline>
        <Events>
        {/* Project: Todo List With MUI */}
        <ImageEvent
            className="text-center"
            text="Keep App"
            src={L_KEEP}
            alt="Keep App"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-center">
                      <Card.Body>
                        <strong>Description:</strong>
                        <br/>
                            Google's Keep Clone This app is almost similars to Google's keep app. 
                            It can save the notes with titles.
                        <hr />
                        <strong>Tech used:</strong>
                           <p> NodeJS, ExpressJS, MongoDB, AngularJS </p>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                 <a href="https://github.com/samon03/Keep-MEAN" target="_new">
                    <Image src={L_GIT} alt="view" className="m-2 p-1" width="30" height="30"></Image>
                 </a>
                 <a href="https://keep-mean.herokuapp.com/" target="_new">
                    <Image src={L_VIEW} alt="view" className="m-2 p-1" width="30" height="30"></Image>
                 </a>
              </div>
            </div>
          </ImageEvent>
        
        {/* Chat room */}
    
          <ImageEvent
            className="text-center"
            text="Chat Room"
            src={L_Chat}
            alt="Chat Room"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-center">
                      <Card.Body>
                        <strong>Description:</strong>
                        <br/>
                        A platform where user should authenticate then Create or Join available rooms to 
                        start chatting with the community.
                        <hr />
                        <strong>Tech used:</strong>
                           <p> NodeJS, ExpressJS, MongoDB, EJS </p>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                 <a href="https://github.com/samon03/Chat-Room" target="_new">
                    <Image src={L_GIT} alt="view" className="m-2 p-1" width="30" height="30"></Image>
                 </a>
                 <a href="https://chat-room-22.herokuapp.com" target="_new">
                    <Image src={L_VIEW} alt="view" className="m-2 p-1" width="30" height="30"></Image>
                 </a>
              </div>
            </div>
          </ImageEvent>    

    {/* DriDrop */}

        <ImageEvent
            className="text-center"
            text="DriDrop"
            src={L_Drop }
            alt="DriDrop"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-center">
                      <Card.Body>
                        <strong>Description:</strong>
                        <br/>
                        A platform where you can store your files and share with others. 
                        Can also post questions.
                        <hr />
                        <strong>Tech used:</strong>
                           <p> Raw PHP, MySQL and Javascript </p>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                 <a href="https://github.com/samon03/DriDrop" target="_new">
                    <Image src={L_GIT} alt="view" className="m-2 p-1" width="30" height="30"></Image>
                 </a>
                 {/* <a href="https://travel-mate-00.herokuapp.com" target="_new">
                    <Image src={L_VIEW} alt="view" className="m-2 p-1" width="30" height="30"></Image>
                 </a> */}
              </div>
            </div>
          </ImageEvent>    

        {/* Travel Mate */}

        <ImageEvent
            className="text-center"
            text="Travel Mate"
            src={L_Mate}
            alt="Travel Mate"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-center">
                      <Card.Body>
                        <strong>Description:</strong>
                        <br/>
                        An online platform where user/people can find travel mates and 
                        make groups based on some interest in places.
                        <hr />
                        <strong>Tech used:</strong>
                           <p> Raw PHP, MySQL and Javascript </p>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                 <a href="https://github.com/samon03/TravelMate-PHP" target="_new">
                    <Image src={L_GIT} alt="view" className="m-2 p-1" width="30" height="30"></Image>
                 </a>
                 <a href="https://travel-mate-00.herokuapp.com" target="_new">
                    <Image src={L_VIEW} alt="view" className="m-2 p-1" width="30" height="30"></Image>
                 </a>
              </div>
            </div>
          </ImageEvent>
        
        
        </Events>
      </Timeline>
    </div>
  );
};

export default TimeLine;