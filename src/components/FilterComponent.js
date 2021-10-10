import React, { Component } from "react";

import ReactStars from "react-rating-stars-component";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

export default class About extends Component {

  constructor(props) {
    super(props)   
    this.state = {
      gameName : '',
      category : 'Categoria',
      onlyAvailable: false, 
      complexityRating : 5
    }
    
    this.onChangeGameName = this.onChangeGameName.bind(this);
    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.onChangeOnlyAvailable = this.onChangeOnlyAvailable.bind(this);
    
    this.onChangeComplexity = this.onChangeComplexity.bind(this);
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

  onChangeComplexity(value) {
    this.setState({ complexityRating: value })
  }



  render() {
    var handle  =   this.props.filter;
    var clear = (state) =>  {
      var emptyState = {
        gameName : '',
        category : 'Categoria',
        onlyAvailable: false, 
        complexityRating : 5
      }
      this.setState(emptyState)
      handle(emptyState);
    }
   

    return (
      <div className="table-wrapper">

          <Accordion >
            <Card  className='accordion-inner' >
              <Accordion.Toggle as={Card.Header} eventKey="0">
                Pesquisar
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                    <Container fluid >
                      <Row>
                          <Form.Control size="sm"  placeholder="Nome do Jogo" value={this.state.gameName} onChange={this.onChangeGameName} />
                      </Row> 

                      <Row>
                          <Form.Control size="sm"   as="select" value={this.state.category} onChange={this.onChangeCategory} > 
                            <option>Categoria</option>
                            <option>Bronze</option>
                            <option>Prata</option>
                            <option>Ouro</option>
                            <option>Diamante</option>
                          </Form.Control>
                      </Row>   

                      <Row key="checkbox"  >
                        <Col > 
                          <Form.Check className="check-disponivel"  type="checkbox"  id={`check-api-checkbox`} >
                            <Form.Check.Label >Apenas disponíveis:</Form.Check.Label>
                            <Form.Check.Input   type="checkbox"  checked={this.state.onlyAvailable} onChange={this.onChangeOnlyAvailable} />
                          </Form.Check>
                        </Col>       
                      </Row> 


                      <Row  >  
                        <Col >
                          <Form.Label >Complexidade max: </Form.Label>
                        </Col>
                        <Col>
                          <ReactStars count={5} value={this.state.complexityRating} size={20} edit={true} isHalf={true} 
                          activeColor='#fff6c8' color='#1D2C19' onChange={this.onChangeComplexity}/>  
                        </Col>
                      </Row>  

                      <Form.Group as={Row}   >  
                        <Col sm="6">
                          <Button block="block" onClick={() => clear(this.state) } variant="success" size="sm"> Limpar</Button>
                        </Col>
                        <Col sm="6">                              
                          <Button block="block" onClick={() => handle(this.state) } variant="success" size="sm"> Pesquisar</Button>
                        </Col>
                      </Form.Group>             


                    </Container>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
           
          </Accordion>


         
    </div>);
  }


  /**
   * 
   *  
   * 
   * 
   

                    <Form.Group as={Row}  >
                            {<div  key="checkbox" >
                                <Form.Check  column sm="12" type="checkbox"  id={`check-api-checkbox`} >
                                  <Form.Check.Label >Disponível</Form.Check.Label>
                                  <Form.Check.Input type="checkbox"  checked={this.state.onlyAvailable} onChange={this.onChangeOnlyAvailable} />
                                </Form.Check>
                              </div>}
                        </Form.Group> 


   * 
   * 
   * 
   */
}