import React from 'react';
import {Col, Row, Card} from "react-bootstrap";

const Members: React.FC = () => {
 return (
  <React.Fragment>
      <h2 className='pt-4'>Members</h2>
       <Row className='m-0'>
           <Col xs={12} sm={6} md={4} className='mt-3'>
               <Card>
                   <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
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
                   <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
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
                   <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
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
                   <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
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
                   <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
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
                   <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
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
