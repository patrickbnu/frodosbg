import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
export default class About extends Component {

  constructor(props) {
    super(props)   
  }

  render() {
    return (<div className="">
    <Jumbotron fluid>
          <Container>
            Os jogos são divididos em categorias, cada uma com valor diferente. <br/>
            O período do aluguel é de até uma semana (7 dias), podendo ser renovado.<br/><br/>
            <ul>
              <li>R$20,00 - Bronze</li>
              <li>R$40,00 - Prata</li>
              <li>R$60,00 - Ouro</li>
              <li>R$80,00 - Diamante</li>
            </ul>
          </Container>
        </Jumbotron>
             
    </div>);
  }
}