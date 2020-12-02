import React, { Component } from "react";


import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

export default class About extends Component {

  constructor(props) {
    super(props)   
  }

  render() {
    return (<div className="">

    <Jumbotron fluid>
      <Container>
          Retirada é feita em minha residência na rua Divinópolis, bairro da velha central em Blumenau.<br/>
          Combinar horário via whatsapp.<br/>

         <Button href="https://api.whatsapp.com/send?phone=5547999826190" target="_blank" size="sm" variant="outline-success"> abrir whatsapp </Button>
          
       
      </Container>
    </Jumbotron>
    </div>);
  }
}