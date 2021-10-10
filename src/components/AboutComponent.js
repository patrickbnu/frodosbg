import React, { Component } from "react";


import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

import Register from "./about/Register.js";
import Values from "./about/Values.js";
import Withdrawal from "./about/Withdrawal.js";
import Return from "./about/Return.js";
import Delay from "./about/Delay.js";
import Empty from "./about/Empty.js";

export default class About extends Component {

  constructor(props) {
    super(props)   
  }

  render() {
    return (<div className="table-wrapper">
      <Accordion className='accordion' defaultActiveKey="0">
        <Card  className='accordion-card' >
            <Accordion.Toggle as={Card.Header} eventKey="0" >Valores     </Accordion.Toggle>
            <Accordion.Collapse eventKey="0"><Card.Body >    <Values/>   </Card.Body></Accordion.Collapse>
        </Card>


        <Card className='accordion-card' >
            <Accordion.Toggle as={Card.Header} eventKey="1" >Cadastro     </Accordion.Toggle>
            <Accordion.Collapse eventKey="1"><Card.Body>    <Register/>   </Card.Body></Accordion.Collapse>
        </Card>


        <Card className='accordion-card' >
            <Accordion.Toggle as={Card.Header} eventKey="2" >Retirada     </Accordion.Toggle>
            <Accordion.Collapse eventKey="2"><Card.Body>    <Withdrawal/>   </Card.Body></Accordion.Collapse>
        </Card>

        <Card className='accordion-card' >
            <Accordion.Toggle as={Card.Header} eventKey="3" >Devolução     </Accordion.Toggle>
            <Accordion.Collapse eventKey="3"><Card.Body>    <Return/>   </Card.Body></Accordion.Collapse>
        </Card>

        <Card className='accordion-card' >
            <Accordion.Toggle as={Card.Header} eventKey="4" >Atrasos e Renovações     </Accordion.Toggle>
            <Accordion.Collapse eventKey="4"><Card.Body>    <Delay/>   </Card.Body></Accordion.Collapse>
        </Card>

        <Card className='accordion-card' >
            <Accordion.Toggle as={Card.Header} eventKey="5" >Bônus por Indicação     </Accordion.Toggle>
            <Accordion.Collapse eventKey="5"><Card.Body>    <Empty/>   </Card.Body></Accordion.Collapse>
        </Card>
      </Accordion>
    </div>);
  }
}