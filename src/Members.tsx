import React from 'react';
import {Col, Row, Card} from "react-bootstrap";
import Pasindu from './aserts/images/Pasindu.png'
import Padma from './aserts/images/Padma.png'
import Maleesha from './aserts/images/Maleesha.png'
import Githmi from './aserts/images/Githmi.png'
import Supuni from './aserts/images/Hansika.png'
import Hansika from './aserts/images/Hansika.png'

const Members: React.FC = () => {
    document.title='weatherApp | members'
 return (
  <React.Fragment>
      <br/><br/>
      <h2 className='pt-4'>Members</h2>
      <Row className='m-0'>
          <Col xs={12} sm={6} md={4} className='mt-3'>
              <Card>
                  <Card.Img className='px-5 px-sm-4 px-md-3' variant="top" src={Pasindu} />
                  <Card.Body>
                      <Card.Title>E. D. Pasindu Chinthana</Card.Title>
                      <Card.Subtitle>SE/2017/004</Card.Subtitle>
                      <Card.Text>
                          The team leader
                      </Card.Text>
                  </Card.Body>
              </Card>
          </Col>
          <Col xs={12} sm={6} md={4} className='mt-3'>
              <Card>
                  <Card.Img className='px-5 px-sm-4 px-md-3' variant="top" src={Padma} />
                  <Card.Body>
                      <Card.Title>G.H.A. Padma Gnanapriya</Card.Title>
                      <Card.Subtitle>SE/2017/014</Card.Subtitle>
                      <Card.Text>
                          Front-end-developer in this assigment
                      </Card.Text>
                  </Card.Body>
              </Card>
          </Col>
          <Col xs={12} sm={6} md={4} className='mt-3'>
              <Card>
                  <Card.Img className='px-5 px-sm-4 px-md-3' variant="top" src={Maleesha} />
                  <Card.Body>
                      <Card.Title>D.M.M. Maleesha Mihiranga</Card.Title>
                      <Card.Subtitle>SE/2017/002</Card.Subtitle>
                      <Card.Text>
                          Back-end-developer in this assigment
                      </Card.Text>
                  </Card.Body>
              </Card>
          </Col>
          <Col xs={12} sm={6} md={4} className='mt-3'>
              <Card>
                  <Card.Img className='px-5 px-sm-4 px-md-3' variant="top" src={Githmi} />
                  <Card.Body>
                      <Card.Title>Githmi Anjana</Card.Title>
                      <Card.Subtitle>SE/2017/048</Card.Subtitle>
                      <Card.Text>
                          Back-end-developer in this assigment
                      </Card.Text>
                  </Card.Body>
              </Card>
          </Col>
          <Col xs={12} sm={6} md={4} className='mt-3'>
              <Card>
                  <Card.Img className='px-5 px-sm-4 px-md-3' variant="top" src={Supuni} />
                  <Card.Body>
                      <Card.Title>M.D. Supuni Uthpala</Card.Title>
                      <Card.Subtitle>SE/2017/044</Card.Subtitle>
                      <Card.Text>
                          Front-end-developer in this assigment
                      </Card.Text>
                  </Card.Body>
              </Card>
          </Col>
          <Col xs={12} sm={6} md={4} className='mt-3'>
              <Card>
                  <Card.Img className='px-5 px-sm-4 px-md-3' variant="top" src={Hansika} />
                  <Card.Body>
                      <Card.Title>H.M.K.Hansika Herath</Card.Title>
                      <Card.Subtitle>SE/2017/018</Card.Subtitle>
                      <Card.Text>
                          C4 model creator in this assigment
                      </Card.Text>
                  </Card.Body>
              </Card>
          </Col>
      </Row>
  </React.Fragment>
 );}

export default Members;
