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
          Atualmente o cadastro é feito via whatsapp, onde é necessário foto dos seguintes documentos:<br/><br/>
          <ul>
              <li>Cpf e RG - Qualquer documento oficial que tenha essas informações</li>
              <li>Comprovante de residência</li>
          </ul>

         <Button href="https://api.whatsapp.com/send?phone=5547999826190" target="_blank" size="sm" variant="outline-success"> abrir whatsapp </Button>
          
       
      </Container>
    </Jumbotron>
    </div>);
  }
}