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
          É possível renovar o aluguel, cada renovação corresponde à mais uma semana (7 dias).<br/>
          O valor da renovação é de 50% do valor original - metade do preço por cada nova semana.<br/><br/>

          Não devolver dentro do prazo alugado e não comunicar acarreta numa multa com valor de 100% do aluguel original, por cada semana atrasada.<br/>
          Caso não seja possível devolver durante o prazo, avise no máximo até o último dia, assim é cobrada uma renovação, e não multa por atraso. (50% ao invés de 100%)<br/>
          
       
      </Container>
    </Jumbotron>
    </div>);
  }
}