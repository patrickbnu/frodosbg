import React, { Component } from "react";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'

import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

export default class About extends Component {

  constructor(props) {
    super(props)   
    this.state = {
      gameName : '',
      category : 'Categoria',
      onlyAvailable: false
    }
    ;
    this.onChangeGameName = this.onChangeGameName.bind(this);
    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.onChangeOnlyAvailable = this.onChangeOnlyAvailable.bind(this);
  }

  onChangeGameName(e) {
    this.setState({ gameName: e.target.value })
  }

  onChangeCategory(e) {
    this.setState({ category: e.target.value })
  }

  onChangeOnlyAvailable(e) {
    this.setState({ onlyAvailable: e.target.checked })
  }



  render() {
    var handle  =   this.props.filter;
   

    return (
      <div className="table-wrapper">

          <Accordion  variant="dark" >
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                Filtro Básico
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                    <Form.Row className="xpto" >
                      <Form.Group as={Col}  >
                          <Form.Control size="sm"  placeholder="Nome do Jogo" value={this.state.gameName} onChange={this.onChangeGameName} />
                      </Form.Group> 

                    </Form.Row>
                    <Form.Row className="xpto" >
                      <Form.Group as={Col}  >
                          <Form.Control as="select" size="sm" value={this.state.category} onChange={this.onChangeCategory} > 
                            <option>Categoria</option>
                            <option>Bronze</option>
                            <option>Prata</option>
                            <option>Ouro</option>
                            <option>Diamante</option>
                          </Form.Control>
                      </Form.Group>



                      <Form.Group as={Col}  >
                          {
                            <div  key="checkbox" >
                              <Form.Check type="checkbox"  id={`check-api-checkbox`} >
                                <Form.Check.Input type="checkbox"  checked={this.state.onlyAvailable} onChange={this.onChangeOnlyAvailable} />
                                <Form.Check.Label>Disponível</Form.Check.Label>
                              </Form.Check>
                            </div>
                          }
                      </Form.Group> 
                      <Form.Group as={Col} >  
                          <Button  className="button-float-right" onClick={() => handle(this.state) } variant="outline-primary" size="sm"> Filtrar</Button>
                      </Form.Group>      
                  </Form.Row>


                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1">
                Filtro Avançado
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>Ainda não implementado, em breve!</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>


         
    </div>);
  }
}